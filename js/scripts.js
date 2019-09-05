// contact validation
// getting the name from form
$(document).ready(function() {
    $("#submit").click (function(event) {
      console.log("working")
      event.preventDefault();
      var name=document.getElementById("name").value;
      var email=document.getElementById("email").value;
      var text=document.getElementById("text").value;
      // form validation
      if (name == ""){
        alert("Please enter your name");
        return false;
      }else if(email == ""){
        alert("Please enter your email")
        return false;
      }else if(text == ""){
        alert("Please give a feedback")
        return false;
      }else {
        alert(name + " your message is received. Thank you");
      }
      document.getElementById("form1").reset();
    });
  });