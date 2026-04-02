var config = {
    apiKey: "AIzaSyCca0cyyB-amomgOLviHSh2KSOKfCQV7L0",
    authDomain: "sparker-kit.firebaseapp.com",
    databaseURL: "https://sparker-kit-default-rtdb.firebaseio.com",
    projectId: "sparker-kit",
    storageBucket: "sparker-kit.appspot.com",
    messagingSenderId: "688446716619",
    appId: "1:688446716619:web:51415da7f329f60f3cf94e",
    measurementId: "G-LTC38KKS0F"
  };
  firebase.initializeApp(config);
  var messagesRef = firebase.database().ref("messages");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getInputVal("name");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  var message = getInputVal("message");

  saveMessage(name, email, phone, message);

  document.querySelector(".alert").style.display = "block";

  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },5000);

  document.getElementById("contactForm").reset();
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    message: message,
  });
}
