// DADOS


const KEY = "LP-2024-2";
const ALUNOS = [];

// INICIALIZADOR

const start = () => {

    getOnLocalStorage(ke)
    listingAlunos();

}


// CRUD ALUNOS 

const listingAlunos = () => {

}

const addAlunoOnArray = () => {
    const nome = document.getElementById("nome").textContent;
    const curso = document.getElementById("curso").textContent;
    const media = parseFloat(document.getElementById("media")).textContent;
    const idade = parseInt(document.getElementById("idade")).textContent;

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

    const nome = document.getElementById("nome").textContent;
    const curso = document.getElementById("curso").textContent;
    const media = parseFloat(document.getElementById("media").textContent);
    const idade = parseInt(document.getElementById("idade").textContent);

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
    document.getElementById("nome").textContent = ""
    document.getElementById("curso").textContent = ""
    document.getElementById("media").textContent = 0
    document.getElementById("idade").textContent = 0
}

const saveOnLocalStorage = (key) => {
    localStorage.setItem(key, JSON.stringify(ALUNOS));
}


const getOnLocalStorage = (key) => {
    const auxAlunos = localStorage.getItem(key);

    if(auxAlunos){

        alert("Nenhum aluno em memoria");

        return;
    }

    for (let index = 0; index < auxAlunos.length; index++) {
        const element = auxAlunos[index];
        ALUNOS.push(element);
    }
}