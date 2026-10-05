function saludo() {
    let Nombres= document.getElementById("Nombres").value;
    let Apellidos = document.getElementById("Apellidos").value;
    document.getElementById("mensaje").textContent = "Hola, " + Nombres + " " + Apellidos + " Buenas tardes";
}

function calculo_nota() {
    let teoria = parseFloat(document.getElementById("nota_teorica").value) || 0;
    let practica = parseFloat(document.getElementById("nota_practica").value) || 0;
    let suma = teoria + practica;
    let nombre1 = document.getElementById("nombres").value;

    if (suma <= 60) {
        document.getElementById("nota_sumada").textContent = "Hola " + Nombres + " tu nota es de " + suma + " reprobaste";
    } else {
        document.getElementById("nota_sumada").textContent = "Hola " + Nombres + " tu nota es de " + suma + " aprobaste";
    }
}