var first=document.getElementsByTagName("td")[0]
// first.innerText = 'O'
// first.addEventListener("click",function () {
//   if(first.innerText === 'O'){
//     first.innerText = 'X'
//   } else {
//     first.innerText = 'O'
//   }
// })
var person={
  simbolo:'O'
}
var boton=document.getElementById("button")
boton.addEventListener('click', function() {
  person.name = prompt("Please enter your name", "Harry Potter");
  document.getElementById('nombreJugador1').innerText = person.name
});

var person2={
  simbolo:'X'
}
var boton2=document.getElementById("button2")
boton2.addEventListener('click', function() {
  person2.name = prompt("Please enter your name", "Luis Miguel");
  document.getElementById('nombreJugador2').innerText = person2.name
  if (person2.name) {
    document.getElementById('info').innerText = "Empieza jugador N 1 con las O"
  }
});


var espace = document.getElementsByTagName("td")
var jugadorActual = person
var comprobarTateti = function(){
  if(espace[0].innerText === espace[1].innerText  && espace[1].innerText  === espace[2].innerText && espace[0].innerText.trim() !== ""){
    return true
  } else if (espace[3].innerText === espace[4].innerText  && espace[4].innerText  === espace[5].innerText && espace[5].innerText.trim() !== ""){
    return true
  } else if (espace[6].innerText === espace[7].innerText  && espace[7].innerText  === espace[8].innerText && espace[8].innerText.trim() !== "") {
    return true
  } else if (espace[0].innerText === espace[4].innerText  && espace[4].innerText  === espace[8].innerText && espace[8].innerText.trim() !== "") {
    return true
  } else if (espace[2].innerText === espace[4].innerText  && espace[4].innerText  === espace[6].innerText && espace[6].innerText.trim() !== "") {
    return true
  } else if (espace[0].innerText === espace[3].innerText  && espace[3].innerText  === espace[6].innerText && espace[6].innerText.trim() !== "") {
    return true
  } else if (espace[1].innerText === espace[4].innerText  && espace[4].innerText  === espace[7].innerText && espace[7].innerText.trim() !== "") {
    return true
  } else if (espace[2].innerText === espace[5].innerText  && espace[5].innerText  === espace[8].innerText && espace[8].innerText.trim() !== "") {
    return true
  } else {
    return false
  }
};

var cambioDeTurno=  function(){
  if (jugadorActual=== person) {
    jugadorActual = person2
  } else {
    jugadorActual=person
  }
};

for (var i = 0; i < espace.length; i++) {
  // espace[i].innerHTML = "&nbsp;"

  espace[i].addEventListener("click", function(ev){
    var element = ev.target
    if (comprobarTateti()) {
      return
    }
    if (element.innerText.trim() === "") {

      element.innerText = jugadorActual.simbolo
      if(comprobarTateti()) {
        document.getElementById('info').innerText = "Ganaste! jugador " + jugadorActual.name
      } else {
        cambioDeTurno();
      }
    } else {
      window.alert('Elige otro casillero!')
    }
  })
}
