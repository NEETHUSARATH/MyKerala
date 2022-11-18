function printError(Id, Msg) {
  document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {

  var name = document.Form.name.value;
  var email = document.Form.email.value;
  var mobile = document.Form.mobile.value;
  var password = document.Form.password.value;
  var cpassword = document.Form.cpassword.value;
  

  

  var nameErr = emailErr = mobileErr = passwordErr = cpasswordErr = true;
  

  if(name == "") {
      printError("nameErr", "Please enter your name");
      var elem = document.getElementById("name");
          elem.classList.add("input-2");
          elem.classList.remove("input-1");
  } else {
      var regex = /^[a-zA-Z\s]+$/;                
      if(regex.test(name) === false) {
          printError("nameErr", "Please enter a valid name");
          var elem = document.getElementById("name");
          elem.classList.add("input-2");
          elem.classList.remove("input-1");
      } else {
          printError("nameErr", "");
          nameErr = false;
          var elem = document.getElementById("name");
          elem.classList.add("input-1");
          elem.classList.remove("input-2");

          
      }
  }
  

  if(email == "") {
      printError("emailErr", "Please enter your email address");
       var elem = document.getElementById("email");
          elem.classList.add("input-2");
          elem.classList.remove("input-1");
  } else {
      
      var regex = /^\S+@\S+\.\S+$/;
      if(regex.test(email) === false) {
          printError("emailErr", "Please enter a valid email address");
          var elem = document.getElementById("email");
          elem.classList.add("input-2");
          elem.classList.remove("input-1");
      } else{
          printError("emailErr", "");
          emailErr = false;
           var elem = document.getElementById("email");
          elem.classList.add("input-1");
          elem.classList.remove("input-2");

      }
  }
  

  if(mobile == "") {
      printError("mobileErr", "Please enter your mobile number");
      var elem = document.getElementById("mobile");
          elem.classList.add("input-2");
          elem.classList.remove("input-1");
  } else {
      var regex =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if(regex.test(mobile) === false) {
          printError("mobileErr", "Please enter a valid 10 digit mobile number");
          var elem = document.getElementById("mobile");
          elem.classList.add("input-2");
          elem.classList.remove("input-1");
      } else{
          printError("mobileErr", "");
          mobileErr = false;
          var elem = document.getElementById("mobile");
          elem.classList.add("input-1");
          elem.classList.remove("input-2");
      }
  }
  


 



  if(password == "") {
      printError("passwordErr", "Please enter your password");
      var elem = document.getElementById("password");
          elem.classList.add("input-2");
          elem.classList.remove("input-1");
  } else {
      
      var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if(regex.test(password) === false) {
          printError("passwordErr", "Please enter atleast 8 charatcer with number, symbol, lowercase and uppercase letter");
          var elem = document.getElementById("password");
          elem.classList.add("input-2");
          elem.classList.remove("input-1");
      } else{
          printError("password", "");
          passwordErr = false;
          var elem = document.getElementById("password");
          elem.classList.add("input-1");
          elem.classList.remove("input-2");
      }
  }
  
  





  if(cpassword == "") {
      printError("cpasswordErr", "Please confirm your password");
      var elem = document.getElementById("cpassword");
          elem.classList.add("input-2");
          elem.classList.remove("input-1");
  } else {

      
    
      if(password.value !== cpassword.value) {
          printError("cpasswordErr", "Password doesn't match");
          var elem = document.getElementById("cpassword");
          elem.classList.add("input-2");
          elem.classList.remove("input-1");
          
      } else{

          printError("cpassword", "");
          cpasswordErr = false;
          var elem = document.getElementById("cpassword");
          elem.classList.add("input-1");
          elem.classList.remove("input-2");
         
      }
  }
  


  
  if((nameErr || emailErr || mobileErr || passwordErr || cpasswordErr ) == true) {
     return false;
  } 
};



