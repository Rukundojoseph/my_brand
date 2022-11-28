var blog_view= document.querySelector(".whole_page_view")
var blog_exit= document.querySelector("#quit_blog")


function  blogclick(){
    blog_view.classList.add('blog_click')  
console.log("working")

}
blog_exit.addEventListener('click',()=>{
    blog_view.classList.remove('blog_click')

})