var BlogCreate = document.querySelector("#bloger")
var EditBlog = document.querySelector("#Editer")
var Delete = document.querySelector("#remover")
var creatform = document.querySelector("#create_blog")
var EditForm = document.querySelector("#edit_blog")
var DeleteForm = document.querySelector("#delete_blog")
var DeletemessageForm= document.querySelector(".msgd")
var messagediv= document.querySelector(".blog_details")



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

 function deleteit(id){
    DeleteForm.classList.remove("hidden")       

 }
 function cancel(){        
    DeleteForm.classList.add('hidden')      
 }
 
 async function getmessages(){
   try{
   const data = await fetch("https://josephbrand-production.up.railway.app/admin/messages",{
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
   async function rendermessages(){
      let gotmessages= await getmessages()   
      
      var messagesp = gotmessages.data
      messagediv.innerHTML=""    
   messagesp.reverse().forEach(element => {   
      messagediv.innerHTML+=`<div class="blog_details">
      <h1><b>${element.username}</b></h1>
      <p>${element.message}</p> 
      <p class="bdate">${element.email}</p>           
      <p class="bdate">${element.date.split("T")[0]}</p>        
      <button id='delete_${element._id}' onclick="deleteit(this.id);getid(this.id)" class="b2">Delete</button>
  </div> `        
          
   }); 
      return gotmessages
   }
   var usageid;
   function getid(id){
      usageid= id.split("_")[1]

      return usageid
      
     }
   async function  mdelete(){     
      var message = fetch(`https://josephbrand-production.up.railway.app/admin/messages/${usageid}`,
        {
        method:"DELETE",    
        headers: {      
          'Authorization': `Bearer ${getCookie('token')}`
        }   
    }
        )
      .then((result)=>{
        rendermessages()    
        console.log(result)
        if(result.status === 403){
            window.location.href="../signin/signin.html"
        } 
      }
      )
      .catch((error)=>{
        console.log(error)
      })
      cancel()
    }
    window.addEventListener('load' ,()=>{
      rendermessages()
   })