var  POSTB=document.querySelector("#add_post");
var posttab=document.querySelector(".fullpage_bpost")
var Btable=document.querySelector("#blog_show")
var username=document.querySelector("#admin_name")
var cancel= document.querySelector("#cancel")

var user=localStorage.getItem("signedin")
var count=0
POSTB.addEventListener('click', ()=>{   
if (count==0){
    posttab.classList.add("press_post")
    count=1
}
else{
    posttab.classList.remove("press_post")
    count=0;
}
cancel.addEventListener("click",()=>{
    posttab.classList.remove("press_post")
})
})
window.addEventListener('load',()=>{    
   var signedinuser=localStorage.getItem("signedin")
   username.innerHTML=`${signedinuser}`
    for (let i = 0; i < localStorage.length; i++)   {
        console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
    }

 
if (localStorage.getItem("blogs") != null ){
    var lblogs=localStorage.getItem("blogs")
var blogs =JSON.parse(lblogs)
console.log(blogs)
blogs.forEach(element => {           
    var index=(blogs.indexOf(element))
    console.log(index)
         Btable.innerHTML+=`<div class="blogdc">
         <div><h1>Blog title:</h1>${element.title}</div>
         <div class="blog_d"><h1>Blog caption:</h1><p>${element.caption}</p></div>
         <div><h1 class="bimage">BLOG IMAGE</h1><img src="${element.blogimages}" width="200" height="150"/></div>
         <div class="delc"><lable>Edit<img id="edit_${index}" onclick="editblog(this.id)" src="/images/edit.png" class="icon"/></lable><lable>delete<img id="blog_${index}" onclick="deletebg(this.id)" src="/images/delete.png" class="icon"/></label></div>
         <div><h1>CREATOR:</h1>${element.owner}</div>
         </div>`
           
  console.log(element.blogimages)
        });
}
//localStorage.removeItem("blogs")
})
function addblog(e){
    event.preventDefault();
    var blogcaption=document.querySelector("#blog_caption").value
    //var blogimage=document.querySelector("#image_input")
    var blog_title=document.querySelector("#blog_title").value
    if(localStorage.getItem("blogs")==null){
     var  blogarr=localStorage.getItem("blogs") || []
    }
    else{    
    var  blogarr=JSON.parse(localStorage.getItem("blogs")) || []
    } 
     var url=localStorage.getItem("imageurl")
    localStorage.removeItem("imageurl")             
      var blog ={
        "title": blog_title,
        "caption": blogcaption,
        "blogimages": url,
        "owner": user,
      }
   
        blogarr.push(blog)
        newblog=JSON.stringify(blogarr)
        localStorage.setItem("blogs",newblog);
        posttab.classList.remove("press_post")
        if ( (localStorage.getItem("signedin")) == "rkndjoseph@gmail.com" ){
          window.location.href="/blog/blogs.html"    
      
          }
          else{
          window.location.href="/myblogs/myblogs.html"   
          }  

}
const blogimage = document.querySelector("#image-input");


blogimage.addEventListener("change", function() {
  const reader = new FileReader();
   reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
   var url=uploaded_image
   nurl=url
   console.log(url);
   localStorage.setItem("imageurl",url)
  return url
      })
      ;
  reader.readAsDataURL(this.files[0]);  
});

function deletebg(id){
    let blogindex=id.split("_")
    var index= blogindex[1]; 
    total=JSON.parse(localStorage.getItem("blogs"));
    total.splice(index,1)
    var newblogs= JSON.stringify(total)
    localStorage.setItem("blogs",newblogs)
    if ( (localStorage.getItem("signedin")) == "rkndjoseph@gmail.com" ){
    window.location.href="/blog/blogs.html"    

    }
    else{
    window.location.href="/myblogs/myblogs.html"   
    } 
}
  function editblog(id){
    let blogindex=id.split("_")
    var index= blogindex[1]; 
    total=JSON.parse(localStorage.getItem("blogs"));
    total.splice(index,1)
  }