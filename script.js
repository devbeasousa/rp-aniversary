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
	{ nome: "Annie", data: "21/12" },
	{ nome: "Rayane", data: "26/04" },
];

function obterSigno(nome, data) {
	// Verifica se o nome é Annie e define como Capricórnio
	if (nome === "Annie") {
		return "♑️ Capricórnio";
	}

	const [dia, mes] = data.split("/").map(Number);
	switch (mes) {
		case 1:
			return "♒️ Aquário";
		case 2:
			return "♓️ Peixes";
		case 3:
			return "♈️ Áries";
		case 4:
			return "♉️ Touro";
		case 5:
			return "♊️ Gêmeos";
		case 6:
			return "♋️ Câncer";
		case 7:
			return "♌️ Leão";
		case 8:
			return "♍️ Virgem";
		case 9:
			return "♎️ Libra";
		case 10:
			return "♏️ Escorpião";
		case 11:
			return "♐️ Sagitário";
		case 12:
			return "♑️ Capricórnio";
		default:
			return "❓ Desconhecido";
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const container = document.getElementById("container");
	const signos = {};

	meninas.forEach((menina) => {
		const signo = obterSigno(menina.nome, menina.data);
		if (!signos[signo]) {
			signos[signo] = [];
		}
		signos[signo].push(menina);
	});

	for (const signo in signos) {
		const signoDiv = document.createElement("div");
		signoDiv.classList.add("signo");
		const signoTitle = document.createElement("h2");
		signoTitle.textContent = signo;
		signoDiv.appendChild(signoTitle);

		signos[signo].forEach((menina) => {
			const meninaP = document.createElement("p");
			meninaP.textContent = `${menina.nome} - ${menina.data}`;
			signoDiv.appendChild(meninaP);
		});

		container.appendChild(signoDiv);
	}
});
