var firebaseConfig = {
    apiKey: "AIzaSyBj3lPg_59wyJBzIzlSKERF_6OmNjlANNw",
    authDomain: "todo-app-7d42a.firebaseapp.com",
    projectId: "todo-app-7d42a",
    storageBucket: "todo-app-7d42a.firebasestorage.app",
    messagingSenderId: "518069009396",
    appId: "1:518069009396:web:8fe9101e8b2c20c48e57a1"
  };

  
  var app = firebase.initializeApp(firebaseConfig);  
  
//   console.log(app);
  
  
  
  function login() {
  
    var email = document.getElementById("Email")
    var password = document.getElementById("Password")
  
  
    console.log(email.value);
    console.log(password.value);
  
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user);
    window.location.href="./Todo App/Todoindex.html"
    
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    
  });
  }
  
  
  
  
  