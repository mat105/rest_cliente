
var datos = null;


function mostrar(cod){}

function crear_elemento(who){
    var li = document.createElement("li");
    var link = document.createElement("a");
    link.appendChild(document.createTextNode(who.codigo+" "+who.nombre));
    link.href = "#info";
    link.setAttribute("onclick", "mostrar("+who.codigo+")");
    li.appendChild(link);
    
    return li;
}

function agregar_jugador(who) {
    var lista = document.getElementById("lista");

    lista.appendChild( crear_elemento(who) );
}

function limpiar() {
    document.getElementById("lista").innerHTML = "";
}


function buscar_por(){
    limpiar();
    nombre = document.getElementById("bnombre").value;
    
    /*var ndatos = [];*/
    if(nombre=="" || nombre==null){
        recargar();
        return;
    }
    
    for(var px=0; px<datos.length; px++){
        if( datos[px].nombre.indexOf(nombre) > -1 ){
            /*ndatos.push( {  } )*/
            agregar_jugador( datos[px] );
        }
    }
}

function recargar() {
    limpiar();
    //cargar();
    for(var px = 0; px<datos.length; px++){
        agregar_jugador(datos[px]);
    }
}


function cargar() {
    var xhttp = new XMLHttpRequest();
    
    /*limpiar();*/
    
    xhttp.onreadystatechange = function() {
        if( xhttp.readyState == 4 && xhttp.status == 200 ){
            var jugas = JSON.parse(xhttp.responseText);
            
            datos = jugas;
            
            for(var px = 0; px<jugas.length; px++){
                agregar_jugador(jugas[px]);
            }
        }
        
    }
    
    xhttp.open("GET", "http://localhost:5000/jugador/ojeo", true)
    xhttp.setRequestHeader("Authorization", "Basic " + btoa("pepe:123"));
    xhttp.send('*');
}

cargar();