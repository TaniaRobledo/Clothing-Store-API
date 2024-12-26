//AUTORIZACIONES
//Client ID 6c70dcd00919f84

//Client Secret 45e3aa65b820243a731d8d3b9494aac69b7af2ab



//CLAVE API TIEMPO
//zliMgA01MzSLcEfnfHEigUiRm4QvtXA3


/*Identificación de la aplicación
690064
Tecla de acceso
y6ilt4O-ODyUg9srWWBAfy4rZk6X5YjRdAv7wuxS-fE
Clave secreta
EU9_q0IKDtTcKD_OgB4sfYiZVUyABuVQRsWgliwQuMk*/
//Elementos
const contenedorVideoGames = document.getElementById("contenedorProductos");


//URL de los productos
const url = "https://www.freetogame.com/api";
const url_games = url + "/games"

//Funcion para hacer la petición asíncrona
const peticion = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log("estos osn los datos")
  console.log(data)
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
