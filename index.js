// DADOS

const KEY = "LP-2024-2" 
const ALUNOS = [] 

// INICIALIZADOR

window.addEventListener("load", (event) => {
  start()
})

const start = () => {
    const auxAlunos = getOnLocalStorage(KEY);

    if (!auxAlunos || auxAlunos.length === 0) {
        const defaultData = [
            { id: self.crypto.randomUUID(), nome: "Ana Clara Silva", idade: 21, curso: "Engenharia Civil", media: 8.5 },
            { id: self.crypto.randomUUID(), nome: "Bruno Souza", idade: 23, curso: "Ciência da Computação", media: 9.2 },
            { id: self.crypto.randomUUID(), nome: "Camila Ferreira", idade: 19, curso: "Medicina", media: 8.8 },
            { id: self.crypto.randomUUID(), nome: "Diego Almeida", idade: 22, curso: "Direito", media: 7.9 },
            { id: self.crypto.randomUUID(), nome: "Eduarda Santos", idade: 20, curso: "Psicologia", media: 8.3 },
            { id: self.crypto.randomUUID(), nome: "Felipe Lima", idade: 24, curso: "Administração", media: 8.0 },
        ];

        ALUNOS.push(...defaultData);
        saveOnLocalStorage(KEY);

    } else {
        ALUNOS.push(...auxAlunos);
    }

    listingAlunos();
};
// CRUD ALUNOS 

const listingAlunos = () => {
    const tbody = document.getElementById('table-body') 
    tbody.innerHTML = ""  

    ALUNOS.forEach((element) => {
        const tr = document.createElement('tr') 
        tr.classList.add('hover:bg-gray-100') 

        tr.innerHTML = `
            <td class="border border-gray-300 px-10 py-2 text-left">${element.nome}</td>
            <td class="border border-gray-300 px-2 py-2">${element.idade}</td>
            <td class="border border-gray-300 px-2 py-2">${element.curso}</td>
            <td class="border border-gray-300 px-2 py-2">${element.media}</td>
            <td class="border border-gray-300 px-2 py-2">
                <button onclick="toggleModalEditar('${element.id}')" class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                    Editar
                </button>
                <button onclick="toggleModalExcluir('${element.id}')" class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                    Excluir
                </button>
            </td>
        ` 

        tbody.appendChild(tr) 
    }) 
} 

const addAlunoOnArray = () => {
    const nome = document.getElementById("nomeForm").value 
    const curso = document.getElementById("cursoForm").value 
	const media = parseFloat(document.getElementById("mediaForm").value) 
	const idade = parseInt(document.getElementById("idadeForm").value) 

    if(!nome || !curso || !idade) {
        toggleAlertModal("Erro", "Preencha corretamente os dados de entrada")
    }
	
    const newAluno = {
        id: self.crypto.randomUUID(),
        nome,
        curso,
        media,
        idade,
    } 


    ALUNOS.push(newAluno) 

    clearValue() 
    saveOnLocalStorage(KEY)
	listingAlunos()
}



const getAlunoById = (id) => {
    const aluno = ALUNOS.find(el => el.id === id)

    if(!aluno){
        toggleAlertModal("Erro", "ALUNO NÃO ENCONTRADO") 
        return
    }    

    return aluno
}


const editAlunos = (id) => {
    const alunoPos = ALUNOS.findIndex(el => el.id === id);

    if (alunoPos === -1) {
        toggleAlertModal("Erro", "ALUNO NÃO ENCONTRADO");
        return;
    }

    const nome = document.getElementById("nomeEditar").value;
    const curso = document.getElementById("cursoEditar").value;
    const media = parseFloat(document.getElementById("mediaEditar").value);
    const idade = parseInt(document.getElementById("idadeEditar").value);

    if (!nome || !curso || isNaN(media) || isNaN(idade)) {
        toggleAlertModal("Erro", "Preencha corretamente todos os campos.");
        return;
    }

    ALUNOS[alunoPos].nome = nome;
    ALUNOS[alunoPos].curso = curso;
    ALUNOS[alunoPos].media = media;
    ALUNOS[alunoPos].idade = idade;

    clearValue();
    saveOnLocalStorage(KEY);
    listingAlunos();
};


const removedAluno = (id) => {
    const alunoPos = ALUNOS.findIndex((el) => el.id === id) 

    if (alunoPos === -1) {
        toggleAlertModal("Erro",'ALUNO NÃO ENCONTRADO') 
        return 
    }

    ALUNOS.splice(alunoPos, 1) 

    saveOnLocalStorage(KEY) 

    toggleModalExcluir() 
} 



// HELPERS

const clearValue = () => {
    document.getElementById("nomeForm").value = ""
    document.getElementById("cursoForm").value = ""
    document.getElementById("mediaForm").value = 0
    document.getElementById("idadeForm").value = 0
}

const saveOnLocalStorage = (key) => {
    localStorage.setItem(key, JSON.stringify(ALUNOS)) 
}


const getOnLocalStorage = (key) => {
    const auxAlunos = localStorage.getItem(key);
    return auxAlunos ? JSON.parse(auxAlunos) : [];
};

function confirmarExclusao() {
    const modal = document.getElementById('modalExcluir') 
    const id = modal.getAttribute('data-id')  

    if (id) {
        removedAluno(id) 
        toggleAlertModal("Exclusão", 'Aluno removido com sucesso!')
    }

    listingAlunos()
}