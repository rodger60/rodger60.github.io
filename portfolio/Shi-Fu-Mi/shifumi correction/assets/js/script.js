let userChoice = document.getElementsByClassName('userChoice');
let choices = ['Pierre', 'Feuille', 'Ciseaux'];
let userClicked;

for (let u of userChoice) {
    u.onclick = () => {
        userClicked = u.innerText;



        let randomChoice = Math.floor(Math.random() * 3);
        let computerChoice = choices[randomChoice];
        console.log(computerChoice)

        if (userClicked == computerChoice) {
            alert('Egalité')
        } else if ((userClicked == 'Pierre' && computerChoice == 'Ciseaux') || (userClicked == 'Ciseaux' && computerChoice == 'Feuille') || (userClicked = 'Feuille' && computerChoice == 'Pierre')) {
            alert('Gagné')
        } else {
            alert('Perdu')
        }

    }
}