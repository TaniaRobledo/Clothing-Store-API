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

    const contenedorProducto = document.createElement("div");
    contenedorProducto.classList.add("border", "p-4", "rounded", "shadow");

    const tituloProducto = document.createElement("h3");
    tituloProducto.classList.add("text-lg", "font-semibold", "mb-2", "h-20");
    tituloProducto.textContent = this.title

    const imagenProducto = document.createElement("img");
    imagenProducto.classList.add("mb-2");
    imagenProducto.src = this.thumbnail; 
    

    // const precioProducto = document.createElement("p");
    // precioProducto.classList.add("text-gray-700", "mb-2");
    // precioProducto.textContent = `Precio: ${producto.price}€`;

    const descripcionProducto = document.createElement("p");
    descripcionProducto.classList.add("text-gray-600", "text-sm", "text-justify");
    descripcionProducto.textContent = this.shortDescription;

    // Agregar elementos a la tarjeta
    contenedorProducto.appendChild(tituloProducto);
    // contenedorProducto.appendChild(precioProducto);
    contenedorProducto.appendChild(imagenProducto);
    contenedorProducto.appendChild(descripcionProducto);

    return contenedorProducto
    }



}