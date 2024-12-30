// Recuperar el objeto del localStorage
const getLsItem = () => {
  //Por el nombre que le hemos dado
  const item_name = "videoGameDetails";
  //Lo convertimos a jsnon
  return JSON.parse(localStorage.getItem(item_name));
};

//Iconos sobre las plataformas
const getImagePlatform = (platform_name) => {
  const platformNameLower = platform_name.toLowerCase();

  // Verificar si platform_name contiene alguna de las opciones y asignar la clase correspondiente
  if (platformNameLower.includes("pc")) {
    return `<img title="${platform_name}" class="icon pc-icon" src="../assets/images/icons/windows-brands-solid.svg" alt="Icono SVG">`;
  }
  if (platformNameLower.includes("xbox")) {
    return `<img title="${platform_name}" class="icon xbox-icon" src="../assets/images/icons/xbox-brands-solid.svg" alt="Icono SVG">`;
  }

  if (platformNameLower.includes("playstation")) {
    return `<img title="${platform_name}" class="icon playstation-icon" src="../assets/images/icons/playstation-brands-solid.svg" alt="Icono SVG">`;
  }

  if (platformNameLower.includes("nintendo")) {
    return `<img title="${platform_name}" class="icon nintendo-icon" src="../assets/images/icons/gamepad-solid.svg" alt="Icono SVG">`;
  }

  return `<img title="${platform_name}" class="icon other-icon" src="../assets/images/icons/desktop-solid.svg" alt="Icono SVG">`;
};



// Obtener los datos del videojuego
const videoGameDetails = getLsItem();

// Obtener la imagen
if (videoGameDetails && videoGameDetails.background_image) {
  // Crear el contenedor grabde
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
  const img_null = document.createElement('img');
  img_null.classList.add('w-[7000px]', 'm-4', 'p-4', 'h-full', 'object-contain', 'rounded-xl');

  // Agregar la imagen al contenedor
  gameImageContainer.appendChild(img_null);
}


// Obtener el nombre del juego
if(videoGameDetails && videoGameDetails.name){
  const game_name = document.getElementById('game_name');
  game_name.textContent = videoGameDetails.name;
}

// Obtener la plataforma del juego
if (videoGameDetails && videoGameDetails.platforms) {
  const game_plataforms = document.getElementById('game_plataforms');
  game_plataforms.classList.add('flex', 'flex-wrap', 'gap-2', 'm-4');

  const span = document.createElement('span')
  span.textContent = `Plataforma de juego: `;

  const icons = document.createElement('div');
  icons.classList.add('flex', 'flex-wrap', 'gap-2');
  videoGameDetails.platforms.forEach((item) =>  icons.innerHTML += getImagePlatform(item.platform.name));
  
  game_plataforms.appendChild(span)
  game_plataforms.appendChild(icons)
}


// Obtener la descripciion del juego
if (videoGameDetails && videoGameDetails.platforms) {
  const game_description = document.getElementById('game_description');
  
  // Acceder a la descripcion 
  const descriptionGame = videoGameDetails.description;
  
  // Mostrar la descripcion
  game_description.textContent = descriptionGame;
  
}


//Elemento para deslizar las imagenes con scroll
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
  // Si no hay imágenes disponibles ponems el texto
  scrollContainer.innerHTML = '<p class="text-gray-500">No hay imágenes disponibles.</p>';
}
