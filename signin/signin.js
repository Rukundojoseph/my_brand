
var result=document.querySelector("#result")

function setCookie(name, value, expirationDays) {
    const date = new Date();
    date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  }
  
 


function login() {
    var Email=  document.querySelector("#username").value
var Password= document.querySelector("#password").value

    const data = {email: Email , password: Password};
  
    fetch('https://josephbrand-production.up.railway.app/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data =>{
        const adminID="63adb8befb539a066c33adc8"
        console.log(data.token)
        setCookie('token', data.token , 7);
        // if (data.userID == adminID){
        //    window.location.href="../adminpanel/admin.html"
        // }
        // else{
        //     window.location.href="../blogs/blog.html"
          
        // }
    } )
    .catch(error => console.log(error));
  }
  




function signin(e){    
    event.preventDefault();      
login()
   }