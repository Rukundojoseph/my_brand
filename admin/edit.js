var edit=document.querySelector(".edit_blog")

function editblog(id){
    edit.classList.add("press_edit"); 
var title=document.querySelector("#edit_title")
var caption=document.querySelector("#edit_caption")   
 let blogindex=id.split("_")
    var index= blogindex[1]; 
    var allblogs=JSON.parse(localStorage.getItem("blogs"));   
 var total=allblogs[index];
    //if (total.owner==(localStorage.getItem("signedin"))){
    title.value=total.title;
    caption.value=total.caption    
    var owner= total.owner
    var clickE=document.querySelector("#sub_edit")
    clickE.addEventListener("click",()=>{       
    
var newtitle=document.querySelector("#edit_title").value
var newcaption=document.querySelector("#edit_caption").value
  /*var  blog={
        "title": newtitle,
        "blogimage": total.blogimages,
        "caption": newcaption,
        "user": total.owner
        }     */     
        total.title=newtitle
        total.caption=newcaption        
    allblogs.splice(index,1,total)
   var newblogs= JSON.stringify(allblogs)
   localStorage.setItem("blogs",newblogs)
})
    }
//}
var cancel= document.querySelector("#edit_cancel")
cancel.addEventListener("click",()=>{
    edit.classList.remove("press_edit")   
})
