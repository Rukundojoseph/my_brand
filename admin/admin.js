var  POSTB=document.querySelector("#add_post");
var posttab=document.querySelector(".fullpage_bpost")
var Btable=document.querySelector("#blog_show")
var username=document.querySelector("#admin_name")
var cancel= document.querySelector("#cancel")

var user=localStorage.getItem("signedin")
var count=0
POSTB.addEventListener('click', ()=>{   
    posttab.classList.add("press_post")
cancel.addEventListener("click",()=>{
    posttab.classList.remove("press_post")
})
})
window.addEventListener('load',()=>{    
  
if (localStorage.getItem("blogs") != null  ){
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
         <div><h1>id:</h1>${element.id}</div>
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
     localStorage.setItem("blogs","[]") 
    var  blogarr=JSON.parse(localStorage.getItem("blogs")) ;
    }
    else{    
    var  blogarr=JSON.parse(localStorage.getItem("blogs")) ;
    } 
     var url=localStorage.getItem("imageurl")
    localStorage.removeItem("imageurl")      
    var blog_id=(JSON.parse(localStorage.getItem("blogs"))).length     
    var userid= function getuserid(){
      var signedinuser=localStorage.getItem("signedin")
      var users= JSON.parse(localStorage.getItem("Users"))
      users.forEach(element =>{
        if(element.username==signedinuser){
          return element.userid;
        }
      })
      (JSON.parse(localStorage.getItem("Users"))) 
     }
      var blog ={
        "title": blog_title,
        "caption": blogcaption,
        "blogimages": url,
        "owner": user,
        "userid": userid,
        "id" : blog_id
      }
   
        blogarr.push(blog)
        newblog=JSON.stringify(blogarr)
        localStorage.setItem("blogs",newblog);
        posttab.classList.remove("press_post")
        if ( (localStorage.getItem("signedin")) == "rkndjoseph@gmail.com" )
        {
          window.location.reload()    
      
          }
          else{
          window.location.reload()    

           
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
    var blog=total.forEach(element =>{
     if (element.id==index){
      return element
     }
    })
    function deletelc(id){
     var comments=JSON.parse(localStorage.getItem("comments"))
     var likes=JSON.parse(localStorage.getItem("likes"))
     for(let i=0;i<comments.length;i++){
      console.log(comments[i].blogid,id)
      if (comments[i].blogid==id){
        comments.splice(i,1)
        console.log("now")
        i=-1
      }
      else{
        console.log("after")
        var newcomments = JSON.stringify(comments)
        localStorage.setItem("comments",newcomments)
      }
     }
     for(let i=0;i<likes.length;i++){
      if (likes[i].blogid==id){
       likes.splice(i,1)
        i=-1
      }
      else{
        var newlikes = JSON.stringify(likes)
        localStorage.setItem("likes",newlikes)
      }
     }
      
    }
deletelc(index)   
    total.splice(index,1)
    var newblogs= JSON.stringify(total)
    localStorage.setItem("blogs",newblogs)
    //window.location.reload() 

}
  function editblog(id){
    let blogindex=id.split("_")
   var total=JSON.parse(localStorage.getItem("blogs"));
    var blog=total.forEach(element =>{
      if (element.id==index){
       return element
      }
     })
     blogindex= total.indexOf(blog)
    var index= blogindex[1];     
    total.splice(index,1)
    window.location.reload()  
  }