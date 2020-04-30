 //----------------------------------Animate on scroll----------------------------------//

 $(function () {
     $("#scroll").on('click', function () {
         $('html,body').animate({
             scrollTop: $($.attr($("#scroll a")[0], 'href')).offset().top
         }, 600);
     });
     $(".flex-container a").on('click', function () {
         $('html,body').animate({
             scrollTop: $($.attr(this, 'href')).offset().top
         }, 600);
     });
 });

 //----------------------------------------TypeWriter----------------------------------//

 var txt = ["Hello Everyone", "This is Vaibhav Shukla's Personal Website", "Hope you will enjoy my Website!!", "Scroll down to explore further"],
     count = 0,
     i = 0,
     timer;

 function welcome() {
     timer = setInterval(show, 100);
 }

 function show() {
     if (i == txt[count].length) {
         if (count == 3) {
             document.querySelector("a").style.animation = "move 0.8s alternate infinite linear";
             clearInterval(timer);
             return;
         }
         count++;
         i = 0;
         document.getElementById("typewriter").innerHTML = "";
     }
     document.getElementById("typewriter").innerHTML += txt[count].charAt(i);
     i++;
 }
 window.onload = function () {
     welcome();
 }


 //---------------------------sticky navbar---------------------------------//
 window.onscroll = function () {
     myFunction()
 };

 var header = document.getElementsByClassName("flex-container")[0];
 var sticky = header.offsetTop;
 var info=document.getElementById("info");
 var skill=document.getElementById("skills");
 var contact=document.getElementById("contact");

 function myFunction() {
     if (window.pageYOffset > sticky-40) {
         header.classList.add("sticky");
     } else {
         header.classList.remove("sticky");
     }
     if(window.pageYOffset<=10)
     {
        document.querySelectorAll(".flex-container a")[0].style.background="rgb(39, 38, 38)";
        document.querySelectorAll(".flex-container a")[1].style.background="rgb(39, 38, 38)";
        document.querySelectorAll(".flex-container a")[2].style.background="rgb(39, 38, 38)";
     }
     if (window.pageYOffset > info.offsetTop-window.pageYOffset/4) {
        document.querySelectorAll(".flex-container a")[0].style.background="rgb(171, 14, 243)";
        document.querySelectorAll(".flex-container a")[1].style.background="rgb(39, 38, 38)";
        document.querySelectorAll(".flex-container a")[2].style.background="rgb(39, 38, 38)";
    }
    if (window.pageYOffset > skill.offsetTop-window.pageYOffset/4) {
        document.querySelectorAll(".flex-container a")[1].style.background="rgb(171, 14, 243)";
        document.querySelectorAll(".flex-container a")[0].style.background="rgb(39, 38, 38)";
        document.querySelectorAll(".flex-container a")[2].style.background="rgb(39, 38, 38)";
    }
    if (window.pageYOffset > contact.offsetTop-window.pageYOffset/4) {
        document.querySelectorAll(".flex-container a")[2].style.background="rgb(171, 14, 243)";
        document.querySelectorAll(".flex-container a")[0].style.background="rgb(39, 38, 38)";
        document.querySelectorAll(".flex-container a")[1].style.background="rgb(39, 38, 38)";
    }
 }

 document.getElementsByClassName("flex-container")[0].addEventListener("click",function(e){
     console.log("e");
     document.querySelectorAll(".flex-container a").forEach(ele=>{
        if(e.path[0].outerText==ele.innerHTML)
        ele.style.background="rgb(171, 14, 243)";
        else
        ele.style.background="rgb(39, 38, 38)";
     });
 });

var flag=0;
     $( "#menu" ).click(function() {
         if(!flag){
            document.querySelector(".flex-container").style.display="flex";
            document.querySelector(".flex-container").style.opacity="0";
            document.querySelector(".flex-container").style.animation="visible 0.5s forwards linear reverse";
            document.getElementById("menu").innerHTML='<i class="fa fa-times" style="font-size: 50px;color: white;"></i>';
            flag=1;
         }
         else{
            document.querySelector(".flex-container").style.opacity="1";
            document.querySelector(".flex-container").style.animation="visible 2s forwards linear";
            document.querySelector(".flex-container").style.display="none";
            document.getElementById("menu").innerHTML='<i class="fa fa-align-justify" style="font-size: 50px;color: rgb(42, 49, 40);;"></i>';
            flag=0;
         }
      });