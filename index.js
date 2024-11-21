// DADOS


const KEY = "LP-2024-2";
const ALUNOS = [];

// INICIALIZADOR

window.addEventListener("load", (event) => {
  start()
})

const start = () => {

    getOnLocalStorage(KEY)
    listingAlunos();

}


// CRUD ALUNOS 

const listingAlunos = () => {

    const tbody = document.getElementById('table-body');
    const tr = document.createElement('tr');
    tr.classList.add('hover:bg-gray-100');

    ALUNOS.forEach(element => {
        tr.innerHTML = `
        <td class="border border-gray-300 px-10 py-2 text-left">${element.nome}</td>
        <td class="border border-gray-300 px-2 py-2">${element.idade}</td>
        <td class="border border-gray-300 px-2 py-2">${element.curso}</td>
        <td class="border border-gray-300 px-2 py-2">${element.media}</td>
        <td class="border border-gray-300 px-2 py-2">
            <button id="${element.id}" class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                Editar
            </button>
            <button id="${element.id}" class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                Excluir
            </button>
        </td>
    `;

    });

    tbody.appendChild(tr);
}

const addAlunoOnArray = () => {
    const nome = document.getElementById("nomeForm").value;
    const curso = document.getElementById("cursoForm").value;
	const media = parseFloat(document.getElementById("mediaForm").value);
	const idade = parseInt(document.getElementById("idadeForm").value);

    if(nome && curso && idade) {
        alert("Preencha corretamente os dados de entrada")
    }
	
    const newAluno = {
        id: self.crypto.randomUUID(),
        nome,
        curso,
        media,
        idade,
    };


    ALUNOS.push(newAluno);

    clearValue();
    saveOnLocalStorage(KEY)
	listingAlunos()

}



const getAlunoById = (id) => {
    const aluno = ALUNOS.find(el => el.id === id)

    if(!aluno){
        alert("ALUNO NÃO ENCONTRADO");
        return
    }    

    return aluno
}


const editAlunos = (id) => {
    const alunoPos = ALUNOS.findIndex(el => el.id === id)

    if(alunoPos === -1){
        alert("ALUNO NÃO ENCONTRADO");
        return
    }

    const nome = document.getElementById("nome").value;
    const curso = document.getElementById("curso").value;
	const media = parseFloat(document.getElementById("mediaForm").value);
	const idade = parseInt(document.getElementById("idadeForm").value);

    ALUNOS[alunoPos].nome = nome;
    ALUNOS[alunoPos].curso = curso;
    ALUNOS[alunoPos].media = media;
    ALUNOS[alunoPos].idade = idade;

    clearValue();
    saveOnLocalStorage(KEY)

}

const removedAluno = (id) => {
    const alunoPos = ALUNOS.findIndex(el => el.id === id)

    if(alunoPos === -1){
        alert("ALUNO NÃO ENCONTRADO");
        return
    }

    ALUNOS.splice(alunoPos, 1)
    saveOnLocalStorage(KEY)

}



// HELPERS

const clearValue = () => {
    document.getElementById("nomeForm").value = ""
    document.getElementById("cursoForm").value = ""
    document.getElementById("mediaForm").value = 0
    document.getElementById("idadeForm").value = 0
}

const saveOnLocalStorage = (key) => {
    localStorage.setItem(key, JSON.stringify(ALUNOS));
}


const getOnLocalStorage = (key) => {
    const auxAlunos = localStorage.getItem(key);

    if(!auxAlunos){

        alert("Nenhum aluno em memoria");

        return;
    }

    for (let index = 0; index < auxAlunos.length; index++) {
        const element = auxAlunos[index];
        ALUNOS.push(element);
    }
}