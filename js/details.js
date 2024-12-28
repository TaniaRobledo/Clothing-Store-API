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
  img.classList.add('w-[7000px]','m-4', 'p-4', 'h-full', 'object-contain',  'rounded-xl');

  // Agregar la imagen al contenedor
  gameImageContainer.appendChild(img);

} else {
  // Configurar una imagen por defecto si la imagen es null o no existe
  const defaultImage = '../assets/images/Details/imagen.jpg';
  const gameImageContainer = document.getElementById('game_image');

  // Crear una etiqueta <img> para la imagen por defecto
  const img = document.createElement('img');
  img.classList.add('w-[7000px]', 'm-4', 'p-4', 'h-full', 'object-contain', 'rounded-xl');

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
  game_plataforms.textContent = `Plataforma de juego: ${platformName}`;
}


// Obtener la descripciion del juego
if (videoGameDetails && videoGameDetails.platforms) {
  const game_description = document.getElementById('game_description');
  
  // Acceder a la descripcion 
  const descriptionGame = videoGameDetails.description;
  
  // Mostrar la descripcion
  game_description.textContent = descriptionGame;
  
}


//Elemento
const scrollContainer = document.getElementById('scroll_container');

// Verificar si el objeto tiene imágenes
if (videoGameDetails && videoGameDetails.short_screenshots) {
  // Recorrer las imágenes de la API
  videoGameDetails.short_screenshots.forEach((screenshot) => {
    // Crear un nueva etiqueta img
    const img = document.createElement('img');
    img.src = screenshot.image; //Añado la que me viene de la API
    img.classList.add(
      'rounded-xl', 
      'transform', 
      'transition', 
      'duration-300', 
      'hover:scale-95', 
      'w-60', 
      'h-auto',
       'mb-5'
    ); 

    // Agregar la imagen al contenedor
    scrollContainer.appendChild(img);
  });
} else {
  // Si no hay imágenes disponibles
  scrollContainer.innerHTML = '<p class="text-gray-500">No hay imágenes disponibles.</p>';
}
