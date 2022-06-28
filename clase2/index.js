let i;
let numero;

numero=prompt("ingrese un numero y le mostraremos sus multiplos del 0 al 10");

for(i=0; i<11; i++){
    let resultado = numero * i;
    alert(`el resultado de ${numero} x ${i} = ${resultado}`);
}