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

  // Crear una etiqueta img
  const img = document.createElement('img');
  img.src = videoGameDetails.background_image;
  img.style.width =  '50%'; 
  img.style.margin = '10px'; 
  img.style.height = '100%';  
  img.style.objectFit = 'contain';  


  // Agregar la imagen al contenedor
  gameImageContainer.appendChild(img);

} else {
  // Configurar una imagen por defecto si la imagen es null o no existe
  const defaultImage = '../assets/images/Details/imagen.jpg';
  const gameImageContainer = document.getElementById('game_image');

  // Crear una etiqueta <img> para la imagen por defecto
  const img = document.createElement('img');
  img.src = defaultImage;
  img.style.width = 'auto';
  img.style.height = '100%';
  img.style.objectFit = 'contain';

  // Agregar la imagen al contenedor
  gameImageContainer.appendChild(img);
}


// Obtener el nombre del juego
if(videoGameDetails && videoGameDetails.name){
  const game_name = document.getElementById('game_name');
  game_name.textContent = videoGameDetails.name;
}

// Obtener la plataforma del juego
if (videoGameDetails && videoGameDetails.platforms) {
  const game_plataforms = document.getElementById('game_plataforms');
  
  // Acceder al nombre 
  const platformName = videoGameDetails.platforms[0].platform.name;
  
  // Mostrar el nombre de la plataforma 
  game_plataforms.textContent = platformName;
}


// Seleccionar el contenedor donde se agregarán las imágenes
const screenshotsContainer = document.getElementById('screenshots-container');

// Verificar si el objeto tiene imágenes
if (videoGameDetails && videoGameDetails.short_screenshots) {
  // Recorrer las imágenes y generar contenedores dinámicamente
  videoGameDetails.short_screenshots.forEach((screenshot) => {
    // Crear un elemento img para cada screenshot
    const image= document.createElement('img');
    image.src = screenshot.image;
    image.classList.add('h-32', 'object-cover', 'rounded', 'shadow', 'mb-8'); 
    
    // Agregar la imagen al contenedor
    screenshotsContainer.appendChild(image);
  });
} else {
  // Si no hay imageens disponibles mostramos mensaje
  screenshotsContainer.innerHTML = '<p class="text-gray-500">No hay imágenes disponibles para este juego.</p>';
}


