import Swal from 'sweetalert2'

const Swal = require('sweetalert2')
Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
  })

  function mostrarTienda() { 
    return fetch('tiendas.json') 
    .then(response => response.json())
    .then(data => {
      let tiendas = data.tiendas;
      let tiendaRandom = Math.floor(Math.random()*tiendas.length);
      let tiendaFinal = tiendas[tiendaRandom];
      document.getElementById("mensaje4").textContent = "Tu tienda es la siguiente: " + tiendaFinal.nombre;
    })
    .catch(error => console.error('Error al obtener el JSON:', error));
    //document.getElementById("mensaje4").textContent = "Tu tienda es la siguiente: " + tiendaFinal;
  }

  fetch(tiendas.json)
.then((resp) => resp.json())
.then(function(data) {
  let tienda = data.results;
  
})