const images = document.querySelectorAll(".image-carousel h2");
images.forEach(function(image){
  image.onclick = function(event){
    document.querySelector(".selected-image").classList.add("selected-image");
    const clickParent = event.target.parentNode;
    clickParent.classList.remove("selected-image");
  }
})