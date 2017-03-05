window.onload = function(){
  var contactButton = document.getElementById("contactFormButton");
  console.log(contactButton);

  contactButton.addEventListener("click", displayFormResponse);
}


function displayFormResponse() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  // var message = document.getElementById("message");
  var response = document.getElementsByClassName("message-us__section--response")[0];

  var thanksHeader = document.createElement('h3');
  var thanksMessage = document.createElement('p');

  console.log(email);
  console.log(name);

  var heading = "Thanks for reaching out " + name + ".";
  var message = "Your message of was recieved and we will be getting back to you shortly at " + email + ". Thanks!";

  console.log(heading);
  console.log(message);

  thanksHeader.innerHTML = heading;
  thanksMessage.innerHTML = message;

  response.style.display = "flex";
}
