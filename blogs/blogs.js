var blog_view= document.querySelector(".whole_page_view")
var blog_exit= document.querySelector("#quit_blog")
var profile= document.querySelector("#cprofile")
var blogdiv= document.querySelector(".blogs")



// blog_exit.addEventListener('click',()=>{
//     blog_view.classList.remove('blog_click')

// })

async function getblogs(){
try{
const data = await fetch("https://josephbrand-production.up.railway.app/blogs")

return await data.json()
}
catch(error){
 console.log(error)
}
}

async function renderblogs(){
    let gotblogs= await getblogs()
    console.log('blogs:',gotblogs.data.blogs)
    console.log('message:',gotblogs.message)
    console.log('total:',gotblogs.data.total)
    var blogpage_blogs = gotblogs.data.blogs 
  
blogpage_blogs.forEach(element => {
    blogdiv.innerHTML+=`
    <div id="blog_${element._id}" class="blog">
        <img src="${element.image}" class="blog_image" />
        <div class="blog_text">
           <a href="../singleblog/single.html?id=${element._id}"> <h1 id="fullpg_${element._id}"  class="blog_title" >${element.title}</h1></a>
            <p class="blog_description">
            ${element.body}
        </p></div>
        <div class="like_comment">
<div class="blog_like"><img id="like_${element._id}" src="/images/whitelike.png" class="like_icon" onclick="likethis(this.id)"><p class="blog_number" id="liks_${element._id}">${element.likes.length}</p></div>
<div class="blog_comment"><img id="comment_${element._id}" src="/images/comment.png" class="comment_icon"><p class="blog_number" id="cts_${element._id}">${element.comments.length}</p></div>
        </div>
             </div>`        
        
}); 
 
 
    return gotblogs
}






window.addEventListener('load',()=>{
 var blogpage_blogs =JSON.parse(localStorage.getItem("blogs")) 
 
 renderblogs()
  
    
})
//working on likes
async function  likethis(id){
    var newid= id.split("_")[1]
    console.log(newid)
  var like = fetch(`https://josephbrand-production.up.railway.app/blogs/${newid}/like`,{method:"POST"})
  .then((result)=>{
    if(result.status === 403){
        window.location.href="../signin/signin.html"
    }
  }
  )
  .catch((error)=>{
    console.log(error)
  })
}

var count=0;
//add comments function done
async function addcomment(id){
   console.log("relocate")  
   
 }
//add comments function done
 
