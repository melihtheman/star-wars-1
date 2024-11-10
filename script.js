const data = [
  {
    characters: [
      {
        id: 1,
        name: "Luke Skywalker",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
        homeworld: "tatooine",
      },
      {
        id: 2,
        name: "C-3PO",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
        homeworld: "tatooine",
      },
      {
        id: 3,
        name: "R2-D2",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
        homeworld: "naboo",
      },
      {
        id: 4,
        name: "Darth Vader",
        pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
        homeworld: "tatooine",
      },
      {
        id: 5,
        name: "Leia Organa",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
        homeworld: "alderaan",
      },
      {
        id: 6,
        name: "Owen Lars",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
        homeworld: "tatooine",
      },
      {
        id: 7,
        name: "Beru Whitesun lars",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
        homeworld: "tatooine",
      },
      {
        id: 8,
        name: "R5-D4",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
        homeworld: "tatooine",
      },
      {
        id: 9,
        name: "Biggs Darklighter",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
        homeworld: "tatooine",
      },
      {
        id: 10,
        name: "Obi-Wan Kenobi",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
        homeworld: "stewjon",
      },
      {
        id: 11,
        name: "Anakin Skywalker",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
        homeworld: "tatooine",
      },
      {
        id: 12,
        name: "Wilhuff Tarkin",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
        homeworld: "eriadu",
      },
      {
        id: 13,
        name: "Chewbacca",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
        homeworld: "kashyyyk",
      },
      {
        id: 14,
        name: "Han Solo",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
        homeworld: "corellia",
      },
      {
        id: 15,
        name: "Greedo",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
        homeworld: "Rodia",
      },
      {
        id: 16,
        name: "Jabba Desilijic Tiure",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
        homeworld: "tatooine",
      },
      {
        id: 18,
        name: "Wedge Antilles",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
        homeworld: "corellia",
      },
      {
        id: 19,
        name: "Jek Tono Porkins",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
        homeworld: "bestine",
      },
      {
        id: 20,
        name: "Yoda",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
      },
      {
        id: 21,
        name: "Palpatine",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
        homeworld: "naboo",
      },
    ],
  },
];

const row = document.querySelector(".row");
const btn = document.querySelector("#btn");
const card_container = document.querySelector('.card-container');
function renderCharacters() {
  data[0].characters.forEach((element) => {
    // const row = document.createElement('div');
    // row.classList.add('row');

    const card = document.createElement("div");
    card.classList.add("card");

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const h4 = document.createElement("h4");
    h4.classList.add("name");
    h4.innerText = `Name: ${element.name}`;

    const h4_2 = document.createElement("h4");
    h4_2.classList.add("homeworld");
    h4_2.innerText = `Homeworld: ${element.homeworld}`;

    const cardImage = document.createElement("div");
    cardImage.classList.add("card-image");

    const img = document.createElement("img");
    img.src = element.pic;

    cardContent.appendChild(h4);
    cardContent.appendChild(h4_2);
    card.appendChild(cardContent);
    card.appendChild(cardImage);
    cardImage.appendChild(img);

    // Append the card to the row
    row.appendChild(card);
    // card_container.appendChild(row);
  });
}

btn.addEventListener("click", function () {
  if (btn.classList.contains("active")) {
    btn.classList.toggle("active");
    btn.innerText = "Karakterleri Goster";
    row.remove();
  } else {
    btn.classList.toggle("active");
    btn.innerText = "Karakterleri Gizle";
    
    const new_row = document.createElement('div');
    new_row.classList.add('card-container')
    card_container.appendChild(row);

    //karakterleri goster
    renderCharacters();
  }
});
