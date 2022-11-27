
//sign up funciton
function signup(e){
    event.preventDefault();
var Username= document.querySelector("#username").value
var Password= document.querySelector("#password").value
var Password2= document.querySelector("#password2").value

    var user={
        "username": Username,
        "password": Password,
        "passwordconfirm": Password2
    }
    json= JSON.stringify(user);
    localStorage.setItem(Username,json)    
console.log("submitted")
console.log(user)
result.innerHTML= `signed up`



}
// sign in function
function signin(e){
    event.preventDefault();
    var Username=document.querySelector("#username").value
    var Password=document.querySelector("#password").value
    var checkac=document.getElementsByName("checkb")
    var adminac=document.querySelector("#admin_check").value
    var result=document.querySelector("#result")

    var user=localStorage.getItem(Username)
    var data=JSON.parse(user);
    console.log(data)
    console.log(Password,Username)    
    console.log(data.username,data.password)     
     
    if(Username==null){
      result.innerHTML= `wrong email`
          }
          else if (Password==null){
            result.innerHTML= `wrong password`
          }
          else if ((Username == data.username) && (Password == data.password))
          {
            result.innerHTML= `loged in succsesfuly`
            console.log("loged in")
            console.log(checkac.value)
            if (checkac[1].checked){
            window.location.href = "/admin/admin.html"
            }
            else{
             window.location.href = "/blogs/blog.html" 
              console.log(adminac)           
            }
          }
          else{
            result.innerHTML= `incorrect username or password`
            
          }
}
function addblog(e){
  event.preventDefault();
  var blogcaption=document.querySelector("#blog_caption").value
  var blog_image=document.querySelector("#image_input").value
  var blog_title=document.querySelector("#blog_title").value
console.log(blog_title,blogcaption)

var old=localStorage.getItem("blogs");
var oldblogs=JSON.parse(old);
  var blog = [{
    "title": blog_title,
    "caption": blogcaption
  },oldblogs]
   json=JSON.stringify(blog)
   localStorage.setItem("blogs",json) 

}
//post blog codes
