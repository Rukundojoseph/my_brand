function addlike(id){
    let blogindex=id.split("_")
    var index = blogindex[1]; 
    if(localStorage.getItem(`likes_${index}`)==null){
        localStorage.setItem(`likes_${index}`,[]);
       var likes=JSON.stringify(localStorage.getItem(`likes_${index}`))
       var singleblog=likes[index]
        var liker= localStorage.getItem("signedin")
       var like={
        "user": liker,
        "title": singleblog.title
       }      

    }
    else{
        var singleblog=likes[index]
        var liker= localStorage.getItem("signedin")
       var like={
        "user": liker,
        "title": singleblog.title
       }          

    }
  
}


