function verificarNombre() {
  let nombreIngresado = document.getElementById("nombre").value.trim();
  if (nombreIngresado === "") {
    document.getElementById("mensaje1").textContent = "Por favor, ingresa tu nombre.";
  } else {
    let confirmar = Swal.fire({
      title: "El nombre ingresado en el correcto:" + nombreIngresado + "?",
      text: "Si no lo es, ingresalo de nuevo",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, es mi nombre"
    }).then((result) => {
      if (result.isConfirmed) {
        document.getElementById("mensaje1").textContent = "¡Bienvenido, " + nombreIngresado + "!";
        localStorage.setItem("nombre", nombreIngresado);
        Swal.fire({
          title: "Bienvenido!",
          icon: "success"
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        document.getElementById("nombre").value = "";
        document.getElementById("mensaje1").textContent = "Por favor, ingresa tu nombre nuevamente.";
      }
    });
  }
}
        

  function claseSeleccionada() {
      let selectElement = document.getElementById("clases");
      let claseElegida = selectElement.value;
      document.getElementById("mensaje2").textContent = "Has elegido la clase de " + claseElegida;
   }
   let arrayMascota = []
   let mascotaElegida2 
   function mascotaSeleccionada(){
      let selectElement2 = document.getElementById("mascotas");
      let mascotaElegida = selectElement2.value;
      document.getElementById("mensaje3").textContent = "Genial, este sera tu compañero por el resto de tu aventura."
      mascotaElegida2 = mascotaElegida
      guardarMascota()
   }
  function guardarMascota(){ 
    let datoMascota = {"tipo" : mascotaElegida2,};
    arrayMascota.push(datoMascota);
    localStorage.setItem("mascotas", JSON.stringify(arrayMascota));
  }
 let arrayClases = [
    {
        clase : "Mago",
        mana : 470,
        fuerza : 120,
        inteligecia : 380,
        destreza : 140,
        resistencia : 270,
    },
    {
        clase : "Guerrero",
        mana : 190,
        fuerza : 390,
        inteligencia : 180,
        destreza : 255,
        resistencia : 430,
    },
    {
        clase : "Arquero",
        mana : 285,
        fuerza : 270,
        inteligencia : 285,
        destreza : 420,
        resistencia : 95,
    },
    {
        clase : "Ladron",
        mana : 100,
        fuerza : 160,
        inteligencia : 470,
        destreza : 440,
        resistencia : 130,
    }
 ]


function mostrarRecompensa() {
  fetch('tiendas2.JSON')
    .then((res) => {
      return res.json(); 
    })
    .then(function(data) {
      let tiendas = data; 
      let tiendaRandom = Math.floor(Math.random() * tiendas.length); 
      let tiendaFinal = tiendas[tiendaRandom]; 
      let mensaje1 = `Item: ${tiendaFinal.pocion.nombre}, Item: ${tiendaFinal.armadura.nombre}, Item: ${tiendaFinal.arma.nombre}`;
      document.getElementById("mensaje4").textContent = mensaje1
    })
    .catch((error) => {
      console.log("Hubo un error:", error);
    });
}

function continuar1(){
  window.location.href = "comienzo.html"
}
function sendero1() {
  document.getElementById("historia").innerHTML = "<p>Has elegido el sendero de la izquierda. El sendero te lleva a un bosque tenebroso. De repente, escuchas un rugido..</p>";
  document.getElementById("opciones1").innerHTML = "<button onclick='explorarBosque()'>Explorar el bosque</button><button onclick='correr()'>Darte vuelta y correr</button>";
}

function correr(){
  document.getElementById("historia").innerHTML = "<p>Te has asustado y corriste sin pensar en otra cosa. Al correr a una alta velocidad, tropezaste con una rama y quedaste inconsiente en el piso. Perdiste la vida</p>"
  document.getElementById("opciones1").innerHTML = "<button onclick='reiniciar()'>Reiniciar aventura</button>"
}

function reiniciar(){
  window.location.href = "index.html"
}

function sendero2() {
  document.getElementById("historia").innerHTML = "<p>Has elegido el sendero de la derecha. El sendero te lleva a un río caudaloso. A lo lejos, en el medio del rio, logras ver un objeto tirado brillando fuertemente...</p>";
  document.getElementById("opciones1").innerHTML = "<button onclick='recuperarObjeto()'>Intentar recuperar el objeto brillante</button><button onclick='cruzarRio()'>Cruzar el río y continuar</button>";
}

function cruzarRio(){
  document.getElementById("historia").innerHTML = "<p>Al poner un pie sobre el rio, te resbalas. La corriente te arrastra, ahogandote y muriendo.</p>"
  document.getElementById("opciones1").innerHTML = "<button onclick='reiniciar()'>Reiniciar</button>"
}

function explorarBosque() {
  document.getElementById("historia").innerHTML = "<p>Decides explorar el bosque. Te adentras entre los árboles, atento a cualquier señal de peligro...</p>";
  document.getElementById("opciones1").innerHTML = "<button onclick='encontrarCueva()'>Continuar explorando</button><button onclick='treparArbol()'>Trepar un arbol</button>";
}

function treparArbol(){
  document.getElementById("historia").innerHTML = "<p>Intentaste escalar el arbol, pero digamos que tus habilidades son más parecidas a las de Dora la exploradora que a las de Tarzan. Te caiste y moriste al instante</p>"
  document.getElementById("opciones1").innerHTML = "<button onclick='reiniciar()'>Reiniciar</button>"
}

function recuperarObjeto() {
  document.getElementById("historia").innerHTML = "<p>Decides intentar recuperar el objeto brillante. Te adentras en el río, con cuidado de no ser arrastrado por la corriente. De repente, una criatura te ataca...</p>";
  document.getElementById("opciones1").innerHTML = "<button onclick='enfrentarCriatura()'>Utilizar la joya mágica para defenderse</button><button onclick='nadarRapido()'>Nadar rápidamente hacia la orilla opuesta</button>";
}

function nadarRapido(){
  document.getElementById("historia").innerHTML = "<p>Intentas nadar lo más rápido que puedes, pero la criatura estaba en su terreno. Esta te alcanza y te ahoga hasta matarte.</p>"
  document.getElementById("opciones1").innerHTML = "<button onclick='reiniciar()'>Reiniciar</button>"
}

function encontrarCueva() {
  document.getElementById("historia").innerHTML = "<p>Mientras continuas explorando el bosque, descubres una cueva oculta entre la maleza. Su entrada está adornada con extraños símbolos...</p>";
  document.getElementById("opciones1").innerHTML = "<button onclick='explorarCueva()'>Entrar en la cueva</button><button onclick='evitarCueva()'>Evitar la cueva</button>";
}

function evitarCueva(){
  document.getElementById("historia").innerHTML = "<p>Decides evitar la cueva. Sigues caminando y resulta que, desde la cueva, una manada de lobos que rondaba por ahi te empezó a seguir. Te atacaron y mmoriste.</p>"
  document.getElementById("opciones1").innerHTML = "<button onclick='reiniciar()'>Reiniciar</button>"
}

function enfrentarCriatura() {
  document.getElementById("historia").innerHTML = "<p>Decides enfrentar a la criatura acuática con la joya mágica. Una feroz batalla se desata entre tú y la criatura...</p>";
  document.getElementById("opciones1").innerHTML = "<button onclick='vencerCriatura()'>Continuar la lucha</button><button onclick='intentarRendirse()'>Intentar rendirse</button>";
}

function intentarRendirse(){
  document.getElementById("historia").innerHTML = "<p>¿Realmente creiste que iba a tener piedad? Es una criatura salvaje, usa la cabeza. Te desgarró el pecho de un golpe y moriste.</p>"
  document.getElementById("opciones1").innerHTML = "<button onclick='reiniciar()'>Reinciar</button>"
}

function explorarCueva() {
  document.getElementById("historia").innerHTML = "<p>Entras en la cueva y te adentras en sus profundidades. A medida que avanzas, el aire se vuelve más frío y húmedo...</p>";
  document.getElementById("opciones1").innerHTML = "<button onclick='enfrentarBandidos()'>Continuar explorando</button><button onclick='darseVuelta()'>Darse la vuelta</button>";
}

function darseVuelta(){
  document.getElementById("historia").innerHTML = "<p>Te das vuelta para salir en la cueva. En ese momento, te clavan una daga en la espalda unos bandidos que rondaban en la cueva. Moriste luego de 3 segundos.</p>"
  document.getElementById("opciones1").innerHTML = "<button onclick='reiniciar()'>Reiniciar</button>"
}

function enfrentarBandidos(){
  document.getElementById("historia").innerHTML = "<p>Al llegar al final de la cueva, te encuentras con 3 bandidos dispuestos a acabar con tu vida por solo tus miserables botas </p>"
  document.getElementById("opciones1").innerHTML = "<button onclick='pelearBandidos()'>Pelear</button><button onclick='rendirse()'>Rendirse</button>"
}

function rendirse(){
  document.getElementById("historia").innerHTML = "<p>Pides piedad, pero los bastardos no la conocen. Mueres apuñalado</p>"
  document.getElementById("opciones1").innerHTML = "<button onclick='reiniciar()'>Reiniciar</button>"
}

function pelearBandidos(){
  document.getElementById("historia").innerHTML = "<p>Comienzas la pelea con los 3 bandidos, los cuales resultaron ser solo unas miseras ratas que no sabian defenderse. Consigues ganar y les quitas el mapa que tiene el camino a la ciudad</p>"
  document.getElementById("opciones1").innerHTML = "<button onclick='irCiudad()'>Ir a la ciudad</button>"
}

function irCiudad(){
  document.getElementById("historia").innerHTML = "<p>Ves la ciudad a lo lejos. Al acercarte, un asesino buscado por todo el reino quiere quedarse con tus pertenecias y cuerpo. Cansado de la aventura, decides ponerle un final a esta historia y encaminarte al asesino para comenzar un pelea ¿Podras hacerle frente?</p>"
  document.getElementById("opciones1").innerHTML = "<button onclick='combatirJefe()'>Combate Final</button>"
}

function combatirJefe(){
  document.getElementById("historia").innerHTML = "<p>Realmente no fue un enfrentamiento muy dificil. Lo derrotaste con 2 movimientos y le gritaste en la cara 'Yo ya te venci papanatas'. Pero el asesino tenia una recompensa esperandote en su bolso...</p>"
  document.getElementById("opciones1").innerHTML = "<button onclick='verRecompensas()'>Ver tus recompensas</button>"
}

function verRecompensas(){
  window.location.href = "final.html"
}
function vencerCriatura() {
  document.getElementById("historia").innerHTML = "<p>Después de una intensa batalla, logras vencer a la criatura acuática. Recuperas la joya mágica y sigues adelante...</p>";
  document.getElementById("opciones1").innerHTML = "<button onclick='continuarCamino()'>Seguir adelante</button><button onclick='usarJoya()'>Intentar usar la joya</button>";
}

function usarJoya(){
  document.getElementById("historia").innerHTML = "<p>Golpeas la joya con la esperanza de que algo suceda. Esta explota y mueres prendido fuego.</p>"
  document.getElementById("opciones1").innerHTML = "<button onclick='reiniciar()'>Reiniciar</button>"
}

function escaparCriatura() {
  document.getElementById("historia").innerHTML = "<p>Decides intentar escapar de la criatura acuática. Nadas con todas tus fuerzas hacia la orilla opuesta...</p>";
  document.getElementById("opciones1").innerHTML = "<button onclick='llegarOrilla()'>Llegar a salvo a la orilla</button><button onclick='serAtrapado()'>Ser atrapado por la criatura</button>";
}

function continuarCamino() {
  document.getElementById("historia").innerHTML = "<p>Con la criatura derrotada, continúas tu camino con determinación. Te adentras más en el bosque, sin saber qué nuevos desafíos te esperan...</p>";
  document.getElementById("opciones1").innerHTML = "<button onclick='llegarCiudad()'>Seguir explorando</button><button onclick='pararADescansar()'>Frenar y descansar un rato</button>";
}

function pararADescansar(){
  document.getElementById("historia").innerHTML = "<p>Te acuestas a dormir. Mientras descansabas, la familia de la criatura te encuentra para cobrar venganza. Mueres deborado.</p>"
  document.getElementById("opciones1").innerHTML = "<button onclick='reiniciar()'>Reiniciar</button>"
}

function llegarOrilla() {
  document.getElementById("historia").innerHTML = "<p>Logras llegar a salvo a la orilla opuesta. Te sientes aliviado al escapar de la criatura y decides continuar tu viaje con renovado vigor...</p>";
  document.getElementById("opciones1").innerHTML = "<button onclick='continuarCamino()'>Seguir adelante</button><button onclick='volverAtras()'>Volver atrás</button>";
}

function serAtrapado() {
  document.getElementById("historia").innerHTML = "<p>A pesar de tus esfuerzos, la criatura acuática te atrapa antes de que puedas alcanzar la orilla. Quedas atrapado en sus garras, luchando por tu vida...</p>";
  document.getElementById("opciones1").innerHTML = "<button onclick='lucharContraCriatura()'>Luchar por tu libertad</button><button onclick='volverAtras()'>Aceptar tu destino</button>";
}
function lucharContraCriatura() {
  document.getElementById("historia").innerHTML = "<p>Desatas toda tu fuerza y habilidad en un intento desesperado por liberarte de las garras de la criatura acuática. Una batalla épica se desarrolla entre tú y la bestia...</p>";
  document.getElementById("opciones1").innerHTML = "<button onclick='vencerCriatura()'>Vencer a la criatura</button><button onclick='serDerrotado()'>Aceptar la derrota</button>";
}

function serDerrotado() {
  document.getElementById("historia").innerHTML = "<p>A pesar de tu valiente esfuerzo, la criatura acuática resulta ser demasiado poderosa. Te rindes ante su fuerza abrumadora...</p>";
  document.getElementById("opciones1").innerHTML = "<button onclick='continuarCamino()'>Seguir adelante</button><button onclick='volverAtras()'>Volver atrás</button>";
}

function llegarCiudad() {
  document.getElementById("historia").innerHTML = "<p>Después de horas de caminar, finalmente llegas a las puertas de una antigua ciudad. La ciudad está rodeada de altas murallas y parece estar en un estado de decadencia. Recuerdas una historia sobre un temible monstruo que rondaba por una aldea.</p>";
  document.getElementById("opciones1").innerHTML = "<button onclick='explorarCiudad()'>Explorar la ciudad</button><button onclick='enfrentarMonstruo()'>Buscar al temible monstruo</button>";
}

function enfrentarMonstruo(){
  document.getElementById("historia").innerHTML = "<p>Buscas al monstruo por todos lados. Lo encuentras a las afuera de una cueva pero era demasiado grande. Este era agresivo y al verte te ataca. Mueres alimentando a sus crias.</p>"
  document.getElementById("opciones1").innerHTML = "<button onclick='reiniciar()'>Reiniciar</button>"
}

function explorarCiudad() {
  document.getElementById("historia").innerHTML = "<p>Decides explorar la ciudad en busca de pistas sobre el monstruo que la acecha. Te adentras en sus calles, observando a los pocos habitantes que quedan...</p>";
  document.getElementById("opciones1").innerHTML = "<button onclick='irAlCentro()'>Ir al centro de la ciudad</button><button onclick='entrarCasa()'>Intentar entrar a casa abandonada</button>";
}

function entrarCasa(){
  document.getElementById("historia").innerHTML = "<p>Intentas forzar la entrada de lo que parece un hogar abandonado. Al abrir la puerta, te golpean la cabeza con un ladrillo. Resultaba ser una familia asustada. Te golpean hasta morir y te roban tus pertenencias.</p>"
  document.getElementById("opciones1").innerHTML= "<button onclick='reiniciar()'>Reiniciar</button>"
}

function irAlCentro(){
    document.getElementById("historia").innerHTML = "<p>Al llegar al centro de la ciudad, te encuentras con un asesino buscado por todos. Este quiere tomar tu cabeza y tu quieres la de el...</p>"
    document.getElementById("opciones1").innerHTML = "<button onclick='combatirJefe()'>Combate Final</button>"
}
