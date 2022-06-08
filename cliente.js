function consultaClima(){

  let ciudad = document.getElementById("ciudad").value;

  const options = {
    method: "GET"
  };
  
  // Petición HTTP
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=2d526180f2c7c6a364f98a405f31dda0`, options)
    .then(response => response.text())
    .then(data => {
      //convertimos formato json cadena en objeto de javascript
  
      let infoClima = JSON.parse(data);
      document.getElementById("resultado3").innerHTML = infoClima.name;
      document.getElementById("resultado").innerHTML = (infoClima.main.temp-273.15).toFixed(1)+"°C";
      document.getElementById("resultado1").innerHTML = infoClima.wind.speed+"Km/h";
      document.getElementById("resultado2").innerHTML = infoClima.main.humidity+"%"
    }).catch((error) => {console.log("Info error", error);});
}