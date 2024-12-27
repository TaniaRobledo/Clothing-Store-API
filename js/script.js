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

const showDetails = async (event) => {
  console.log('Estoy mostrando')
  const elementOnClick = event.target;
  if (elementOnClick.classList.contains("button_details")){
    // 1- Hacer una peticion a la pai de rawg con el nombre del jeugo al cual perteneezca el boton clicja
    const videoGameName = elementOnClick.parentElement.children[0].textContent
    const url_by_name = url_rawg + videoGameName
    const details = await peticion(url_by_name)
    localStorage.setItem("videoGameDetails", JSON.stringify(details.results[0]))
    window.location.href = "./pages/details.html"
  }
}

contenedorVideoGames.addEventListener('click', showDetails)


