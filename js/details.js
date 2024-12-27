// Recuperar el objeto del localStorage
const getLsItem = () => {
  const item_name = "videoGameDetails";
  return JSON.parse(localStorage.getItem(item_name));
};

// Obtener los datos del videojuego
const videoGameDetails = getLsItem();

// Obtener la imagen
if (videoGameDetails && videoGameDetails.background_image) {
  // Seleccionar el contenedor
  const gameImageContainer = document.getElementById('game_image');

  // Configurar el fondo del contenedor
  gameImageContainer.style.backgroundImage = `url(${videoGameDetails.background_image})`;
  gameImageContainer.style.backgroundSize = 'contain'; 
  gameImageContainer.style.backgroundPosition = 'start';
  gameImageContainer.style.backgroundRepeat = 'no-repeat'; 

} else {
  // Configurar una imagen por defecto si la imagen es null o no existe
  const defaultImage = '../assets/images/Details/imagen.jpg';
  gameImageContainer.style.backgroundImage = `url(${defaultImage})`;
  gameImageContainer.style.backgroundSize = 'cover';
  gameImageContainer.style.backgroundPosition = 'center';
  gameImageContainer.style.backgroundRepeat = 'no-repeat';
}

// Obtener el nombre del juego
if(videoGameDetails && videoGameDetails.name){
  const gameName = document.getElementById('game_name');
  gameName.textContent = videoGameDetails.name;
}

// Seleccionar el contenedor donde se agregarán las imágenes
const screenshotsContainer = document.getElementById('screenshots-container');

// Verificar si el objeto tiene imágenes
if (videoGameDetails && videoGameDetails.short_screenshots) {
  // Recorrer las imágenes y generar contenedores dinámicamente
  videoGameDetails.short_screenshots.forEach((screenshot) => {
    // Crear un elemento img para cada screenshot
    const imgElement = document.createElement('img');
    imgElement.src = screenshot.image;
    imgElement.classList.add('h-32', 'object-cover', 'rounded', 'shadow', 'mb-8'); 
    
    // Agregar la imagen al contenedor
    screenshotsContainer.appendChild(imgElement);
  });
} else {
  // Mostrar un mensaje si no hay screenshots disponibles
  screenshotsContainer.innerHTML = '<p class="text-gray-500">No hay imágenes disponibles para este juego.</p>';
}
