
// var images = [], x = -1;
//     images[0] = "";
//     images[1] = "";
//     images{2} = "";

//     function displayNextImage(){
//         x = (x === images.length - 1) ? 0 : x + 1;
//         document.getElementById("img").src = images[x];
//     }

//     function displayPrevImage(){
//         x = ( x <= 0) ? images.length - 1 : x - 1;
//         document.getElementById("img").src = images[x];
//     }

//     function startTimer() {
//         setInterval;(displayNextImage, 3000);
//     }


//   (window).on('scroll', function() {
//     var header = $(".header");
//     if ($(this).scrollTop() > 50) {
//         if (!header.data('faded')) header.data('faded', 1).stop(true).fadeTo(400, 0.5);
//     } else if (header.data('faded')) {
//         header.data('faded', 0).stop(true).fadeTo(400, 1);
//     }
// });





window.onload = function(e){ 
    document.getElementById("defaultOpen").click();
 }  

function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  function myFunction() {
    window.location.href = "./html/illustrations.html";
  }






