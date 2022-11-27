

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
function signin(e){
    event.preventDefault();
    var Username=document.querySelector("#username").value
    var Password=document.querySelector("#password").value
    var userac=document.querySelector("#user_check").value
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
            if (adminac=="admin"){
            window.location.href = "/admin/admin.html"
            }
            else{
             window.location.href = "/index.html" 
              console.log(adminac)           
            }
          }
          else{
            result.innerHTML= `incorrect username or password`
            
          }


}
