const blogId = location.href.split("?id=")[1];
const title = document.querySelector("#title")
const mainbody = document.querySelector(".desc_body")
const datecreated = document.querySelector("#cdate")
const likesc = document.querySelector("#tlikes")
const commentdiv = document.querySelector(".comments_display")
const image = document.querySelector(".imagediv")








 
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
        console.log("title",blog)
        console.log("text",blog.data.text)
        title.innerHTML=blog.data.title;
        mainbody.innerHTML=blog.data.text;
        likesc.innerHTML=(blog.data.likes).length;   
        datecreated.innerHTML=blog.data.date.split("T")[0]
        let comms= blog.data.comments
        commentdiv.innerHTML=""
        if(blog.data.image){
            image.innerHTML= `< img src=${blog.data.image} class="image"/>`        }
     comms.forEach(element =>{
        commentdiv.innerHTML+=`
        <div class="one_comment">
                <div class="comment_profile"><i class="fas fa-user"></i><p>${element.author}</p></div>
                <div>
                    <p>${element.body}</p>
                    <p class="comment_date">${element.date.split("T")[0]}</p>
                </div>
            </div>        
        `                
     });   

    }
    catch(error){
        console.log(error)
    }
    

}
window.addEventListener('load',()=>{
    printelements()
})