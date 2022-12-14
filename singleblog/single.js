const blogId = location.href.split("?id=")[1];
const title = document.querySelector("#title")
const mainbody = document.querySelector(".desc_body")
const datecreated = document.querySelector("#cdate")
const likesc = document.querySelector(".likes")
const commentdiv = document.querySelector(".comments_display")
const image = document.querySelector(".image")
const description = document.querySelector(".description")
const commentinput = document.querySelector("#com")





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
 
async function getsingle(){
    try{
    const data =  fetch(`https://josephbrand-production.up.railway.app/blogs/${blogId}`)
    return await (await data).json()

    }
    catch(error){
        console.log(error)
    }
}

 async function printelements(){
    const blog = await getsingle()
    try{        
        title.innerHTML=blog.data.title;
        mainbody.innerHTML=blog.data.text;
        likesc.innerHTML=`<i class="fas fa-thumbs-up" id="like_${blogId}" onclick="likethis()"></i><p id="tlikes">${(blog.data.likes).length}</p>`
           
        datecreated.innerHTML=blog.data.date.split("T")[0]
        let comms= blog.data.comments
        commentdiv.innerHTML=""
        if(blog.data.image){
            image.src= blog.data.image     
          }
          else{
            image.classList.add("hide")
            description.classList.add("widen")
          }
     comms.reverse().forEach(element =>{
        commentdiv.innerHTML+=`
        <div class="one_comment">
                <div class="comment_profile"><i class="fas fa-user"></i><p>${element.author}</p></div>
                <div>
                    <p>${element.body}</p>
                    <p class="comment_date">${element.date.split("T")[0]}</p>
                </div>
            </div></div><div class="line"></div>
        `                
     });   

    }
    catch(error){
        console.log(error)
    }
    

}
async function  likethis(){    
  var like = fetch(`https://josephbrand-production.up.railway.app/blogs/${blogId}/like`,{
    method:"POST",
    headers:{
      'Authorization': `Bearer ${getCookie('token')}`
    }
      })
      .then(result=> result.json())
      .then((data)=>{   
        //
if(data.message ==  "logged in successfully"){
          window.location.href="../signin/signin.html"
      }
      renderblogs()
         //
    }
      )
  .catch((error)=>{
    console.log(error)
  })
  await printelements()
}
async function  commenton(){   
  var data ={
    text : commentinput.value
  }    
  var like = fetch(`https://josephbrand-production.up.railway.app/blogs/${blogId}/comment`,
    {
    method:"POST",
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getCookie('token')}`
    }   
}
    )
    .then(result=> result.json())
    .then((data)=>{   
      //
      if(data.message ==  "logged in successfully"){
        window.location.href="../signin/signin.html"
    }
    renderblogs()
  
      //
  }
    )
  .catch((error)=>{
    console.log(error)
  })
}
window.addEventListener('load',()=>{
  printelements()
})