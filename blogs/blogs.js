var blog_view= document.querySelector(".whole_page_view")
var blog_exit= document.querySelector("#quit_blog")
var profile= document.querySelector("#cprofile")
var blogdiv= document.querySelector(".blogs")



// blog_exit.addEventListener('click',()=>{
//     blog_view.classList.remove('blog_click')

// })
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
    var blogpage_blogs = gotblogs.data.blogs 
  
blogpage_blogs.forEach(element => {
  
  let nbody= element.body.split(" ").slice(0,12).join(" ")
  let ntitle= element.title.split("").slice(0,25).join("")
  if(ntitle != element.title){
    ntitle=`${ntitle}..`
  }  
  if(nbody != element.body){
    nbody=`${nbody}..`
  }  
    blogdiv.innerHTML+=`
    <div id="blog_${element._id}" class="blog">
        <img src="${element.image}" class="blog_image" />
        <div class="blog_text">
           <a href="../singleblog/single.html?id=${element._id}"> <h1 id="fullpg_${element._id}"  class="blog_title" >${ntitle}</h1></a>
            <p class="blog_description">
            ${nbody}..
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
  var like = fetch(`https://josephbrand-production.up.railway.app/blogs/${newid}/like`,{
    method:"POST",
    headers: {
      'Authorization': `Bearer ${getCookie('token')}`
    }   
  })
  .then((result)=>{
    if(result.status === 403){
        window.location.href="../signin/signin.html"
    }
  }
  )
  .catch((error)=>{
    console.log(error)
  })
   window.location.reload()
}

var count=0;
//add comments function done
async function addcomment(id){
   console.log("relocate")  
   
 }
//add comments function done
 
