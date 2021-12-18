const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        // computer options
        const computerOptions = ["rock", "paper", "scissors"];
        options.forEach((option) => {
            option.addEventListener("click", function () {
                // computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                // call compare hands

                // update images
                playerHand.scr = `./resources/${this.textContent}`;
            });
        });
    };

    const compareHands = (playerChoice, computerChoice) => {
        // update text
        const winner = document.querySelector(".winner");
        if (playerChoice === computerChoice) {
            winner.textContent = "It is a tie.";
            return;
        }

        // check for rock
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "Player wins.";
                return;
            } else {
                winner.textContent = "Computer wins.";
                return;
            }
        }

        // check for paper
        if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                winner.textContent = "Computer wins.";
                return;
            } else {
                winner.textContent = "PLayer wins.";
                return;
            }
        }

        // check for scissors
        if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                winner.textContent = "Computer wins.";
                return;
            } else {
                winner.textContent = "Player wins.";
                return;
            }
        }
    };

    startGame();
    playMatch();
};

// start game function
game();
