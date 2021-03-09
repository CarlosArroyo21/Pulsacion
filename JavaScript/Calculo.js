function recopilarDatos(){

    var identificacionIngresada = document.getElementById("identificacion").value;
    var nombreIngresado = document.getElementById("nombre").value;
    var sexoIngresado = getSexo();
    var edadIngresada = document.getElementById("edad").value;
    var pulsacion = calcularPulsacion(sexoIngresado,edadIngresada);
    return {"identificacion" : identificacionIngresada,
            "nombre": nombreIngresado,
            "sexo": sexoIngresado,
            "edad": edadIngresada,
            "pulsaciones": pulsacion};
}

function getSexo(){

    var opciones = document.getElementsByName("genero");
    for(var i = 0;i < opciones.length;i++){ 
        if(opciones[i].checked) { 
            return opciones[i].value; 
        } 
    }
}

function calcularPulsacion(sexo,edad){
    
    var pulsacion;
    
    if(sexo == "Masculino"){
        pulsacion = (210 - edad)/10;
    }else{
        pulsacion = (220 - edad)/10;
    }

    document.getElementById("pulsacion").value = pulsacion;
    return pulsacion;
}

function armarJSON(){
    
    var persona = recopilarDatos();
    return persona;

}

function registrarPersona(){

    
    let listpersonas = [];
    var persona = armarJSON();

    
    
    if(localStorage.getItem('DBlocal') != null){

        listpersonas = JSON.parse(localStorage.getItem('DBlocal'));
        
    }
    
    listpersonas.push(persona);

    localStorage.setItem('DBlocal',JSON.stringify(listpersonas));

}

function consultarDatos(){
    
    limpiarTabla();
    var listpersonas = [];
    
    if(localStorage.getItem('DBlocal') != null){

        listpersonas = JSON.parse(localStorage.getItem('DBlocal'));
    }

    listpersonas.forEach(item => {

        document.getElementById('registrosTabla').innerHTML +=
        '<tr>'+
            '<td>' +item.identificacion + '</td>'+
            '<td>' +item.nombre + '</td>'+
            '<td>' +item.sexo + '</td>'+
            '<td>' +item.edad + '</td>'+
            '<td>' +item.pulsaciones + '</td>'+
        '</tr>';  
    });
}

function limpiarTabla() {

    var myTable = document.getElementById('registrosTabla');

    
    var rowCount = myTable.rows.length;
    console.log(rowCount);

    if(rowCount != 0){
        for (var x = rowCount - 1; x >= 0; x--) {
            myTable.deleteRow(x);
        }
    }
}

