function RecopilarDatos(){

    var identificacionIngresada = document.getElementById("identificacion").value;
    var nombreIngresado = document.getElementById("nombre").value;
    var opciones = document.getElementsByName("genero");
    var sexoIngresado;
    
    for(var i = 0;i < opciones.length;i++){ if(opciones[i].checked) { sexoIngresado = opciones[i].value; } }

    
    var edadIngresada = document.getElementById("edad").value;

    

    CalcularPulsacion(sexoIngresado,edadIngresada);
}

function CalcularPulsacion(sexo,edad){
    
    var pulsacion;
    
    if(sexo == "Masculino"){
        pulsacion = (210 - edad)/10;
    }else{
        pulsacion = (220 - edad)/10;
    }

    document.getElementById("pulsacion").value = pulsacion;
}

function escribir(){
    return "<p>Jelou</p>";
}

