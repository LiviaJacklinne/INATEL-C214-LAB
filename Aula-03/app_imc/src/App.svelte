<script>

	// Variaveis de estado 
	// let usado para valores alteraveis
	let peso = 0;
	let altura = 0;
	let imc = 0;

	// Função calcular IMC
	function calcularIMC() {
		if(peso > 0 && altura > 0) {
			imc = (peso / Math.pow(altura, 2).toFixed(2));
		}
		else {
			imc = 0;
		}
	}
</script>

<main>
	<h1>Calculadora IMC</h1>
	<label>
		Peso (kg): <input type="number" bind:value={peso} on:input={calcularIMC} />
	</label>
	<label>
		Altura (m): <input type="number" bind:value={altura} on:input={calcularIMC} />
	</label>

	{#if imc <= 15.5}
		<!-- Abaixo do peso -->
		<p id="abaixo">Abaixo do peso {imc}</p>

	{:else if imc > 15.5 && imc <= 24.9}
		<!-- Peso ideal -->
		<p id="ideal">Peso ideal {imc}</p>

	{:else if imc > 24.9 && imc <= 29.9}
		<!-- Levemente acima do peso -->
		<p id="acima">Levemente acima do peso {imc}</p>

	{:else if imc > 29.9 && imc <= 34.9}
		<!-- Obesidade grau 1 -->
		<p id="grau1">Obesidade grau 1 {imc}</p>

	{:else if imc > 34.9 && imc <= 39.9}
		<!-- Obesidade grau 2 (severa) -->
		<p id="grau2">Obesidade grau 2 {imc}</p>

	{:else if imc > 39.9}
		<!-- Obesidade grau 3 -->
		<p id="grau3">Obesidade grau 3 {imc}</p>

	{:else}
		<p>Inválido</p> 

	{/if}
</main>

<style>
	main { 
		font-family: sans-serif;
		text-align: center;
		padding: 2rem;
	}

	h1 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
	}

	input {
		padding: 0.25rem;
	}

	#abaixo {
		padding: 1rem ;
		margin-left: 20.5rem;
		margin-right: 20.5rem;
		background-color: rgba(0, 140, 255, 0.822);
	}
	#ideal {
		padding: 1rem ;
		margin-left: 20.5rem;
		margin-right: 20.5rem;
		background-color: rgba(0, 255, 13, 0.822);
	}
	#acima {
		padding: 1rem ;
		margin-left: 20.5rem;
		margin-right: 20.5rem;
		background-color: rgb(255, 238, 0);
	}
	#grau1 {
		padding: 1rem ;
		margin-left: 20.5rem;
		margin-right: 20.5rem;
		background-color: rgba(255, 166, 0, 0.836);
	}
	#grau2 {
		padding: 1rem ;
		margin-left: 20.5rem;
		margin-right: 20.5rem;
		background-color: rgba(221, 45, 14, 0.664);
	}
	#grau3 {
		padding: 1rem ;
		margin-left: 20.5rem;
		margin-right: 20.5rem;
		background-color: rgb(255, 0, 0);
	}

</style>