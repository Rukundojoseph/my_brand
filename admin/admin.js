var  POSTB=document.querySelector("#add_post");
var posttab=document.querySelector(".fullpage_bpost")
var Btable=document.querySelector("#table")
var username=document.querySelector("#admin_name")
var signout=document.querySelector("#sout")
var count=0
signout.addEventListener('click',()=>{
    localStorage.removeItem("signedin")
})

POSTB.addEventListener('click', ()=>{   
if (count==0){
    posttab.classList.add("press_post")
    count=1
}
else{
    posttab.classList.remove("press_post")
    count=0;
}

})
window.addEventListener('load',()=>{    
   var signedinuser=localStorage.getItem("signedin")
   username.innerHTML=`${signedinuser}`
    for (let i = 0; i < localStorage.length; i++)   {
        console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
    }
 var lblogs=localStorage.getItem("blogs")
var blogs =JSON.parse(lblogs)
console.log(blogs)
if (localStorage.getItem("blogs") != null ){
}
localStorage.removeItem("blogs")

})


function addblog(e){
    event.preventDefault();
    var blogcaption=document.querySelector("#blog_caption").value
  //  var blog_image=document.querySelector("#image_input").value
    var blog_title=document.querySelector("#blog_title").value
    var blog ={
        "title": blog_title,
        "caption": blogcaption
      }
    if (localStorage.getItem("blogs")==null){
  console.log(blog_title,blogcaption)       
     json=JSON.stringify(blog)
     localStorage.setItem("blogs",json) 
}
else{
    var old=localStorage.getItem("blogs")
    var old_blogs=JSON.parse(old)
    new_blog=[old_blogs,blog]    
    localStorage.setItem("blogs",JSON.stringify(new_blog))
    console.log(new_blog)
    console.log(blog)
}
}

  
  
  //post blog codes
/*blogs.forEach(element => {       
  var bdate ="11/27/2022"
       Btable.innerHTML+=` <tr><td>${element.title}</td><td>${bdate}</td><td>0</td><td>0</td><td><div class="delete_cancel"><img src="/images/edit.png" class="icon"/><img src="/images/delete.png" class="icon"/></div></td></tr>`    
});*/