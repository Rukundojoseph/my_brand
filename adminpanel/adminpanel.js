var BlogCreate = document.querySelector("#bloger")
var EditBlog = document.querySelector("#Editer")
var Delete = document.querySelector("#remover")
var creatform = document.querySelector("#create_blog")
var EditForm = document.querySelector("#edit_blog")
var DeleteForm = document.querySelector("#delete_blog")






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
    creatform.childNodes.values=""
    EditForm.childNodes.values=""
 }
 