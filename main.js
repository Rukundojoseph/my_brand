
//sign up funciton
function signup(e){
    event.preventDefault();
var Username= document.querySelector("#username").value
var Password= document.querySelector("#password").value
var Password2= document.querySelector("#password2").value
if (Password==Password2){
    var user={
        "username": Username,
        "password": Password,
        "passwordconfirm": Password2
    }
    if ( localStorage.getItem(Username)==null ){
    json= JSON.stringify(user);
    localStorage.setItem(Username,json)   
    window.location.href ="/blogs/blog.html";

console.log("submitted")
console.log(user)
result.innerHTML= `signed up`
    }
    else{
      result.innerHTML= `you already have an account <a href=/signin/signin.html>Signin</a>`
    }
    result.classList.remove("invalid");
  }
  else{
    result.innerHTML= `your password should match`
    result.classList.add("invalid");
  }
}
// sign in function
function signin(e){
    event.preventDefault();
    var Username=document.querySelector("#username").value
    var Password=document.querySelector("#password").value
    var checkac=document.getElementsByName("checkb")
        var result=document.querySelector("#result")

    var user=localStorage.getItem(Username)
    var data=JSON.parse(user);
    console.log(data)
    console.log(Password,Username)    

    if(Username==null){
      result.innerHTML= `wrong email`
          }
          else if (Password==null){
            result.innerHTML= `wrong password`
          }
          else if ((Username == data.username) && (Password == data.password))
          {
            localStorage.setItem("signedin",data.username)
            result.innerHTML= `loged in succsesfuly`
            console.log("loged in")
            console.log(checkac.value)
            if (data.username="rkndjoseph@gmail.com"){
            window.location.href ="/admin/admin.html";
           
            }            
            else{
              localStorage.setItem("signedin",data.username)
             window.location.href = "/blogs/blog.html"                        
            }
          }
          else{
            result.innerHTML= `incorrect username or password`            
          }
}

function signout(){
  localStorage.removeItem("signedin")  
}

function log(){
 var logdiv=document.querySelector("#account_list")
 logdiv.classList.add("visiblec")
}
 
window.addEventListener("load",()=>{
  var acc=document.querySelector("#account")
  if( localStorage.getItem("signedin")==null){
    acc.innerHTML=`LOGIN`
    acc.href="/signin/signin.html"    
  }
  else{
    acc.innerHTML=`LOGOUT`
    acc.addEventListener('click',()=>{
      localStorage.removeItem("signedin")
    acc.href="/signin/signin.html"    
    acc.innerHTML=`LOGIN`
    })    
  }
})