const blogimage = document.querySelector("#image-input");

blogimage.addEventListener("change", function() {
  const reader = new FileReader();
   reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
   var url=uploaded_image
   console.log(url)
        document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
  return url
      }
      )
      ;
  reader.readAsDataURL(this.files[0]);  

});

