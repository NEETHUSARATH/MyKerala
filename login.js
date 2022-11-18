function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
  }
  
  function validateForm() {
  
    
    var email = document.Form.email.value;
    var password = document.Form.password.value;
    
    
  
    
  
    var emailErr = passwordErr = true;
    
 
  
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
    
  
  
  
   
  
  
  
    if(password == "") {
        printError("passwordErr", "Please enter your password");
        var elem = document.getElementById("password");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(regex.test(password) === false) {
            printError("passwordErr", "Incorrect password");
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
    
    
  
  
  
  
  
  
  
    
    if((emailErr || passwordErr ) == true) {
       return false;
    } 
  };
  
  
  
  