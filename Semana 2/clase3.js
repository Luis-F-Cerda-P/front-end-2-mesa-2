
// -------------------------------------------------------------
// Introducción del DOM
//--------------------------------------------------------------

// DOM: una estructura de árbol en el que cada nodo es un objeto
// a través de la que podemos acceder a los elementos
// del documento HTML y manipular el contenido según la necesidad.

// Manipular la interfaz con la que interactúa el usuario (front)
// sin hacer peticiones al servidor.


//--------------------------------------------------------------

// Dos objetos definidos en el navegador:

//- Objeto window
//- Representa la ventana que contiene al documento
//- El objeto window es lo primero que se carga
//👇
// console.log(window);


//- Objeto document
//- Es la representación de documento HTML
//- El objeto document es cargado dentro del window.
//👇
// console.log(document);

// -------------------------------------------------------------
// Manipulación del DOM
//--------------------------------------------------------------

// Para poder manipular los elementos del HTML, tendremos
// que acceder a ellos. Para esto se usan selectores.
// Los selectores son métodos del objeto document.


// querySelector: recibe un string que indica el selector
// del elemento que se quiere seleccionar
// retorna el primer elemento que coincide

//👇
let elemento;

elemento = document.querySelector('h1');


// console.log(elemento);


// querySelectorAll: recibe un string que indica el querySelector
// del elemento que se quiere seleccionar
// retorna un listado de elementos que coinciden

//👇
let articulos;
articulos = document.querySelectorAll('article');
// console.log(articulos);

// Acceder a las propiedades de los nodos
for (let i = 0; i < articulos.length; i++) {
    // console.log(articulos[i]);
}

// Acceder al título de cada artículo
articulos.forEach(articulo => { 
    const titular = articulo.querySelector('h2').textContent;
    // console.log(titular);
})

//Acceder a la bajada de cada artículo
for (noticia of articulos) {
    const texto = noticia.querySelector('p').innerText;
    // console.log(texto);
}


//innerText: solo se obtiene el texto visible para el usuario
//textContent: texto puro de un elemento HTML


/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */

// Escribir un selector para cada elemento del sitio.


//👇
const losElementos = []
losElementos[0] = document.querySelector("HEAD")
const losMeta = document.querySelectorAll("META")
for (let i = 0; i < losMeta.length; i++) {
    losElementos[i+1] = losMeta[i]
}
losElementos[4]= document.querySelector("TITLE")
losElementos[5]= document.querySelector("LINK")
losElementos[6]= document.querySelector("SCRIPT")
losElementos[7]= document.querySelector("STYLE")
losElementos[8]= document.querySelector("BODY")
losElementos[9]= document.querySelector("HEADER")
losElementos[10]= document.querySelector("H1")
losElementos[11]= document.querySelector("NAV")
losElementos[12]= document.querySelector("UL")
losElementos[13]= document.querySelector("LI")
losElementos[14]= document.querySelector("LI")
losElementos[15]= document.querySelector("LI")
losElementos[16]= document.querySelector("DIV")
losElementos[17]= document.querySelector("BUTTON")
losElementos[18]= document.querySelector("A")
losElementos[19]= document.querySelector("MAIN")
losElementos[20]= document.querySelector("ARTICLE")
losElementos[21]= document.querySelector("H2")
losElementos[22]= document.querySelector("IMG")
losElementos[23]= document.querySelector("P")
losElementos[24]= document.querySelector("EM")
losElementos[25]= document.querySelector("ARTICLE")
losElementos[26]= document.querySelector("H2")
losElementos[27]= document.querySelector("IMG")
losElementos[28]= document.querySelector("P")
losElementos[29]= document.querySelector("ARTICLE")
losElementos[30]= document.querySelector("H2")
losElementos[31]= document.querySelector("IMG")
losElementos[32]= document.querySelector("P")
losElementos[33]= document.querySelector("FOOTER")
losElementos[34]= document.querySelector("SCRIPT")
losElementos[35]= document.querySelector("SCRIPT")
losElementos[36]= document.querySelector("SCRIPT")
losElementos[37]= document.querySelector("DIV")
losElementos[38]= document.querySelector("SECTION")

losElementos.forEach(x => console.log(x))