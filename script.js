const input = document.querySelector('#input');
const digiImg = document.querySelector('#digi-img');
const digiName = document.querySelector('.digimon-name');
const digiLevel = document.querySelector('.digimon-class');

const fetchAPI = async () => {
  const response = await fetch('https://digimon-api.vercel.app/api/digimon');
  const data = await response.json();
  return data;
}

function digiAPI() {

  input.addEventListener('change', async ({ target }) => {
    const digiArray = await fetchAPI();

    const find = digiArray.find(({ name }) => name.toLowerCase() === target.value.toLowerCase());

    const image = find.img;
    const { name, level } = find;

    digiLevel.innerText = `${name} é um digimon ${level}`;
    digiName.innerHTML = name;
    digiImg.src = image;

    return find;
  })
}

window.onload = () => digiAPI();
