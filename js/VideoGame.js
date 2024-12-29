// Clase VideoGame

class VideoGame {
    
    constructor(gameUrl, genre, id, platform, shortDescription, thumbnail, title) {
        this.gameUrl = gameUrl;
        this.genre = genre;
        this.id = id;
        this.platform = platform;
        this.shortDescription = shortDescription;
        this.thumbnail = thumbnail;
        this.title = title;
    }

    createContainerVideoGame(){
       // Contenedor individual para cada videojuego
       const contenedorVideoJuego = document.createElement("div");

       //Estilos para el contenedor de cada tarjeta de juego
       contenedorVideoJuego.classList.add("border", "border-gray-400", "bg-gray-300", "p-4", "rounded", "shadow", 
        "flex", "flex-col", "justify-between", "h-full", "w-50", 'transform', 'transition', 'duration-300', 'hover:scale-105');
   
       // Titulo del videojuego
       const tituloJuego = document.createElement("h3");
       tituloJuego.classList.add("text-lg", "font-semibold", "mb-2", "h-12", "text-center");
       tituloJuego.textContent = this.title;
   
       // Imagen del videojuego
       const imagenJuego = document.createElement("img");
       imagenJuego.classList.add("mb-2", "rounded-lg", "w-full", "object-cover", "border", "border-gray-700",);
       imagenJuego.src = this.thumbnail; 
   
       // Plataforma del videojuego
       const plataformaJuego = document.createElement("p");
       plataformaJuego.classList.add("text-lg", "font-semibold", "mb-2", "mt-5");
       plataformaJuego.textContent = this.platform;
   
       // Género del videojuego
       const generoJuego = document.createElement("p");
       generoJuego.classList.add("text-lg", "font-semibold", "mb-2", "text-center");
       generoJuego.textContent = this.genre;
   
       // Id del juego para poder implementarlo con la segunda API
       const idGame = document.createElement("p");
       idGame.classList.add("text-gray-700", "mb-2", "hidden");
       idGame.textContent = this.id;
       
       // Descripción del videojuego
       const descripcionJuego = document.createElement("p");
       descripcionJuego.classList.add("text-gray-600", "text-sm", "text-justify", "mb-10");
       descripcionJuego.textContent = this.shortDescription;
   
       // Botón para ver el juego en la API de rawg
       const verJuego = document.createElement("button");
       verJuego.classList.add("button_details", "bg-purple-500", "hover:bg-purple-700", "text-white", "mb-5", "font-bold", "py-2", "px-4", "rounded", "mx-auto", "block", "w-1/2", "flex", "flex-end");
       verJuego.textContent = "Ver juego";

    // Agregar elementos a la tarjeta
    contenedorVideoJuego.appendChild(tituloJuego);
    contenedorVideoJuego.appendChild(idGame);
    contenedorVideoJuego.appendChild(imagenJuego);
    contenedorVideoJuego.appendChild(plataformaJuego);
    contenedorVideoJuego.appendChild(generoJuego);
    contenedorVideoJuego.appendChild(descripcionJuego);
    contenedorVideoJuego.appendChild(verJuego);
    

    return contenedorVideoJuego;
    }



}