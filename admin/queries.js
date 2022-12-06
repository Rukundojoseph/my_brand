var querdiv= document.querySelector(".print_queries")


function getqs(){
    if(localStorage.getItem("messages") != null){
       var messages=localStorage.getItem("messages")
       message.forEach(element => {
        querdiv.innerHTML=`<div class="one_message">
        <div>
        <h1>${element.username}</h1>        
        </div>
        <div>
        <h4>${element.email}</h4>        
        </div>
        <div>
        <h1>${element.message}</h1>        
        </div>
        </div>`        
       });
    }
}
window.addEventListener('load',()=>{
    
})