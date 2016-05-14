
function ponerCookie(){
    var usu = document.getElementById("usuario").value;
    var pass = document.getElementById("codigo").value;
    
    var xhttp = new XMLHttpRequest();
    
    
    xhttp.onreadystatechange = function() {
        if( xhttp.readyState == 4 && xhttp.status == 200 ){
            var jugas = JSON.parse(xhttp.responseText);
            setCookie("jofuser", jugas.token, 20000);
            window.location.href = "jugadores.html";
        }
        
    }
    xhttp.open("POST", "http://localhost:5000/login", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //xhttp.setRequestHeader("Authorization", "Basic " + btoa(usu+':'+pass));
    xhttp.send('usuario='+usu+'&codigo='+pass);
}
    
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    if (getCookie("jofuser") != "") {
        window.location.href = "jugadores.html";
    }
}


checkCookie();