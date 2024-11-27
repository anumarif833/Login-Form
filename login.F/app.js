import {auth, createUserWithEmailAndPassword } from "./firebase.js";
AuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User Already Exit =>", user);
    // -------------------- Not Allowed To Direct Go On Landing Page ---------------------
    if (location.pathname !== "../Landing-Page/fiver-landingPage.html") {
      window.location = "../Landing-Page/fiver-landingPage.html";
    }
  } else {
    console.log("User Not LogIn");
 // if(location.pathname !== "../Form/login-form.html"){
    //   window.location = "../Form/login-form.html"
    // }
  }
});

   


let signup = () =>{
 let email = document.getElementById("email").value;
 let password = document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, email, password)
    .then((res) => { 
    console.log("user",res.user);
    })
    .catch((error) => {
      console.log("error",error.message);
      console.log("user");
    });
};

let signupBtn = document.getElementById("signupBtn");


// let Sign_up = document.getElementById("signup-form")
signupBtn.addEventListener("click",signup);






