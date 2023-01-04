function signout(){
  localStorage.removeItem("signedin")  
}
 
window.addEventListener("load",()=>{
  var acc=document.querySelector("#account")
  if( localStorage.getItem("signedin")==null){
    acc.innerHTML=`LOGIN`
    acc.href="../signin/signin.html"    
  }
  else{
    acc.innerHTML=`LOGOUT`
    acc.addEventListener('click',()=>{
      localStorage.removeItem("signedin")
    acc.href="../signin/signin.html"    
    acc.innerHTML=`LOGIN`
    })    
  }
})

