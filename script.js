const meninas = [
	{ nome: "Letícia Borges", data: "02/01" },
	{ nome: "Rapha", data: "07/01" },
	{ nome: "Maria Clara Santos", data: "08/01" },
	{ nome: "Jéssica Lopes", data: "12/01" },
	{ nome: "Bruna Oliveira", data: "15/01" },
	{ nome: "Jhéssìca Cáettano", data: "31/01" },
	{ nome: "Aline Munhoz e Hemilly", data: "01/02" },
	{ nome: "Carol Geane", data: "15/02" },
	{ nome: "Juliana", data: "25/03" },
	{ nome: "Lorhana Gonçalves", data: "03/04" },
	{ nome: "Bia Sousa", data: "15/04" },
	{ nome: "Michelly Yonara", data: "22/04" },
	{ nome: "Dandara Sena", data: "23/04" },
	{ nome: "Lorraine", data: "03/05" },
	{ nome: "Ximenne Ramanne", data: "06/05" },
	{ nome: "Samanta", data: "23/05" },
	{ nome: "Gisely Chalhoub", data: "24/06" },
	{ nome: "Patrícia Costa", data: "30/06" },
	{ nome: "Hanna", data: "01/07" },
	{ nome: "Ariane", data: "04/07" },
	{ nome: "Bia Navarro", data: "12/07" },
	{ nome: "Nathalya Rocha", data: "21/07" },
	{ nome: "Stefani", data: "06/08" },
	{ nome: "Karen Silva", data: "08/08" },
	{ nome: "Anne Eve", data: "16/08" },
	{ nome: "Kika", data: "20/08" },
	{ nome: "Marianna", data: "05/09" },
	{ nome: "Ana Carolina", data: "09/09" },
	{ nome: "Rafa", data: "12/09" },
	{ nome: "Patricia Osa", data: "30/09" },
	{ nome: "Mih", data: "05/10" },
	{ nome: "Camila Faria", data: "09/10" },
	{ nome: "Michele Santana", data: "23/10" },
	{ nome: "Alex", data: "12/11" },
	{ nome: "Andressa", data: "21/11" },
	{ nome: "Rafaella", data: "24/11" },
	{ nome: "Vanessa Santos", data: "01/12" },
	{ nome: "Rayane", data: "26/04" },
];

function obterSigno(data) {
	const [dia, mes] = data.split("/").map(Number);

	if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
		return "♒️ Aquário";
	} else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
		return "♓️ Peixes";
	} else if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
		return "♈️ Áries";
	} else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
		return "♉️ Touro";
	} else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
		return "♊️ Gêmeos";
	} else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
		return "♋️ Câncer";
	} else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
		return "♌️ Leão";
	} else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
		return "♍️ Virgem";
	} else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
		return "♎️ Libra";
	} else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
		return "♏️ Escorpião";
	} else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
		return "♐️ Sagitário";
	} else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
		return "♑️ Capricórnio";
	} else {
		return "❓ Desconhecido";
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const container = document.getElementById("container");
	const signos = {};

	// Ordena as meninas por data de nascimento
	meninas.sort((a, b) => {
		const [diaA, mesA] = a.data.split("/").map(Number);
		const [diaB, mesB] = b.data.split("/").map(Number);
		if (mesA === mesB) {
			return diaA - diaB;
		}
		return mesA - mesB;
	});

	// Remover Annie do signo de Sagitário, se estiver presente
	const signoSagitario = "♐️ Sagitário";
	if (signos[signoSagitario]) {
		signos[signoSagitario] = signos[signoSagitario].filter(
			(menina) => menina.nome !== "Annie"
		);
	}

	// Adicionar Annie ao signo de Capricórnio manualmente
	const annie = { nome: "Annie", data: "21/12" };
	const signoCapricornio = "♑️ Capricórnio";
	if (!signos[signoCapricornio]) {
		signos[signoCapricornio] = [];
	}
	signos[signoCapricornio].push(annie);

	meninas.forEach((menina) => {
		// Excluir Annie da lista principal para evitar duplicação
		if (menina.nome !== "Annie") {
			const signo = obterSigno(menina.data);
			if (!signos[signo]) {
				signos[signo] = [];
			}
			signos[signo].push(menina);
		}
	});

	for (const signo in signos) {
		const signoDiv = document.createElement("div");
		signoDiv.classList.add("signo");
		const signoTitle = document.createElement("h2");
		signoTitle.textContent = signo;
		signoDiv.appendChild(signoTitle);

		signos[signo].forEach((menina) => {
			const meninaP = document.createElement("p");
			meninaP.innerHTML = `<span class="bolinha"></span>${menina.nome} - ${menina.data}`;
			signoDiv.appendChild(meninaP);
		});

		container.appendChild(signoDiv);
	}
});
