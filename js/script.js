btn_previous = document.getElementById("btn_previous");
btn_next = document.getElementById("btn_next");
main = document.getElementById("main");

let page = 1


const autorizacion = "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDY2ZGFlZWJjOTkwNWY4NjM2ODJiMWI3MTVlMGYwNiIsIm5iZiI6MTczMzk5MzgzNS41MTksInN1YiI6IjY3NWFhNTZiMTYzMzY2NzRmNDljYzI1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h2BVYX1F837CkB0DevnEO7sd4O4cl8aRyENecVEFZKg"
const API_Key = "1066daeebc9905f863682b1b715e0f06";
const popular_movies_URL = `${URL}/movie/popular?api_key=${API_Key}&page=${page}`;
// const popular_movies_URL_2 = `${URL}/movie/popular?api_key=${API_Key}&page=${page}`;
// EHEMPLO DE SOLICITUD
// https://api.themoviedb.org/3/movie/550?api_key=1066daeebc9905f863682b1b715e0f06

const peticion = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data)
  return data;
}

const url = "https://api.escuelajs.co/api/v1/products";

// Realizar la solicitud
fetch(url)
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
      console.log(`ID: ${product.id}`);
      console.log(`Nombre: ${product.title}`);
      console.log(`Precio: $${product.price}`);
      console.log(`Descripcion: $${product.description}`);
      console.log(`Imagen: ${product.images[0]}`);
    });
  })
  .catch(error => console.error("Error:", error));


/*const crearElementos = (data) => {
   //Array de peliculas
   const peliculas = data.results;

   const contenedor_peliculas = document.createElement("div");//Contenedor para las peliculas
   const fragment = document.createDocumentFragment();
   //Recorremos las peliculasc
   peliculas.forEach(pelicula => {
     const contenedor_pelicula = document.createElement("div");//Contenedor para las peliculas
 
     const titulo_pelicula = document.createElement("p");//Contenedor para el titulo de la pelicula
     titulo_pelicula.textContent = pelicula.title
 
     const img_pelicula = document.createElement("img")//Contenedor para la fecha de estreno
     img_producto.src = `https://image.tmdb.org/t/p/w200${pelicula.poster_path}`
 
     const fecha_estreno = document.createElement("p")//Contenedor para la fecha de estreno
     fecha_estreno.textContent = pelicula.release_date
 
     contenedor_pelicula.appendChild(titulo_pelicula)
     contenedor_pelicula.appendChild(fecha_estreno)
     contenedor_pelicula.appendChild(img_pelicula)
     fragment.appendChild(contenedor_pelicula);

    });

    main.appendChild(fragment)
}


const mostrarPeliculas = async (url) => {
 const data = await peticion(url);
 crearElementos(data);
}

mostrarPeliculas(popular_movies_URL)*/


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
