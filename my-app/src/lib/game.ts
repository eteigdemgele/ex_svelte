export class Game {
  public userScore: number = 0;
  public computerScore: number = 0;
  private counter: number = 0;
  private result: string = '';

  public start(): void {
    this.userScore = 0;
    this.computerScore = 0;
    this.counter = 0;
    this.result = '';
  }

  private computerPlay(): string {
    const choices: string[] = ["pierre", "papier", "ciseaux"];
    const randomIndex: number = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }

  public chooseRock(): void {
    const computerChoice: string = this.computerPlay();
    if (computerChoice === "pierre") {
      this.result = 'tie';
    } else if (computerChoice === "papier") {
      this.result = 'lose';
      this.computerScore++;
    } else {
      this.result = 'win';
      this.userScore++;
    }
    this.counter++;
  }

  public choosePaper(): void {
    const computerChoice: string = this.computerPlay();
    if (computerChoice === "pierre") {
      this.result = 'win';
      this.userScore++;
    } else if (computerChoice === "papier") {
      this.result = 'tie';
    } else {
      this.result = 'lose';
      this.computerScore++;
    }
    this.counter++;
  }

  public chooseScissors(): void {
    const computerChoice: string = this.computerPlay();
    if (computerChoice === "pierre") {
      this.result = 'lose';
      this.computerScore++;
    } else if (computerChoice === "papier") {
      this.result = 'win';
      this.userScore++;
    } else {
      this.result = 'tie';
    }
  }

  public getResult(): string {
    return this.result;
  }

  public checkWinner(): void {
    if (this.counter === 3) {
      if (this.userScore > this.computerScore) {
        console.log("Vous avez gagné la partie !");
      } else if (this.userScore < this.computerScore) {
        console.log("L'ordinateur a gagné la partie !");
      } else {
        console.log("La partie est nulle !");
      }
      this.start();
    }
  }
}