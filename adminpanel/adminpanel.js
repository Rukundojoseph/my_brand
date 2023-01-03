var BlogCreate = document.querySelector("#bloger")
var EditBlog = document.querySelector("#Editer")
var Delete = document.querySelector("#remover")
var creatform = document.querySelector("#create_blog")
var EditForm = document.querySelector("#edit_blog")
var DeleteForm = document.querySelector("#delete_blog")
var DeletemessageForm= document.querySelector(".msgd")
var blogdiv = document.querySelector(".blogsc")




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
blogpage_blogs.forEach(element => {   
   blogdiv.innerHTML+=`
   <div class="singleblog"><img src="${element.image}" alt="blog">
   <div class="blog_details">
       <h1><b>${element.title}</b></h1>
       <p class="desc12">${element.body}</p> 
       <p class="bdate">${element.date.split("T")[0]}</p>           
   </div>            
   <p><i class="fas fa-thumbs-up"></i>${element.likes.length}</p> <p><i class="fas fa-comment"></i>${element.comments.length}</p>
   <button class="b1" onclick="editit(this.id)">Edit</button><button class="b2" onclick="deleteit(this.id)">Delete</button>
   </div> `        
       
}); 
   return gotblogs
}

window.addEventListener('load',()=>{
   renderblogs()
})