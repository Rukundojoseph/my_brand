var main= document.querySelector("#personal_blogs")
window.addEventListener("load",()=>{
    if (localStorage.getItem("blogs") == null ){
        localStorage.setItem("blogs","[]")
   var blogs=JSON.parse(localStorage.getItem("blogs"))

    }
    else{
    var blogs=JSON.parse(localStorage.getItem("blogs"))
    
    }
var personalblogs=[]
var user= localStorage.getItem("signedin")

if (user!=null){    
blogs.forEach(element => {
    if (element.owner == user){
        var index=(blogs.indexOf(element))
        personalblogs.push(element)
        console.log(personalblogs)
        main.innerHTML+=`<div class="blogdc">
        <div><h1>Blog title:</h1>${element.title}</div>
        <div class="blog_d"><h1>Blog caption:</h1><p>${element.caption}</p></div>
        <div><h1 class="bimage">BLOG IMAGE</h1><img class="blog_image" src="${element.blogimages}" width="200" height="150"/></div>
        <div class="delc"><lable>Edit<img id="edit_${index}" onclick="editblog(this.id)" src="/images/edit.png" class="icon"/></lable><lable>delete<img id="blog_${index}" onclick="deletebg(this.id)" src="/images/delete.png" class="icon"/></label></div>
        <div><h1>CREATOR:</h1>${element.owner}</div>
        </div>`
    }    
  
}); 
}
else{
    window.location.href="/signin/signin.html"
}
})
