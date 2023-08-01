var myIndex = 0;
function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);
}

function accordion() {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
          this.classList.toggle("accordion-active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
          } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
          } 
      });
  }
}