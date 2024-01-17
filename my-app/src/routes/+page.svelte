<h1>Bienvenue à notre jeu</h1>

<script lang="ts">
  import {Game} from '$lib/game';

  const game = new Game();

  let isGameStarted = false;
  let userScore = 0;
  let computerScore = 0;
  let message = '';
  function startGame() {
    game.start();
    userScore = 0;
    computerScore = 0;
    message = '';
    isGameStarted = true;
  } 
</script>

{#if !isGameStarted} 
  <button on:click={startGame}>Commencer </button>
{/if}

<button on:click={() => game.chooseRock()}>Pierre</button>
<button on:click={() =>game.choosePaper()}>Papier</button>
<button on:click={() =>game.chooseScissors()}>Ciseaux</button>

<h2>Score:</h2>
<p>Utilisateur: {userScore}</p>
<p>Ordinateur: {computerScore}</p>
<p>Vinqueur: {message}</p>
