/* -------------------------------------------------------------------------- */
/*                      Validación de FORMULARIOS                             */
/* -------------------------------------------------------------------------- */
// Validación del lado del cliente:
// No se debería enviar información al servidor hasta que no sea verificada
// (campos obligatorios, formato correcto)

// Obtener los datos ingresados por el usuario a través de los atributos (value)
// de algunas etiquetas y ejecutar las acciones que correspondan 

/*
¿Qué hacer?
1. Capturar los datos del formulario
2. Escuchar el submit del form
3. Validar los datos
4. Mostrar errores (el feedback al usuario para que realice un ingreso correcto)
5. Mostrar un mensaje de "Formulario cargado con éxito"
*/


/* -------------------------------------------------------------------------- */
/*               [1] FUNCION: capturar los datos del formulario               */
/* -------------------------------------------------------------------------- */
function capturarDatosFormulario() {
  // Establecer un objeto vacío que contendrá los datos del form
  // 👇🏼
  const objetoInformacion = {
    nombre: "",
    password: "",
    telefono: "",
    hobbies: [],
    nacionalidad: "",
  }

  // Seleccionar los nodos del dom

  // --------- Fieldset Datos
  // 👇🏼
  const nombre = document.querySelector("#nom");
  const password = document.querySelector("#pass");
  const telefono = document.querySelector("#tel");

  // --------- Fieldset Hobbies
  // 👇🏼
  const hobbies = document.querySelectorAll('[name=hobbies]');
  // console.log(hobbies);

  // --------- Fieldset Nacionalidad
  // 👇🏼
  const nacionalidad = document.querySelectorAll("[name=nacionalidad]");
  // console.log(nacionalidad);


  // Almacenar la información en el objeto preparado para ello
  // 👇🏼
  objetoInformacion.nombre = nombre.value;
  objetoInformacion.password = password.value;
  objetoInformacion.telefono = telefono.value;

  hobbies.forEach(function (hobbie) {
    if (hobbie.checked) {
      // para cada elemento, si está marcado el elemento se guarde en el array
      objetoInformacion.hobbies.push(hobbie.id);
    }
  })

  nacionalidad.forEach(function (nacion) {
    if (nacion.checked) {
      // la iteración busca el elemento que esté marcado
      objetoInformacion.nacionalidad = nacion.id
    }
  })
  console.log(objetoInformacion);
  return objetoInformacion;
}

/* -------------------------------------------------------------------------- */
/*                 [2] FUNCION: escuchar el submit del form                 */
/* -------------------------------------------------------------------------- */
// En un form, antes de hacer la validación, se deberá frenar el envío por defecto

const form = document.querySelector("form");

form.addEventListener("submit", function (evento) {
  // Evitar el comportamiento por defecto
  evento.preventDefault();
  // console.log(evento);

  const datos = capturarDatosFormulario();
  const errores = validarInformacion(datos);
  // errores = ["string 1 de error", "string 2 de error" ]
  renderizarErrores(errores);
  // mostrarMensajeExito(errores);
})


/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [3] FUNCION: validar datos                         */
/* -------------------------------------------------------------------------- */
/*
Desarrollar la función validación de datos.
Recibe un objeto con la misma estructura de objetoInformacion
Debe realizar ciertas validaciones.
Retorna un listado de errores según las comprobaciones que hace sobre el objeto:
1. Si el nombre no es un texto y tiene menos de 3 caracteres sumar el error:
    "El nombre debe tener al menos 3 caracteres."
2. Si la contraseña tiene menos de 6 caracteres,
sin contar espacios al principio, en el medio o final, sumar el error:
    "La contraseña debe tener al menos 6 caracteres, entre letras y símbolos."
3. Si el telefono tiene menos de 10 números, sumar el error:
    "No es un teléfono válido."
4. Si la lista de hobbies tiene más de 4 items, sumar el error:
    "Se debe seleccionar al menos 1 hobbie y como máximo seleccionar 4 hobbies."
5. Si no hay una nacionalidad definida, sumar el error:
    "Debe seleccionar una nacionalidad."
*/


function validarInformacion(usuario) {
  // 👇 desarrollar aqui la funcion
  const patronNombreValido  = /^[a-zA-Z\s]{3,}$/;
  const nombreValido = patronNombreValido.test(usuario.nombre);
  console.log("nombreValido: ", nombreValido)
  const patronContrasennaValida = /^[^\s]{6,50}$/;
  const contrasennaValida = patronContrasennaValida.test(usuario.password);
  console.log("contrasennaValida: ", contrasennaValida)
  const patronTelefonoValido = /^[\d]{10,50}$/;
  const telefonoValido = patronTelefonoValido.test(usuario.telefono);
  console.log("telefonoValido: ", telefonoValido)
  const cantidadHobbies = usuario.hobbies.length;
  const cantidadHobbiesValida = cantidadHobbies < 5 && cantidadHobbies > 0
  console.log("cantidadHobbiesValida: ", cantidadHobbiesValida);
  const nacionalidadValida = usuario.nacionalidad !== '' 
  console.log("nacionalidadValida: ", nacionalidadValida);

  let errores = [];

  if (!nombreValido) {
    errores.push("El nombre debe tener al menos 3 caracteres.")
  }
  if (!contrasennaValida) {
    errores.push("La contraseña debe tener al menos 6 caracteres, entre letras y símbolos.")
  }
  if (!telefonoValido) {
    errores.push("No es un teléfono válido.")
  }
  if (!cantidadHobbiesValida) {
    errores.push("Se debe seleccionar al menos 1 hobbie y como máximo seleccionar 4 hobbies.")
  }
  if (!nacionalidadValida) {
    errores.push("Debe seleccionar una nacionalidad.")
  }

  return errores;
}



/* -------------------------------------------------------------------------- */
/*                       [4] FUNCION: renderizar errores                      */
/* -------------------------------------------------------------------------- */

function renderizarErrores(errores) {
  if (errores) {
    const form = document.getElementsByTagName("form")[0]
    const button = document.querySelector("button[type='submit']")

    const div = document.createElement("div")
    const ul = document.createElement("ul")

    errores.forEach(error => {
      const li = document.createElement("li")
      li.textContent = error
      ul.appendChild(li)
    })
    
    div.appendChild(ul)

    form.insertBefore(div, button)
  
    
  } else {
    return 
  }
}


/* -------------------------------------------------------------------------- */
/*                [5] FUNCION: Formulario completado con éxito                */
/* -------------------------------------------------------------------------- */
// Esta funcion se va a encargar de mostrar que el formulario se completó correctamente.
// Para eso deberá cumplir con los siguientes requerimientos.
// Recibe el listado de errores, y solo si no hay ninguno debe:
// 1 - mostrar al final del formulario un caja con la misma estructura
//     que la caja de errores, pero con la tonalidad verde
// 2 - dentro la caja debe mostrar un párrafo con el mensaje:
//     "¡Formulario completado con éxito!"
// 3 - a su vez se debe deshabilitar el boton del formulario
// 4 - finalmente pasados 4 segundos:
//     se debe eliminar esa caja, habilitar el botón y limpiar el formulario
