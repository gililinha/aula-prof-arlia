const aplausos = document.querySelector("#som_tecla_aplausos")
function tocaSom (som) {
    alert(som);
}
tocaSom("clap, clap, clap");
let controle = "tocar";
if(controle == "tocar") {
    alert("Áudio pronto para tocar");
}else{
    alert("O áudio não está pronto");
}
const buttons = document.querySelectorAll("buton");
let contador = 0;
while (contador < buttons.legth){
buttons[contador].textContent = contador;
contador = contador = 1;
}