
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


