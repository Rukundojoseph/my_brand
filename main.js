
//sign up funciton
function signup(e){
    event.preventDefault();
var Username= document.querySelector("#username").value
var Password= document.querySelector("#password").value
var Password2= document.querySelector("#password2").value
if (Password==Password2){   

    if ( localStorage.getItem("Users")==null){
      localStorage.setItem("Users","[]");
      //get the local storage items 
     var userid = JSON.parse(localStorage.getItem("Users")).length;
      var user={
        "userid":  userid,
        "username": Username,
        "password": Password,
        "passwordconfirm": Password2
    }
    var newuser=JSON.parse(localStorage.getItem("Users"));    
    newuser.push(user);
    localStorage.setItem("Users",(JSON.stringify(newuser)))   
    localStorage.setItem("signedin",Username)
    window.location.href ="/blogs/blog.html";     
    result.innerHTML= `signed up`
    } 
    else{
     var userid = JSON.parse(localStorage.getItem("Users"));     
     console.log(userid)

    var newuser=JSON.parse(localStorage.getItem("Users")); 
    var user={
      "userid":  userid,
      "username": Username,
      "password": Password,
      "passwordconfirm": Password2
  }   
  function getuser(){ 
    for(let i=0;i<newuser.length;i++) {
    if (newuser[i].username==Username){
      return i;       
    }    
  }};
  var olduser=getuser()
  
  if (olduser== undefined){
  newuser.push(user);
  localStorage.setItem("Users",(JSON.stringify(newuser)));
  localStorage.setItem("signedin",Username)
  window.location.href ="/blogs/blog.html";     
  result.innerHTML= `signed up`
  }
  else{
    result.innerHTML= `you already have an account <a href=/signin/signin.html>Signin</a>`
    result.classList.remove("invalid");
  }     
   }      
    
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
       
    var data=JSON.parse(localStorage.getItem("Users"));
    console.log(data)
    var useraccount = ""
    data.forEach(element=> {
      if(element.username==Username){
        useraccount=element
      }
    })
    console.log("useracount:",useraccount)
    console.log(useraccount.username, Username)
    console.log(useraccount.password, Password)

          result.innerHTML= `Add Email`;      
           if ((Username == useraccount.username) && (Password == useraccount.password))
          {
            localStorage.setItem("signedin", `${Username}`)
            result.innerHTML= `loged in succsesfuly`
            console.log("loged in")
            console.log(checkac.value)
            if (useraccount.username=="rkndjoseph@gmail.com"){
              window.location.href = "/admin/admin.html"           
          
           
            }            
            else{
              localStorage.setItem("signedin",`${useraccount.username}`)
             window.location.href = "/blogs/blog.html"                        
            }
          }
          else if (useraccount.username != Username){
              result.innerHTML= `you have no account <a href=/signup/signup.html>Create account</a>`;
          }
          else{
            result.innerHTML= `incorrect password`            
          }
}

function signout(){
  localStorage.removeItem("signedin")  
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

function getmessage(){
  var email= document.querySelector()
  var username = document.querySelector()
  var message= document.querySelector()
  var message={
    "email": email,
    "username": username,
     "message": message,
  } 
if (localStorage.getitem("messages")==null){
  localstorage.setItem("messages","[]")
  var oldmessage= (localStorage.getItem("messages"))
  oldmessage.push(message)
  var newmessages= JSON.stringify(oldmessage)
  localStorage.setItem("messages", newmessages)
}
else{
  var oldmessage= (localStorage.getItem("messages"))
  oldmessage.push(message)
  var newmessages= JSON.stringify(oldmessage)
  localStorage.setItem("messages", newmessages)
}

}