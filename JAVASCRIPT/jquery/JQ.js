
$(document).ready(function () {
   $("button").click(function (event) {
      let id=event.target.id
      if (id=="fadeout"){
         $("#img1").fadeOut("slow")
      }
      else{
         $("#img1").fadeIn("slow")
      }
   });
});

