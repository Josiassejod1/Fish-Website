var colors = ["lightblue", "yellow", "red", "lightgreen", "orange"]
var currentColor = 0
var gallery = document.getElementById("gallery")
var class_ = "";
var lis = document.querySelectorAll("#service-group h3")


function changeColor() {
  --currentColor
  if (currentColor < 0) currentColor = colors.length -1
  for (var i = 0; i < lis.length; i++) {
    lis[i].style.fontFamily = "Fredoka One"
    lis[i].style.color = colors[(currentColor +i) % colors.length]
  }
}


function photoGallery() {
    for (var i = 1; i < 12; i++) {
      
      if (i == 1) {
        class_ = "carousel-item active"
      } else {
       class_ = "carousel-item"
      }

 
      var image = `<img class='img-thumbnail d-block w-100' src="images/gallery_fish${i}.jpg"/>`
       var newElement = document.createElement('div');
       newElement.className = class_
       newElement.innerHTML = image
      gallery.appendChild(newElement);
    }
}  
 photoGallery()   
setInterval(changeColor, 1000)
console.log("IT WORKS");