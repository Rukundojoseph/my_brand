function addlike(id){
    let blogindex=id.split("_")
    var index = blogindex[1]; 
    alert(index)
    if(localStorage.getItem(`likes_${index}`)==null){
       

    }
    else{     
       var likes=JSON.stringify(localStorage.getItem(`likes_${index}`))
        var index = blogindex[1]; 
        var singleblog=likes[index]
        var liker= localStorage.getItem("signedin")
       var like={
        "user": liker,       
       }          
       localStorage.setItem((JSON.stringify),like)


    }
  
}


