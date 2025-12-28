const nameInput = document.getElementById("name-text");
const btn = document.getElementById("up");

btn.addEventListener("click", () =>{
    const nombre = nameInput.value.trim();
    if(nombre){
        alert("hola, " + nombre);
    }else{
        alert("por favor escribe tu nombre. ");
    }
})
//Forma con oneclick que explican 
function textapellidos(){
    alert("hola ,"+ document.getElementById("apellidousuario").value)
}