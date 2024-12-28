//Elementos
const contenedorVideoGames = document.getElementById("contenedorProductos");

//PRIMERA API
//https://www.freetogame.com/

//SEGUNDA API
////https://rawg.io/apidocs

//API KEY
const rawg_api_key = "9bcf3c9f63b14190af4d0b114a9d3096"


//URL de los productos
const url_ftg = "https://www.freetogame.com/api";
const url_games = url_ftg + "/games"
const url_game = url_ftg + "/game?id="
const page_size = 1

const url_rawg = `https://api.rawg.io/api/games?key=${rawg_api_key}&page_size=${page_size}&search=`

//Funcion para hacer la petición asíncrona
const peticion = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Función para crear elementos
const crearElementos = (videoGames) => {
  //Declaramos el fragment
  const fragment = document.createDocumentFragment();

  //Por cada videojuego me creo un objeto videojuego
  videoGames.forEach(videoGame => {

    game = new VideoGame(
      videoGame.game_url,
      videoGame.genre,
      videoGame.id,
      videoGame.platform,
      videoGame.short_description,
      videoGame.thumbnail,
      videoGame.title,)

    contenedorVideoJuego = game.createContainerVideoGame()

    // Agregar la tarjeta al fragmento
    fragment.appendChild(contenedorVideoJuego);
  });

  // Agregar el fragmento al contenedor
  contenedorVideoGames.appendChild(fragment);
};


//Funcion para mostrar los productos
const mostrarProductos = async (url) => {
  const data = await peticion(url);
  crearElementos(data);
}


mostrarProductos(url_games)

//Funcion mostrar detalles
const showDetails = async (event) => {
  console.log('Estoy mostrando')
  const elementOnClick = event.target;
  if (elementOnClick.classList.contains("button_details")) {
    // Hacer peticion sobre el id de l juego para tener la descripcion grande

    // 1- Hacer una peticion a la pai de rawg con el nombre del jeugo al cual perteneezca el boton clicja
    const videoGameName = elementOnClick.parentElement.children[0].textContent
    const elementId = elementOnClick.parentElement.children[1].textContent
    // 1- Hacer una peticion a la API de FreeToGame con el ID del juego
    const videoGameDetailsFreeToGame = await peticion(url_game + elementId);

    // Ahora puedes acceder a la descripción correctamente
    const description = videoGameDetailsFreeToGame.description;

    // Realizar la petición a Rawg
    const url_by_name = url_rawg + videoGameName;
    const details = await peticion(url_by_name);

    // Crear un objeto con los detalles y la descripción
    const fullDetails = { ...details.results[0], description };

    // Guardar los detalles en localStorage
    localStorage.setItem("videoGameDetails", JSON.stringify(fullDetails));

    // Redirigir a la página de detalles
    window.location.href = "./pages/details.html";

  }
}

contenedorVideoGames.addEventListener('click', showDetails)


