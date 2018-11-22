<!DOCTYPE html>
<html>
<body>

<h2>Objeto en formato JSON</h2>

<p id="demo"></p>
<P id="demo2"></P>
<P id="demo3"></P>
<script>
var texto = '{"empleados":[' +
'{"Nombre":"Pedro","Apellido":"Balderas" },' +
'{"Nombre":"Miguel","Apellido":"Montelongo" },' +
'{"Nombre":"Carlos","Apellido":"Santana" }]}';

obj = JSON.parse(texto);
document.getElementById("demo").innerHTML =
obj.empleados[0].Nombre + " " + obj.empleados[0].Apellido;

obj = JSON.parse(texto);
document.getElementById("demo2").innerHTML =
obj.empleados[1].Nombre + " " + obj.empleados[1].Apellido;

obj = JSON.parse(texto);
document.getElementById("demo3").innerHTML =
obj.empleados[2].Nombre + " " + obj.empleados[2].Apellido;

</script>

</body>
</html>
