function validateInput() // Function named validateInput is initialized. This is used to write a if condition to generate alert window.
 {
    var firstNameValue = document.getElementById("Fname").value; // A variable "firstNameValue" is initialized. It is used to store first name entered in form.  
    var LastNameValue = document.getElementById("Lname").value; 
    var CityNameValue = document.getElementById("city").value;
    var StateNameValue = document.getElementById("state").value;
    var zipValue = document.getElementById("zip").value;
    var streetaddress = document.getElementById("saddress").value;
    if(firstNameValue==" " || firstNameValue==null
     || LastNameValue==" " || LastNameValue==null ) // "If" loop is used to check the input that user entered in website. Conditional OR is used to check if entrie is null or empty. 
    {
    alert("First name is" + firstNameValue 
          + "\n\n Last name is" + LastNameValue
          + "\n\n City Name is" + CityNameValue
          + "\n\n State name is" + StateNameValue
          + "\n\n Zip code is" + zipValue
          + "\n\n Street address is" + streetaddress);// alert() method is used to display a message, i.e. "First name...field". If condition is satisfied, the message is shown as popup with "ok" button. 
    }
    else
    {
     alert("please enter all required fields");
    }
}
    
   