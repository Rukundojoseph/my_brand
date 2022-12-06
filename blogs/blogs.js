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
    var likes=likesnumber(index)
    var comments=loadcomments(index).length
    blogdiv.innerHTML+=`
    <div id="blog_${index}" class="blog">
        <img src="${element.blogimages}" class="blog_image" />
        <div class="blog_text">
            <h1 id="fullpg_${index}"  class="blog_title" onclick="blogclick(this.id)">${element.title}</h1>
            <p class="blog_description">
            ${element.caption}
        </p></div>
        <div class="like_comment">
<div class="blog_like"><img id="like_${index}" src="/images/whitelike.png" class="like_icon" onclick="likethis(this.id)"><p class="blog_number" id="liks_${index}">${likes}</p></div>
<div class="blog_comment"><img id="comment_${index}" src="/images/comment.png" class="comment_icon"><p class="blog_number" id="cts_${index}">${comments}</p></div>
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
    document.querySelector("#b_title").innerHTML=(singleblog.title).toUpperCase();
    document.querySelector("#b_title2").innerHTML=singleblog.title;
    document.querySelector("#on_user").innerHTML=singleblog.owner;
    document.querySelector("#b_description").innerHTML=singleblog.caption;
    // comment button
    document.querySelector("#c_button").innerHTML=`<img id="comment_${index}" src="../images/postb.png" onclick="addcomment(this.id)" class="icon commenti">`
    
    //comment button   
   var nlikes = likesnumber(index);
    document.querySelector(`.like_div`).innerHTML=`<img id="like_${index}" src="../images/yellow like.png" onclick="likethis(this.id)"class="icon like" alt="" id="likes" /><p id="likesn" >${nlikes}</p>`  
    var comments = loadcomments(index)   
    var coment_vid=document.querySelector("#comments_print");
    coment_vid.innerHTML=""
    comments.forEach(element => {
    coment_vid.innerHTML+=`<div class="comment">
    <div class="comment_profile">
        <img src="../images/yellowprofle.png" class="profile icon" alt=""><p>${element.commenter}</p>
    </div>
    <p>${element.comment}<p></div>`
    
   });
 

console.log(`like_${index}`)
}
//working on likes
function likethis(id){
    var signedinuser=(localStorage.getItem("signedin"))
    if(signedinuser != null ){
    var newindex=id.split("_")
    var ind=newindex[1]        
    var like={
        "liker": signedinuser,
        "blogid": ind,          
    }
  if(localStorage.getItem("likes") == null){
    localStorage.setItem("likes","[]")   
   var alllikes=JSON.parse(localStorage.getItem("likes"))
    alllikes.push(like)  
   var uploadlike=JSON.stringify(alllikes)
   localStorage.setItem("likes",uploadlike)  
    
  }  
  else{    
     var alllikes=JSON.parse(localStorage.getItem("likes"))
 //   var remove= alllikes.find(element=>{ element.liker == nlike.liker })
  function getid(){  for(let i=0;i<alllikes.length;i++)
    {
        if(alllikes[i].blogid==ind && alllikes[i].liker==signedinuser )
        {     
        return i
        }
    };}
    var likei= getid()
    console.log(likei)
    console.log(alllikes)
    if(likei == undefined ){
    alllikes.push(like)         
    }
   else{
        console.log(likei)     
       alllikes.splice(likei,1)  
        likei=-1;
   

   }
   var uploadlike=JSON.stringify(alllikes)   
    localStorage.setItem("likes",uploadlike)
  }
  if(document.querySelector(".blog_click")==null){
    document.querySelector(`#liks_${ind}`).innerHTML=likesnumber(ind)
  }
  else{
  blogclick(`fullpg_${ind}`)
  document.querySelector(`#liks_${ind}`).innerHTML=likesnumber(ind)
  }
}
else{
    window.location.href="../signin/signin.html"
}
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
   // console.log(bloglikes)
          return bloglikes.length

}
else{
    return 0;
}
        //document.querySelector(`#${id}`).innerHTML= bloglikes.length;
   
}
var count=0;
//function return comments
function loadcomments(id){
    comments=JSON.parse(localStorage.getItem("comments"))
    var blogcomments=[];
    if (comments != null){     
        comments.forEach(element=>{
            if(element.blogid==id)
            blogcomments.push(element)
        })
       // console.log(bloglikes)
              return blogcomments    
    } 
    else{
        return blogcomments
    }
}
//function return comments

//add comments function done
function addcomment(id){
    var signedinuser = localStorage.getItem("signedin")
    if(signedinuser!= null){   
    var index=id.split("_")
    var ind =index[1];
    var coment= document.querySelector("#comment").value;    
    var comment={
        "commenter": signedinuser,
        "blogid": ind,    
        "comment": coment      
    }
    var oldcom=JSON.parse(localStorage.getItem("comments"))
    if (oldcom == null){
        localStorage.setItem("comments","[]")
       var newcomts=JSON.parse(localStorage.getItem("comments"))
       newcomts.unshift(comment)
       var uploadcomt =JSON.stringify(newcomts);
       localStorage.setItem("comments",uploadcomt)
       blogclick(`fullpg_${ind}`)
    }
    else{
        var newcomts=JSON.parse(localStorage.getItem("comments"))
        newcomts.unshift(comment)
        var uploadcomt =JSON.stringify(newcomts);
        localStorage.setItem("comments",uploadcomt)
        blogclick(`fullpg_${ind}`)
        document.querySelector(`#cts_${ind}`).innerHTML=loadcomments(ind).length
    }

}
else{
    window.location.href="../signin/signin.html"
}
 }
//add comments function done
 
blogadmin.addEventListener("click",()=>{
    if (localStorage.getItem("signedin") != null ){
        window.location.href="../myblogs/myblogs.html"
    }
    else{
        window.location.href="../signin/signin.html"
    }
})