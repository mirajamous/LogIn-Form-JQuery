$(document).ready(function() {
  
   $.validator.addMethod("uppercase", function(value, element) {
        return /[A-Z]/.test(value);
    }, "Please enter at least one capital letter.");
    
    $.validator.addMethod("lowercase", function(value, element) {
        return /[a-z]/.test(value); 
    }, "Please enter at least one small letter.");

    $.validator.addMethod("digit", function(value, element) {
        return /\d/.test(value); 
    }, "Please enter at least one digit.");

    $.validator.addMethod("specialChar", function(value, element) {
        return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);
    }, "Please enter at least one special character.");

$("#loginForm").validate({
   rules:{
     email:{
       required: true,
       email: true,
     },
     password:{
       required: true,
       minlength: 8,
       uppercase: true,
       lowercase: true,
       digit: true,
       specialChar: true
     },
   },messages: {
    email:{
        required: "Please enter your email",
        email: "Please enter a valid email address"
     },
     password:{
       required: "Please enter your password",
       minlength: "Password must be 8 characters at least",
       digit: "Please enter one digit at least",    
       uppercase: "Please enter one capital letter at least",
       lowercase: "Please enter one small letter at least",
       specialChar: "Please enter one special character at least"
       
     }
     
     
     
  },
  
  submitHandler: function(form) {

    alert("Form submitted successfully!");
     form.reset();
     return false;
    
  }
 });
  


 });