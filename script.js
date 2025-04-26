let currentIndex = null; // отслеживаем активного человека

const people = [
  {
    name: "Ruslan",
    desc: "Linux fan, always high tab.",
    img: "ruslan.jpg",
    background: "kosmo.jpg",
    links: [
      { url: "https://www.instagram.com/akvimys1", img: "instagram.png" },
      { url: "https://steamcommunity.com/profiles/76561199480834546", img: "steam.png" },
      { url: "https://t.me/AKVIM1", img: "telegram.png" }
    ]
  },
  {
    name: "Hlib",
    desc: "GTA V team, 170fps+ player.",
    img: "hleb.jpg",
    background: "kosmo.jpg",
    links: [
      { url: "#", img: "instagram.png" },
      { url: "https://steamcommunity.com/profiles/76561198838915089", img: "steam.png" },
      { url: "https://t.me/whoimidk999", img: "telegram.png" }
    ]
  },
  {
    name: "Artem",
    desc: "The best Stellaris player, 60fps peek.",
    img: "art.jpg",
    background: "kosmo.jpg",
    links: [
      { url: "https://www.instagram.com/aarrtte_mm.jl1", img: "instagram.png" },
      { url: "https://steamcommunity.com/profiles/76561199081822885", img: "steam.png" },
      { url: "https://t.me/ItachiUlLa", img: "telegram.png" }
    ]
  },
  {
    name: "Dima",
    desc: "The strongest man in the world, Clash royal's my LIFEEEEE.",
    img: "dima.jpg",
    background: "kosmo.jpg",
    links: [
      { url: "#", img: "instagram.png" },
      { url: "https://steamcommunity.com/profiles/76561199222574981", img: "steam.png" },
      { url: "https://t.me/LiMoN4iK1405", img: "telegram.png" }
    ]
  },
  {
    name: "Vlad",
    desc: "This is a dota legend, legends are made about him.",
    img: "vladik.jpg",
    background: "kosmo.jpg",
    links: [
      { url: "https://www.instagram.com/blurrxfaceo?igsh=MWd4amU2azRtbWRlbA%3D%3D&utm_source=qr", img: "instagram.png" },
      { url: "https://steamcommunity.com/profiles/76561199002536027", img: "steam.png" },
      { url: "https://t.me/Borhch", img: "telegram.png" }
    ]
  }
];

function showInfo(index) {
  const panel = document.getElementById("info-panel");
  const rightContainer = document.getElementById("right-buttons");

  // Если повторный клик — скрыть
  if (currentIndex === index) {
    panel.classList.remove("show");
    rightContainer.innerHTML = "";
    currentIndex = null;
    return;
  }

  const person = people[index];

  panel.classList.remove("show");
  setTimeout(() => {
    document.getElementById("info-img").src = person.img;
    document.getElementById("info-name").textContent = person.name;
    document.getElementById("info-desc").textContent = person.desc;

    panel.classList.add("show");

    panel.style.backgroundImage = "linear-gradient(to bottom, black, #01017f, black)";
    panel.style.backgroundSize = "cover";
    panel.style.backgroundPosition = "center";
    panel.style.backgroundRepeat = "no-repeat";
    panel.style.backgroundBlendMode = "normal";
    panel.style.backgroundColor = "";

    // Обновляем кнопки справа
    rightContainer.innerHTML = "";

    person.links.forEach(link => {
      const a = document.createElement('a');
      a.href = link.url;
      a.target = "_blank";
      a.className = "right-button";

      const div = document.createElement('div');
      div.className = "right-icon-bg";

      const img = document.createElement('img');
      img.src = link.img;
      img.alt = "Link";

      div.appendChild(img);
      a.appendChild(div);
      rightContainer.appendChild(a);
    });

    currentIndex = index;
  }, 200);
}
