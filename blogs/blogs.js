var blog_view= document.querySelector(".whole_page_view")
var blog_exit= document.querySelector("#quit_blog")
var profile= document.querySelector("#cprofile")

function  blogclick(){
    blog_view.classList.add('blog_click')  
console.log("working")
}
blog_exit.addEventListener('click',()=>{
    blog_view.classList.remove('blog_click')

})

function addlike(){
    if (localStorage.getItem("signedin")==null){
        window.location.href="/signin/signin.html"
    }
}

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
    document.querySelector(`#likes`).innerHTML=`<div id="like_${index} onclick="likeload(this.id)"></div>`   
 
}

function likeload(id){    
    alert(id)
    let blogindex=id.split("_")
    var index = blogindex[1];    
    var liked= JSON.parse(localStorage.getItem(`likes_${index}`))
    document.querySelector(`#${id}`).innerHTML= liked.length;
 }


document.querySelector("#user_blog").addEventListener("click",()=>{
    window.location.href="/myblogs/myblogs.html"
})
