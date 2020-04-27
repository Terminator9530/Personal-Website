 //----------------------------------Animate on scroll----------------------------------//

 $(function () {
     $("#scroll").on('click', function () {
         $('html,body').animate({
             scrollTop: $($.attr($("#scroll a")[0], 'href')).offset().top
         }, 600);
     });
 });

 //----------------------------------------TypeWriter----------------------------------//

 var txt = ["Hello Everyone", "This is Vaibhav Shukla's Personal Website", "Hope you will enjoy my Website", "Scroll down to explore further"],
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