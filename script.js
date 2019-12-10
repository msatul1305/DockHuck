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
