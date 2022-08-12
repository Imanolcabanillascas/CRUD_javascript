
let form = document.getElementById("form");
let email = document.getElementById("email");
let names = document.getElementById("name");
let age = document.getElementById("age");
let entero = parseInt(age.value);


//evento que hace que funcione el submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //console.log("click en boton");
  Validation();
});

form.addEventListener("reset", (e) => {
  e.preventDefault();
  //console.log("click en boton");
  reset();
});

let reset = () => {
  email.value = '';
  age.value = "";
  names.value = '';

}

//validar que se ingresen datos
let Validation = () => {
  validarEntero(age.value)
};
function validarEntero(numero) {
  //intento convertir a entero.
  //si era un entero no le afecta, si no lo era lo intenta convertir
  valor = parseInt(numero)

  //Compruebo si es un valor numérico
  if (isNaN(numero)) {
    //entonces (no es numero) devuelvo el valor cadena vacia
    alert("No es numero");
    numero = '';
    console.log("no es numero");
  } else {
    //En caso contrario (Si era un número) devuelvo el valor
    if (email.value === ""|| names.value === "" || age.value === "") {
      alert("agregar datos");

      console.log("falló");

    } else {
      //console.log("Envío correcto");
      // alert("Envio exitoso");

      aceptDatos();
    }

  }
}
//Guarda los datos
let datosEmail = {};
let datosAge = {};
let datosNames = {};


//aceptar datoss
let aceptDatos = () => {

  datosAge["text"] = age.value;
  datosEmail["text"] = email.value;

  datosNames["text"] = names.value;

  console.log(datosEmail, datosAge, datosNames);
  creartarget();
};
let creartarget = () => {
  contenedor.innerHTML += `
  <div class="card m-2" style="width: 15rem;">
      
              <div class="card-body">
                Correo: <p id="save_email" class="fs-6"> ${datosEmail.text}</p>
                Nombre: <p class="fs-6">${datosNames.text}</p>
                Edad: <p class="fs-6"> ${datosAge.text}</p>
                <button class="btn btn-success"id="edit"  onClick="editarTarget(this)">Editar</button>
                <button class="btn btn-danger"id="delete" onClick="eliminarTarget(this)" >Borrar</button>
              </div>

  </div>

  `;

  email.value = '';
  age.value = "";
  names.value = '';

};

let eliminarTarget = (e) => {
  var opcion = confirm("¿Desea borrar?")
  if (opcion == true) {
    e.parentElement.parentElement.remove();
  }
}

let editarTarget = (e) => {
  let selectedTask = e.parentElement;
  email.value = selectedTask.children[0].innerHTML;
  names.value = selectedTask.children[1].innerHTML;
  age.value = selectedTask.children[2].innerHTML;
  e.parentElement.parentElement.remove();
};
