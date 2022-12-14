var BlogCreate = document.querySelector("#bloger")
var EditBlog = document.querySelector("#Editer")
var Delete = document.querySelector("#remover")
var creatform = document.querySelector("#create_blog")
var EditForm = document.querySelector("#edit_blog")
var DeleteForm = document.querySelector("#delete_blog")
var DeletemessageForm= document.querySelector(".msgd")
var blogdiv = document.querySelector(".blogsc")
var totalblogs = document.querySelector("#ttblogs")
var totalaccounts = document.querySelector("#ttaccounts")
var usersdiv = document.querySelector(".user_emails")
var createform=document.querySelector("#create_blog")
var editform=document.querySelector("#edit_blog")







BlogCreate.addEventListener('click',()=>{
    creatform.classList.remove("hidden")
    EditForm.classList.add('hidden')
    DeleteForm.classList.add('hidden') 

})

 function editit(id){
    EditForm.classList.remove("hidden")  
    creatform.classList.add('hidden')  
    DeleteForm.classList.add('hidden')
 }
 function deleteit(id){
    DeleteForm.classList.remove("hidden")    
    creatform.classList.add('hidden')
    EditForm.classList.add('hidden')  

 }
 function cancel(){    
    creatform.classList.add('hidden')
    EditForm.classList.add('hidden')
    DeleteForm.classList.add('hidden')  
    creatform.classList.add('hidden')


    creatform.childNodes.values=""
    EditForm.childNodes.values=""
 } 
 function getCookie(name) {
   const nameEQ = `${name}=`;
   const ca = document.cookie.split(';');
   for (let i = 0; i < ca.length; i++) {
     let c = ca[i];
     while (c.charAt(0) === ' ') {
       c = c.substring(1, c.length);
     }
     if (c.indexOf(nameEQ) === 0) {
       return c.substring(nameEQ.length, c.length);
     }
   }
   return null;
 }
  
 async function getblogs(){
   try{
   const data = await fetch("https://josephbrand-production.up.railway.app/admin/blogs",{
      headers: {
         'Authorization': `Bearer ${getCookie('token')}`
      }
   })   
   if(data.status== 403){
    window.location.href="../signin/signin.html"

   }
   return await data.json()
   }
   catch(error){
    console.log(error)
   }
   }
 async function renderblogs(){
   let gotblogs= await getblogs()   
   var blogpage_blogs = gotblogs.data.blogs  
   blogdiv.innerHTML=""
   totalblogs.innerHTML= gotblogs.data.total   
blogpage_blogs.reverse().forEach(element => {
  let ntitle= element.title.split("").slice(0,25).join("")
  let nbody= element.body.split(" ").slice(0,8).join(" ")
 
  if(ntitle != element.title){
    ntitle=`${ntitle}..`
  }  
  if(nbody != element.body){
    nbody=`${nbody}..`
  }  
   blogdiv.innerHTML+=`
   <div class="singleblog"><img src="${element.image}" alt="blog">
   <div class="blog_details">
       <h1><b>${ntitle}</b></h1>
       <p class="desc12">${nbody}</p> 
       <p class="bdate">${element.date.split("T")[0]}</p>           
   </div>            
   <p><i class="fas fa-thumbs-up"></i>${element.likes.length}</p> <p><i class="fas fa-comment"></i>${element.comments.length}</p>
   <div><button class="b1" id="edit_${element._id}" onclick="editit(this.id);getid(this.id)">Edit</button><button class="b2" id="delete_${element._id}" onclick="deleteit(this.id);getid(this.id)">Delete</button></div>
   </div> `        
       
}); 
   return gotblogs
}
async function getusers(){
   try{
   const data = await fetch("https://josephbrand-production.up.railway.app/admin/users",{
      headers: {
         'Authorization': `Bearer ${getCookie('token')}`
      }
   })   
   return await data.json()
   }
   catch(error){
    console.log(error)
   }
   }
async function renderusers(){
      let gotusers= await getusers()   
      var blogpage_blogs = gotusers.users  
      usersdiv.innerHTML=""
      totalaccounts.innerHTML= gotusers.population
   blogpage_blogs.forEach(element => {   
      usersdiv.innerHTML+=`
      <p>${element.email}</p> 
       `                  
   }); 
      return gotusers
   }
async function  addblog(){
      var data ={
        title : createform.title.value,
        image:  createform.image.value,
        body:  createform.body.value,
      }   
      console.log(data);
      var blog = fetch(`https://josephbrand-production.up.railway.app/admin/blogs/`,
        {
        method:"POST",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getCookie('token')}`
        }   
    }
        )
      .then((result)=>{
        renderblogs()
        createform.title=""
        createform.image=""       
        createform.body=""    
        if(result.status === 404){
            window.location.href="../signin/signin.html"
        } 
      }
      )
      .catch((error)=>{
        console.log(error)
      })
    }

function bloga(e){
      event.preventDefault();
      addblog()
      cancel()
  
  }
  var usageid;
function getid(id){
   usageid= id.split("_")[1]
   return usageid
   
  }

async function  editblog(){
   var data ={
     title : editform.title.value,
     image:  editform.image.value,
     body:  editform.body.value,
   }   
   console.log(data);
   var blog = fetch(`https://josephbrand-production.up.railway.app/admin/blogs/${usageid}`,
     {
     method:"PATCH",
     body: JSON.stringify(data),
     headers: {
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${getCookie('token')}`
     }   
 }
     )
   .then((result)=>{
     renderblogs()
     createform.title=""
     createform.image=""       
     createform.body=""    
     if(result.status === 404){
         window.location.href="../signin/signin.html"
     } 
   }
   )
   .catch((error)=>{
     console.log(error)
   })
 }
 function bloge(e){
   event.preventDefault();
   console.log(usageid)
   editblog()
   cancel()
}

async function  deleteblog(){  
   var blog = fetch(`https://josephbrand-production.up.railway.app/admin/blogs/${usageid}`,
     {
     method:"DELETE",    
     headers: {      
       'Authorization': `Bearer ${getCookie('token')}`
     }   
 }
     )
   .then((result)=>{
     renderblogs()    
     if(result.status === 404){
         window.location.href="../signin/signin.html"
     } 
   }
   )
   .catch((error)=>{
     console.log(error)
   })
   cancel
 }

 function setCookie(name, value, expirationDays) {
  const date = new Date();
  date.setTime(date.getTime() + (expirationDays * 1));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}

 function signout(){
  setCookie("token","" , 1 )
 window.location.href="../signin/signin.html"   
} 
   



window.addEventListener('load',()=>{
   renderblogs()
   renderusers()
})