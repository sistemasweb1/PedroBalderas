<!DOCTYPE html>
<html>
<body>

<p>ingrese un numero y clicl en el boton OK:</p>

<input id="id1" type="number" min="100" max="300" required>
<button onclick="myFunction()">OK</button>

<p>Si el numero esta fuera del intervalo de 100 - 300 se muestra la funcion invalida</p>

<p id="demo"></p>

<script>
function myFunction() {
    var inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    } else {
        document.getElementById("demo").innerHTML = "El valor entro adecuadamente";
    } 
} 
</script>

</body>
</html>
