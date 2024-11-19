const selectHero = document.querySelector("#heroi");
const nameHero = document.querySelector(".hero-name");

const heros = [
  { name: "superman", xp: 12000 },
  { name: "batman", xp: 3500 },
  { name: "mulher-maravilha", xp: 7800 },
  { name: "homem-aranha", xp: 6300 },
  { name: "hulk", xp: 8200 },
  { name: "thor", xp: 1100 },
  { name: "falcão", xp: 500 },
  { name: "flash", xp: 9050 },
];

function classificationHeros(XP) {
  if (XP < 1000) return "ferro";
  if (XP >= 1001 && XP <= 2000) return "bronze";
  if (XP >= 2001 && XP <= 5000) return "prata";
  if (XP >= 5001 && XP <= 7000) return "ouro";
  if (XP >= 7001 && XP <= 8000) return "platina";
  if (XP >= 8001 && XP <= 9000) return "ascendente";
  if (XP >= 9001 && XP <= 10000) return "imortal";
  if (XP >= 10001) return "radiante";
}

heros.forEach((myHero) => {
  myHero.classification = classificationHeros(myHero.xp);
});

selectHero.addEventListener("change", () => {
  let valueHero = selectHero.value;

  const selectedHero = heros.find(
    (myHero) => myHero.name.toLowerCase() === valueHero
  );

  if (selectedHero) {
    nameHero.textContent = `Herói de nome ${selectedHero.name} está no nível de ${selectedHero.classification}`;
  }
});
