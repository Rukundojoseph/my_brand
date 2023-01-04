function setCookie(name, value, expirationDays) {
  const date = new Date();
  date.setTime(date.getTime() + (expirationDays * 1));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}

function getCookie(name) {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}

function signout(){
  setCookie("token","" , 1 )
} 
window.addEventListener("load",()=>{
  var acc=document.querySelector("#account")
  if( getCookie("token")==null){
    acc.innerHTML=`LOGIN`
    acc.href="../signin/signin.html"    
  }
  else{
    acc.innerHTML=`LOGOUT`
    acc.addEventListener('click',()=>{   
    signout()        
    acc.href="../signin/signin.html"    
    acc.innerHTML=`LOGIN`    
    })    
  }
})

