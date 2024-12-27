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
    //Contenedor individual para cada videojuego
    const contenedorVideoJuego = document.createElement("div");
    contenedorVideoJuego.classList.add("border", "p-4", "rounded", "shadow", "flex", "flex-col", "justify-end", "w-50");

    //Titulo del videojuego
    const tituloJuego = document.createElement("h3");
    tituloJuego.classList.add("text-lg", "font-semibold", "mb-2", "h-16", "text-center");
    tituloJuego.textContent = this.title

    //Imagen del videojuego
    const imagenJuego = document.createElement("img");
    imagenJuego.classList.add("mb-2");
    imagenJuego.src = this.thumbnail; 

    //Plataforma del videojuego
    const plataformaJuego = document.createElement("p")
    plataformaJuego.classList.add("text-lg", "font-semibold", "mb-2");
    plataformaJuego.textContent = this.platform;

    //Género del videojuego
    const generoJuego = document.createElement("p")
    generoJuego.classList.add("text-lg", "font-semibold", "mb-2", "text-center");
    generoJuego.textContent = this.genre;

    const idGame = document.createElement("p");
    idGame.classList.add("text-gray-700", "mb-2");
    idGame.textContent = this.id;
    
    //Descripción del videojuego
    const descripcionJuego = document.createElement("p");
    descripcionJuego.classList.add("text-gray-600", "text-sm", "text-justify", "mb-10");
    descripcionJuego.textContent = this.shortDescription;


    // Botón para ver el juego
    const verJuego = document.createElement("button");
    verJuego.classList.add("button_details", "bg-blue-500", "hover:bg-blue-700", "text-white",  "mb-5", "font-bold", "py-2", "px-4", "rounded", "mx-auto", "block", "w-1/2", "flex" , "flex-end");
    verJuego.textContent = "Ver juego";

    // Agregar elementos a la tarjeta
    contenedorVideoJuego.appendChild(tituloJuego);
    contenedorVideoJuego.appendChild(idGame);
    contenedorVideoJuego.appendChild(imagenJuego);
    contenedorVideoJuego.appendChild(plataformaJuego);
    contenedorVideoJuego.appendChild(generoJuego);
    contenedorVideoJuego.appendChild(descripcionJuego);
    contenedorVideoJuego.appendChild(verJuego);
    

    return contenedorVideoJuego
    }



}