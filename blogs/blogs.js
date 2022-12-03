var blog_view= document.querySelector(".whole_page_view")
var blog_exit= document.querySelector("#quit_blog")
var profile= document.querySelector("#cprofile")
var blogadmin= document.querySelector("#user_blog")


blog_exit.addEventListener('click',()=>{
    blog_view.classList.remove('blog_click')

})
var blogdiv= document.querySelector(".blogs")
window.addEventListener('load',()=>{
 var blogpage_blogs =JSON.parse(localStorage.getItem("blogs")) 
 
blogpage_blogs.forEach(element => {
    var index= (blogpage_blogs.indexOf(element))
    blogdiv.innerHTML+=`
    <div class="blog">
        <img src="${element.blogimages}" class="blog_image" />
        <div class="blog_text">
            <h1 id="fullpg_${index}"  class="blog_title" onclick="blogclick(this.id)">${element.title}</h1>
            <p class="blog_description">
            ${element.caption}
        </p></div>
        <div class="like_comment">
<div class="blog_like"><img id="like_${index}" src="/images/whitelike.png" class="like_icon" onclick="addlike()"><p class="blog_number" id="likes_${index}" onload="likeload(this.id)"></p></div>
<div class="blog_comment"><img id="comment_${index}" src="/images/comment.png" class="comment_icon"><p class="blog_number" id="comments"></p></div>
        </div>
             </div>`
        
});    
})

function blogclick(id){
    blog_view.classList.add('blog_click')      
    let blogindex=id.split("_")
    var index= blogindex[1]; 
    var allblogs=JSON.parse(localStorage.getItem("blogs"));   
    var singleblog=allblogs[index];
    var mainview=document.querySelector(".whole_page_view")
    mainview.classList.add("blog_click")
    document.querySelector("#b_image").src=`${singleblog.blogimages}`;
    document.querySelector("#b_title").innerHTML=singleblog.title;
    document.querySelector("#b_title2").innerHTML=singleblog.title;
    document.querySelector("#on_user").innerHTML=singleblog.owner;
    document.querySelector("#b_description").innerHTML=singleblog.caption;   
   var nlikes = likesnumber(index);
    document.querySelector(`.like_div`).innerHTML=`<img id="like_${index}" src="/images/yellow like.png" onclick="likethis(this.id)"class="icon like" alt="" id="likes" /><p id="likesn" >${nlikes}</p>`  

console.log(`like_${index}`)
}
//working on likes
function likethis(id){
    var newindex=id.split("_")
    var ind=newindex[1]    
  if(localStorage.getItem("likes") == null){
    localStorage.setItem("likes","[]")
   var signedinuser=(localStorage.getItem("signedin"))
    var like={
        "liker": signedinuser,
        "blogid": ind,          
    }
    var alllikes=JSON.parse(localStorage.getItem("likes"))
    console.log(alllikes.indexOf(like))
    if (alllikes.indexOf(like) == -1){        
   //alllikes.push(like)
    }
    else{
       var remove= alllikes.indexOf(like)
        alllikes.splice(remove,1)
    }
   var uploadlike=JSON.stringify(alllikes)
  //  localStorage.setItem("likes",uploadlike)
    
  }  
  else{
    var signedinuser=(localStorage.getItem("signedin"))
    var like={
        "liker": signedinuser,
        "blogid": ind,           
    }
    var alllikes=JSON.parse(localStorage.getItem("likes"))
   alllikes.push(like)
   var uploadlike=JSON.stringify(alllikes)
    localStorage.setItem("likes",uploadlike)
  }
  blogclick(`fullpg_${ind}`)
}
//likes function
function likesnumber(id){          
    likes=JSON.parse(localStorage.getItem("likes"))
    if (likes != null){
    var bloglikes=[];
    likes.forEach(element=>{
        if(element.blogid==id)
        bloglikes.push(element)
    })
          return bloglikes.length
}
else{
    return 0;
}
        //document.querySelector(`#${id}`).innerHTML= bloglikes.length;
   
}
var count=0;
function addlike2(id){
    if ((localStorage.getItem("signedin") != null)&& (count<1)  ){
    var currentlikes=document.querySelector(`#likesn`).innerHTML;
    console.log(currentlikes)
    var newlikes=parseInt(currentlikes)+1
    document.querySelector(`#likesn`).innerHTML=newlikes
    count++
    }
    else{
        window.location.href="/signin/signin.html"
    }
 
 }



 function addcomment(){
    var coment_vid=document.querySelector("#comments_print");
    var coment= document.querySelector("#comment").value;
    var user = localStorage.getItem("signedin")
    coment_vid.innerHTML+=` <div class="comment">
    <div class="comment_profile">
        <img src="/images/yellowprofle.png" class="profile icon" alt=""><p>${user}</p>
    </div>
    <p>${coment}<p></div>`
 }
blogadmin.addEventListener("click",()=>{
    if (localStorage.getItem("signedin") != null ){
        window.location.href="/myblogs/myblogs.html"
    }
    else{
        window.location.href="/signin/signin.html"
    }
})