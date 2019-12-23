
var firebaseConfig = {
    apiKey: "AIzaSyBGdT1NqdlmpGM7nt5cIKI2ypE-OTQnqz8",
    authDomain: "duckhawk-1699a.firebaseapp.com",
    databaseURL: "https://duckhawk-1699a.firebaseio.com",
    projectId: "duckhawk-1699a",
    storageBucket: "duckhawk-1699a.appspot.com",
    messagingSenderId: "310324939369",
    appId: "1:310324939369:web:c290e9fdf3a88b4bb930f8",
    measurementId: "G-Y3CR0HNHNW"
  };

  
firebase.initializeApp(firebaseConfig);  


var database = firebase.database();
console.log(database);

  var db = firebase.database();
  var ref = db.ref();
  ref.child("/name1").set("Balgopal");
  ref.child("/email").set("Patro");
  console.log(db);





  function locationfun(){
    // document.getElementsByClassName('.onlocation').style["transform"] =  " translateX(0px)";
    document.getElementById('locationbox').style.width = "500px";
    // document.getElementsByClassName('.onlocation').style["top"] =  "7vh";
    // document.getElementsByClassName('.onlocation').style["transition-duration"] = "800ms";
}

function clearlocationSearchbox(){
    document.getElementById('locationbox').style.width = "0px";
    document.getElementById('locationin').value = "";
}

function openSignUPform(){
    document.getElementById('signup').style.display = "block";
    document.getElementById('login').style.display = "none";
}

function openLoginform(){
    document.getElementById('signup').style.display = "none";
    document.getElementById('login').style.display = "block";
}


var  UserName ;


function signup(){
    var name = document.getElementById('name').value;
    UserName = name;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;

  
          firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.

            var errorCode = error.code;
            var errorMessage = error.message;
            
            // ...
          });
        
     

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log(user.uid);
          var database = firebase.database();
          var ref = database.ref("User/");
          ref.child(user.uid+"/name").set(name);
          ref.child(user.uid+"/email").set(email);
        } else {
          // No user is signed in.
        }
      });   
}

function login(){    
    var email = document.getElementById('lemail').value;
    var password = document.getElementById('lpassword').value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  
        var errorCode = error.code;
        var errorMessage = error.message;
        if(errorCode != null){
  
          alert("No Account exist on your Email ! Please SignUp");
        
        }
      });
  

}

