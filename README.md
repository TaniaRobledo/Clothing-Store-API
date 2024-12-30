# ******** FUNCIONALIDAD ****************

Mi página utiliza dos APIs de videojuegos. La primera llamada **freetogame** y la segunda llamada **rawg**.

- Al abrir la página de **index** se realiza una petición para mostrar una lista de videojuegos, creando una tarjeta para cada uno donde se muestra la información que quiero obtener de la API.
- Al hacer click en un videojuego se realiza una petición a **Freetogame** para obtener una descripción larga basada en el ID del juego que se ha seleccionado. Después, se hace una segunda petición a la API de **rawg** para obtener detalles del videojuego en función de su nombre. 
- La combinación de ambas peticiones se guardará en el **localStorage** y se usará para mostrar los detalles completos del videojuego en otra página.

---

# ********** PRIMERA API FREE --> freetogame ***************

- **URL de la primera API freetogame**  
  `https://www.freetogame.com/api`

- **URL que me da los videojuegos**  
  `https://www.freetogame.com/api/games`

- **URL que me da los videojuegos por ID, por ejemplo el 582, 540**  
  `https://www.freetogame.com/api/game?id=582`  
  `https://www.freetogame.com/api/game?id=540`

---

# ********** SEGUNDA API PRIVADA --> rawg ***************

- **URL general de la segunda API rawg, esta necesita API KEY**  
  `https://rawg.io/apidocs`

- **API KEY**  
  `API KEY RAWG = "9bcf3c9f63b14190af4d0b114a9d3096"`

- **URL de todos los juegos con mi api key**  
  `https://api.rawg.io/api/games?key=9bcf3c9f63b14190af4d0b114a9d3096`

---

# ************* GIT HUB ************************

- **URL de mi página en github**  
  [https://github.com/TaniaRobledo/Clothing-Store-API](https://github.com/TaniaRobledo/Clothing-Store-API)
