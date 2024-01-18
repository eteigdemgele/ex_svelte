<h1>Bienvenue à notre jeu</h1>

<script lang="ts">
  import { writable } from 'svelte/store';
  import { Game } from '$lib/game';

  const game = new Game();
  const count = writable(0);

  let isGameStarted = false;
  let message = '';
  let userScore = 0;
  let computerScore = 0;

  function startGame() {
    game.start();
    count.set(0);
    message = '';
    userScore = 0;
    computerScore = 0;
    isGameStarted = true;
  }

  function updateMessage() {
    const result = game.getResult();
    userScore = game.userScore;
    computerScore = game.computerScore;
    if (result === 'win') {
      message = 'Vous gagnez !';
    } else if (result === 'lose') {
      message = "L'ordinateur gagne !";
    } else {
      message = 'Égalité !';
    }
    count.update((n) => n + 1);
    game.checkWinner();
  }
</script>

{#if !isGameStarted}
  <button on:click={startGame}>Commencer</button>
{:else}
  <button on:click={() => {game.chooseRock(); updateMessage();}}>Pierre</button>
  <button on:click={() => {game.choosePaper(); updateMessage();}}>Papier</button>
  <button on:click={() => {game.chooseScissors(); updateMessage();}}>Ciseaux</button>
{/if}

<h2>Score:</h2>
<p>Utilisateur: {userScore}</p>
<p>Ordinateur: {computerScore}</p>
<p>Tours: {$count}</p>
<p>Vinqueur: {message}</p>
