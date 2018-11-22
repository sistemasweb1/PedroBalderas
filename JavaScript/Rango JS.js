<!DOCTYPE html>
<html>
<body>

<h2>Ingrese un numero y presione OK:</h2>

<input id="id1" type="number" max="100">
<button onclick="myFunction()">OK</button>

<p>Si el numero excede del valor de 100 se muestra un mensaje</p>

<p id="demo"></p>

<script>
function myFunction() {
    var txt = "";
    if (document.getElementById("id1").validity.rangeOverflow) {
        txt = "El valor es muy grande";
    } else {
        txt = "El valor es correcto";
    } 
    document.getElementById("demo").innerHTML = txt;
}
</script>

</body>
</html>

