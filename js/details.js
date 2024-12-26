const getLsItem = () => {
  const item_name = "videoGameDetails"
  return JSON.parse(localStorage.getItem(item_name));
}

console.log(getLsItem())