function validateForm() {

      var name1 = document.forms["myForm"]["fname"].value;
      var name2 = document.forms["myForm"]["lname"].value;
      var email = document.forms["myForm"]["email"].value;
      var phoneno = document.forms["myForm"]["phoneno"].value;
      var password = document.forms["myForm"]["password"].value;
      var password1 = document.forms["myForm"]["password1"].value;

      if (name1 === "") {
        alert("First name must be filled out");
        return false;
      }

      if (name2 === "") {
        alert("Last name must be filled out");
        return false;
      }

      var at = email.indexOf("@"); 
      var dot = email.lastIndexOf("."); 
      if(at<1 || dot<at+2) 
      {  
        alert("Enter valid email id"); 
        return false; 
      } 

      var check = /^\d{10}$/;
      if (phoneno === "") {
        alert("Phone number must be filled out");
        return false;
      }
      else if(phoneno === check) {
        alert("Enter valid phone number");
        return false;
      }

      if (password === "") {
        alert("Fill the password");
        return false;
      }
      else if (password.length < 8) {
        alert("Password length must be atleast 8 characters");
        return false;
      }
      else if (password.length > 15) {
        alert("Password length must not exceed 15 characters");
        return false;
      }
      
      if(password1 == "") {
        alert("Enter the confirm password");
        return false;
      }
      else if(password !== password1) {
        alert("Fill the confirm password correctly");
        return false;
      }
    }

    const signUp = e => {
      let fname = document.getElementById('fname').value,
          lname = document.getElementById('lname').value,
          email = document.getElementById('email').value,
          pwd = document.getElementById('password').value;
  
      let formData = JSON.parse(localStorage.getItem('formData')) || [];
  
      let exist = formData.length && 
          JSON.parse(localStorage.getItem('formData')).some(data => 
              data.fname.toLowerCase() == fname.toLowerCase() && 
              data.lname.toLowerCase() == lname.toLowerCase()
          );
  
      if(!exist){
          formData.push({ fname, lname, email, pwd });
          localStorage.setItem('formData', JSON.stringify(formData));
          document.querySelector('form').reset();
          document.getElementById('fname').focus();
          alert("Account Created.\n\nPlease Sign In using the link below.");
      }
      else{
          alert("You have already signed up");
      }
      e.preventDefault();
  }
  
  function signIn(e) {
      let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
      let formData = JSON.parse(localStorage.getItem('formData')) || [];
      let exist = formData.length && 
      JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
      if(!exist){
          alert("Incorrect login credentials");
      }
      else{
          location.href = "/";
      }
      e.preventDefault();
  }