let velocidad = 135;    /* como la velocidad a la que va el vehiculo es variable hacemos una variable let */
const limite = 60;      /* como la velocidad es un limite y no va a cambiar es una constante */

if (velocidad > limite){
    console.log("Tienes que reducir la velocidad vas a "+velocidad+"km/h y el limite es de "+limite+"km/h");
}else{
    console.log("Puedes seguir a esa velocidad")
}