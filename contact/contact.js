var contactform= document.querySelector("#message_form")


function sendmessage() {
    event.preventDefault();


    const data = {email: contactform.email.value , name: contactform.name.value, message: contactform.message.value };
  
    fetch('https://josephbrand-production.up.railway.app/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data =>{      
        console.log(data)
        window.location.reload()           
        
    } )
    .catch(error => console.log(error));
  }