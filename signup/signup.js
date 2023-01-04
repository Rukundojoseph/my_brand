var signupform= document.querySelector("#signup_form")
var results= document.querySelector("#result")

function setCookie(name, value, expirationDays) {
    const date = new Date();
    date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  }
function signup(e) {
    event.preventDefault();
    var Email=  signupform.email.value;
var Password= signupform.password.value;
    const data = {email: Email , password: Password};
  
    fetch('https://josephbrand-production.up.railway.app/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data =>{       
        setCookie('token', data.jwt , 7);
      
        if(data.jwt){
            console.log("relocate")
            window.location.href="../blogs/blog.html"
           }
        if (data.errors.status == 400){
           results.innerHTML= data.errors.message || data.errors.email || data.errors.password
        }       
     
    } )
    .catch(error => console.log(error));
  }