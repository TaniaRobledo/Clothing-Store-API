//Elementos
const contenedorVideoGames = document.getElementById("contenedorProductos");

//PRIMERA API
//https://www.freetogame.com/

//SEGUNDA API
////https://rawg.io/apidocs

// Paginas
let page = 1; 
let limite_elementos = 5;
let videoGames = {}

//API KEY DE LA API DE RAWG
const rawg_api_key = "9bcf3c9f63b14190af4d0b114a9d3096"


//URL de los videojuegos
const url_ftg = "https://www.freetogame.com/api";
// console.log(url_ftg)
const url_games = url_ftg + `/games?page=${page}&limit=${limite_elementos}`
//console.log(url_games)
const url_game = url_ftg + "/game?id="
// console.log(url_game)
const page_size = 1

const url_rawg = `https://api.rawg.io/api/games?key=${rawg_api_key}&page_size=${page_size}&search=`

//Funcion para hacer la petición asíncrona
const peticion = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  //console.log(data)
  return data;
}

const getMinMaxValues = (limite, page) => {
  if(page == 1)
    return [0, limite - 1]
  return [(page - 1) * limite, (page * limite )- 1]
}

// Función para crear elementos
const crearElementos = (videoGames, page) => {
  //Declaramos el fragment
  const fragment = document.createDocumentFragment();

  [min, max] = getMinMaxValues(limite_elementos, page)

  console.table(videoGames.slice(min, max))

  //Por cada videojuego me creo un objeto videojuego
  videoGames.slice(min, max).forEach(videoGame => {

    game = new VideoGame(
      videoGame.game_url,
      videoGame.genre,
      videoGame.id,
      videoGame.platform,
      videoGame.short_description,
      videoGame.thumbnail,
      videoGame.title,)

    const contenedorVideoJuego = game.createContainerVideoGame()

    // Agregar la tarjeta al fragmento
    fragment.appendChild(contenedorVideoJuego);
  });

  return fragment

 
};

//Funcion para mostrar elementos
const mostrarElementos = (elementos) => {
   // Agregar el fragmento al contenedor
   contenedorVideoGames.appendChild(elementos);
}


//Funcion para mostrar los productos
const cargarProductos = async (url, primera_carga) => {
  if(primera_carga)
    videoGames = await peticion(url);
  const elementos = crearElementos(videoGames, page);
  mostrarElementos(elementos)
}

//Llamo a mostrar productos pasandole la URL de games
cargarProductos(url_games, true)

//Funcion mostrar detalles de la API de rawg
const showDetails = async (event) => {
  //console.log('Estoy mostrando')
  const elementOnClick = event.target;
  if (elementOnClick.classList.contains("button_details")) {
    // 1- Hacer una peticion a la pai de rawg con el nombre del jeugo al cual perteneezca el boton clicja
    const videoGameName = elementOnClick.parentElement.children[0].textContent
    const elementId = elementOnClick.parentElement.children[1].textContent
    // 2- Hacer una peticion a la API de FreeToGame con el ID del juego
    const videoGameDetailsFreeToGame = await peticion(url_game + elementId);

    // Descripcion
    const description = videoGameDetailsFreeToGame.description;

    // Realizar la petición a Rawg mediante elnombre de la API de freetogame
    const url_by_name = url_rawg + videoGameName;
    const details = await peticion(url_by_name);

    // Crear un objeto con los detalles y la descripción
    const gameDetails = { ...details.results[0], description };

    // Guardar los detalles en localStorage pasandole el objeto y convirtiendolo a String
    localStorage.setItem("videoGameDetails", JSON.stringify(gameDetails));

    // Redirigir a la página de detalles
    window.location.href = "./pages/details.html";

  }
}


//Elementos para paginación
next_button = document.getElementById("next_button");
previous_button = document.getElementById("previous_button");

const setButtonValues = () => {
  previous_button.disabled = (page == 1);
    
}

// Pagina siguiente
next_button.addEventListener("click", () => {
  console.log('rntro')
  page++;
  contenedorVideoGames.innerHTML = "";  // Limpiamos la página actual
  cargarProductos(url_games, false);
  setButtonValues()
});


// Pagina anterior
previous_button.addEventListener("click", () => {
  page--;
  contenedorVideoGames.innerHTML = "";  // Limpiamos la página actual
  cargarProductos(url_games, false);
  setButtonValues()
});


contenedorVideoGames.addEventListener('click', showDetails)


