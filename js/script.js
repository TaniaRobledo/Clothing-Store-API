//Elementos
const contenedorProductos = document.getElementById("contenedorProductos");


//URL de los productos
const url = "https://api.escuelajs.co/api/v1/products";

//Funcion para hacer la petición asíncrona
const peticion = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data)
  return data;
}


// Realizar la solicitud 
fetch(url)
  .then(response => response.json())
  .then(productos => {
    //Recorremos cada producto del array de productos
    productos.forEach(producto => {
      console.log(`ID: ${producto.id}`);
      console.log(`Nombre: ${producto.title}`);
      console.log(`Precio: ${producto.price}`);
      console.log(`Descripcion: ${producto.description}`);
    });
  })

// Función para crear elementos
const crearElementos = (productos) => {
  //Declaramos el fragment
  const fragment = document.createDocumentFragment();

  productos.forEach(producto => {
    // Crear tarjeta de producto
    const contenedorProducto = document.createElement("div");
    contenedorProducto.classList.add("border", "p-4", "rounded", "shadow");

    const tituloProducto = document.createElement("h3");
    tituloProducto.classList.add("text-lg", "font-semibold", "mb-2");
    tituloProducto.textContent = producto.title;

    const precioProducto = document.createElement("p");
    precioProducto.classList.add("text-gray-700", "mb-2");
    precioProducto.textContent = `Precio: $${producto.price}`;

    const descripcionProducto = document.createElement("p");
    descripcionProducto.classList.add("text-gray-600", "text-sm");
    descripcionProducto.textContent = producto.description;

    // Agregar elementos a la tarjeta
    contenedorProducto.appendChild(tituloProducto);
    contenedorProducto.appendChild(precioProducto);
    contenedorProducto.appendChild(descripcionProducto);

    // Agregar la tarjeta al fragmento
    fragment.appendChild(contenedorProducto);
  });

  // Agregar el fragmento al contenedor
  contenedorProductos.appendChild(fragment);
};


//Funcion para mostrar los productos
const mostrarProductos = async (url) => {
 const data = await peticion(url);
 crearElementos(data);
}

mostrarProductos(url)


/*btn_next.addEventListener("click", () => {
  main.innerHTML = "";
  page++
  const popular_movies_URL = `${URL}/movie/popular?api_key=${API_Key}&page=${page}`;
  mostrarPeliculas(popular_movies_URL);
});

btn_previous.addEventListener("click", () => {
  main.innerHTML = "";
  page--
  const popular_movies_URL = `${URL}/movie/popular?api_key=${API_Key}&page=${page}`;
  mostrarPeliculas(popular_movies_URL);
});*/
