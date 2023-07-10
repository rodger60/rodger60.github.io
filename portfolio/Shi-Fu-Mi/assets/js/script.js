// Fonction principale pour jouer le jeu
function playGame() {
  let playerChoice = document.getElementsByClassName("userChoice");
  let computerChoice = getRandomElement(".container");

  let result = checkResult(playerChoice, computerChoice);

  document.querySelector(".result").textContent =
    "Vous avez choisi " +
    playerChoice +
    ", l'ordinateur a choisi " +
    computerChoice +
    ". " +
    result;

  updateScore();
}
let selectedOption = "";

function selectOption(option) {
  selectedOption = option;
}

function play() {
  if (selectedOption === "") {
    alert("Veuillez sélectionner une option !");
    return;
  }

  const options = ["pierre", "feuille", "ciseaux"];
  const computerOption = options[Math.floor(Math.random() * options.length)];

  let result = "";
  if (selectedOption === computerOption) {
    result = "Égalité !";
  } else if (
    (selectedOption === "pierre" && computerOption === "ciseaux") ||
    (selectedOption === "feuille" && computerOption === "pierre") ||
    (selectedOption === "ciseaux" && computerOption === "feuille")
  ) {
    result = "Vous avez gagné !";
  } else {
    result = "Vous avez perdu !";
  }

  document.getElementById(
    "result"
  ).innerHTML = `Vous avez choisi ${selectedOption}. L'ordinateur a choisi ${computerOption}. ${result}`;

  selectedOption = "";
}
let selectEdOption = "";
let victories = 0;
let defeats = 0;

function selectOption(option) {
  selectedOption = option;
}

function play() {
  if (selectedOption === "") {
    alert("Veuillez sélectionner une option !");
    return;
  }

  const options = ["pierre", "feuille", "ciseaux"];
  const computerOption = options[Math.floor(Math.random() * options.length)];

  let result = "";
  if (selectedOption === computerOption) {
    result = "Égalité !";
  } else if (
    (selectedOption === "pierre" && computerOption === "ciseaux") ||
    (selectedOption === "feuille" && computerOption === "pierre") ||
    (selectedOption === "ciseaux" && computerOption === "feuille")
  ) {
    result = "Vous avez gagné !";
    victories++;
  } else {
    result = "Vous avez perdu !";
    defeats++;
  }

  const totalGames = victories + defeats;
  const winPercentage = (victories / totalGames) * 100 || 0;

  document.getElementById(
    "result"
  ).innerHTML = `Vous avez choisi ${selectedOption}. L'ordinateur a choisi ${computerOption}. ${result}<br>Victoires : ${victories}<br>Défaites : ${defeats}<br>Pourcentage de victoires : ${winPercentage.toFixed(
    2
  )}%`;

  selectedOption = "";
}
