var users=[];


function User(nombre, password){
  this.nombre=nombre;
  this.password=password;
}

function guardarDatos(){
  var nombre = document.getElementById("nombre").value;
  var password = document.getElementById("password").value;
  var user=new User(nombre, password);
  users.unshift(user);
  console.log(users);
  localStorage.setItem(nombre,JSON.stringify(password));
 // addItemToStorage(nombre,nombre);
}

// function addItemToStorage(key,value) {
//   if (typeof(Storage) != "undefined") {
//     localStorage.setItem(key,JSON.stringify(value)); //Local storage only supports strings
//   } else {
//     console.log("No local storage support");
//   }
// }


//
function recuperarDatos(){
var nombre=document.getElementById("nombre").value;
var password=JSON.parse(localStorage.getItem(nombre));
console.log(password);
 if (nombre != undefined ) {
  document.getElementById("datos").innerHTML = "Nombre: " + nombre + "<br/> Password: " + password;
 }
 else{
  document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
 }
}

// function guardarDatos(){
//  localStorage.nombre = document.getElementById("nombre").value;
//  localStorage.password = document.getElementById("password").value;
// }
//
// function recuperarDatos(){
//  if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
//   document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + "<br/> Password: " + localStorage.password;
//  }
//  else{
//   document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
//  }
// }
