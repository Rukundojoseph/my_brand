var  POSTB=document.querySelector("#add_post");
var posttab=document.querySelector(".admin_add_post")
var Btable=document.querySelector("#table")
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
})
window.addEventListener('load',()=>{
    var blog=localStorage.getItem("blogs");
    var data=JSON.parse(blog)
    console.log(data)
    console.log("local storage");
    for (let i = 0; i < localStorage.length; i++)   {
        console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
    }
   var lblogs=localStorage.getItem("blogs")
var blogs =JSON.parse(lblogs)
console.log(blogs)
blogs.forEach(element => {       
  var bdate =Date.now()
        Btable.innerHTML+=` <tr><td>${element.title}</td><td>${bdate}</td><td>0</td><td>0</td><td><img src="/images/edit.png" class="icon"/><img src="/images/delete.png" class="icon"/></td></tr>`    
});

})
