export class Game {
  public userScore: number = 0;
  private computerScore: number = 0;
  private counter: number = 0;

  public start(): void {
    this.userScore = 0;
    this.computerScore = 0;
    this.counter = 0;
  }

  private computerPlay(): string {
    const choices: string[] = ["pierre", "papier", "ciseaux"];
    const randomIndex: number = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }

  public chooseRock(): void {
    const computerChoice: string = this.computerPlay();
    if (computerChoice === "pierre") {
      console.log("Égalité !");
    } else if (computerChoice === "papier") {
      console.log("L'ordinateur gagne !");
      this.computerScore++;
    } else {
      console.log("Vous gagnez !");
      this.userScore++;
    }
    this.counter++;
    this.checkWinner();
  }

  public choosePaper(): void {
    const computerChoice: string = this.computerPlay();
    if (computerChoice === "pierre") {
      console.log("Vous gagnez !");
      this.userScore++;
    } else if (computerChoice === "papier") {
      console.log("Égalité !");
    } else {
      console.log("L'ordinateur gagne !");
      this.computerScore++;
    }
    this.counter++;
    this.checkWinner();
  }

  public chooseScissors(): void {
    const computerChoice: string = this.computerPlay();
    if (computerChoice === "pierre") {
      console.log("L'ordinateur gagne !");
      this.computerScore++;
    } else if (computerChoice === "papier") {
      console.log("Vous gagnez !");
      this.userScore++;
    } else {
      console.log("Égalité !");
    }
    this.counter++;
    this.checkWinner();
  }

  private checkWinner(): void {
    if (this.counter === 3) {
      console.log("Fin de la partie !");
      console.log(`Votre score : ${this.userScore}`);
      console.log(`Score de l'ordinateur : ${this.computerScore}`);
      if (this.userScore > this.computerScore) {
        console.log("Vous avez gagné !");
      } else if (this.userScore < this.computerScore) {
        console.log("L'ordinateur a gagné !");
      } else {
        console.log("Match nul !");
      }
    }
  }
}