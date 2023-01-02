var BlogCreate = document.querySelector("#bloger")
var EditBlog = document.querySelector("#Editer")
var Delete = document.querySelector("#remover")
var creatform = document.querySelector("#create_blog")
var EditForm = document.querySelector("#edit_blog")
var DeleteForm = document.querySelector("#delete_blog")
var DeletemessageForm= document.querySelector(".msgd")




 function deleteit(id){
    DeleteForm.classList.remove("hidden")       

 }
 function cancel(){        
    DeleteForm.classList.add('hidden')      
 }
 