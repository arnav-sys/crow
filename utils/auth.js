const { initializeApp } = require("https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js");
const { getAnalytics } = require("https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js");
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } = require("https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyBrZbVFO67_LfnazJ20zSjzcZh4TWlvCWE",
    authDomain: "signin-9415b.firebaseapp.com",
    databaseURL: "https://signin-9415b-default-rtdb.firebaseio.com",
    projectId: "signin-9415b",
    storageBucket: "signin-9415b.appspot.com",
    messagingSenderId: "729547963767",
    appId: "1:729547963767:web:6fe3441a6faa59d5533572",
    measurementId: "G-4YK9P95YMB"
};

if(window.localStorage.getItem("email")){
    window.location = "/group.html"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
console.log(app);

const forms = document.querySelector(".forms"),
links = document.querySelectorAll(".link");
login = document.getElementById("login")
register = document.getElementById("register")
    

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
})
})

register.addEventListener("click",e=>{
  var email = document.getElementById("signup-email").value;
  var password = document.getElementById("signup-password").value;
  e.preventDefault();
  createUserWithEmailAndPassword(auth,email,password).then((userCredential) => {
    const user = userCredential.user;
    alert("Registration successfully!!");
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    alert(error);
  })
})