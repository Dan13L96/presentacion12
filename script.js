<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de datos</title>
</head>
<body>
    <h1>Formulario de datos</h1>

    <label>Usuario</label>
    <input type="text" name="usuario">
    <br><br>

    <label>Nombres</label>
    <input type="text" name="nombres" id="nombres">
    <br><br>

    <label>Apellidos</label>
    <input type="text" name="apellidos" id="apellidos">
    <br><br>

    <label>Contraseña</label>
    <input type="password" name="contra">
    <br><br>

    <label>Correo electrónico</label>
    <input type="email" name="correo">
    <br><br>

    <label>Edad</label>
    <input type="number" name="edad">
    <br><br>

    <label>Edad oficial</label>
    <input type="number" name="edadoficial" min="18" max="65">
    <br><br>

    <label>Puntuación</label>
    <input type="number" name="puntuacion" min="5" max="50" step="5">
    <br><br>

    <label>Fecha de nacimiento</label>
    <input type="date" name="nacimiento">
    <br><br>

    <label>Hora de nacimiento</label>
    <input type="time" name="hora">
    <br><br>

    <label>Color favorito</label>
    <input type="color" name="color">
    <br><br>

    <h2>¿Quién ganó el mundial de fútbol del 2014?</h2>
    <label>Alemania</label>
    <input type="radio" name="pais" value="Alemania">
    <br>
    <label>Bolivia</label>
    <input type="radio" name="pais" value="Bolivia">
    <br>
    <label>Brasil</label>
    <input type="radio" name="pais" value="Brasil">
    <br>
    <label>Francia</label>
    <input type="radio" name="pais" value="Francia">
    <br><br>

    <h2>¿Cuáles son películas de acción?</h2>
    <label>Juego de tronos</label>
    <input type="checkbox" name="peliculas" value="juego">
    <br>
    <label>Rápidos y furiosos</label>
    <input type="checkbox" name="peliculas" value="rapidos">
    <br>
    <label>Interstelar</label>
    <input type="checkbox" name="peliculas" value="interestelar">
    <br>
    <label>El infierno verde</label>
    <input type="checkbox" name="peliculas" value="infierno">
    <br>
    <label>Sentencia de muerte</label>
    <input type="checkbox" name="peliculas" value="sentencia">
    <br><br>

    <label>Seleccione un archivo</label>
    <input type="file" name="archivo" accept=".xlsx">
    <br><br>

    <label>Seleccione un valor</label>
    <input type="range" name="rango" min="0" max="100" value="50">
    <br><br>

    <button onclick="saludo()">Saludo</button>
    <p id="mensaje"></p>

    <br>

    <label>Nota teórica</label>
    <input type="number" id="nota_teorica" min="0" max="30">
    <br><br>

    <label>Nota práctica</label>
    <input type="number" id="nota_practica" min="0" max="70">
    <br><br>

    <button onclick="calculo_nota()">nota</button>
    <p id="nota_sumada"></p>

    <script>
        function saludo() {
            let nom = document.getElementById("nombres").value;
            let ape = document.getElementById("apellidos").value;
            document.getElementById("mensaje").innerHTML = "Hola " + nom + " " + ape;
        }

        function calculo_nota() {
            let n1 = Number(document.getElementById("nota_teorica").value);
            let n2 = Number(document.getElementById("nota_practica").value);
            let suma = n1 + n2;
            document.getElementById("nota_sumada").innerHTML = "La nota total es: " + suma;
        }
    </script>
</body>
</html>*