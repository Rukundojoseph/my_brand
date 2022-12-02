var pass = document.querySelector("#password").value

function checkpassword(){
var pass = document.querySelector("#password").value
var result=document.querySelector("#result");
    let format=/([a-z]{4,6})([0-9]{2,4})/;
    console.log(pass)
if (format.test(pass)==false){
    console.log("invalid password")
    result.innerHTML=`password should have 4 letters and 2 numbers`
    result.classList.add("invalid");
}    
else{
    result.innerHTML=``
    result.classList.remove("invalid")

}
}
function checkmatch(){
    var pass2= document.querySelector("#password2")
    if((pass == pass2)==true){
    result.innerHTML=`your password should match`
    result.classList.add("invalid");
    }
    else{
    result.innerHTML=``
    result.classList.remove("invalid") 
    }
}