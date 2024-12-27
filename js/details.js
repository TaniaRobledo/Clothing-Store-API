// Recuperar el objeto del localStorage
const getLsItem = () => {
  const item_name = "videoGameDetails";
  return JSON.parse(localStorage.getItem(item_name));
};

// Obtener los datos del videojuego
const videoGameDetails = getLsItem();

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
