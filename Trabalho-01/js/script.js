// SELEÇÃO DE ELEMENTOS
const tarefaForm = document.querySelector("#tarefa-form"); //
const tarefaInput = document.querySelector("#tarefa-input"); // adiciona tarefa
const tarefaList = document.querySelector("#tarefa-list"); // inclui tarefa
const editForm = document.querySelector("#edit-form"); // formulario de edição
const editInput = document.querySelector("#edit-input"); // edita tarefa
const cancelEditBtn = document.querySelector("#cancel-edit-btn"); // cancela edição

let oldInputValue; // armazena o titulo da tarefa anterior

// FUNÇÕES
const saveTarefa = (text) => {

    // configurando os botoes
    const tarefa = document.createElement("div");
    tarefa.classList.add("tarefa");

    const tarefaTitle = document.createElement("h3"); 
    tarefaTitle.innerText = text;
    tarefa.appendChild(tarefaTitle);

    // botão de concluit
    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-tarefa");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    tarefa.appendChild(doneBtn);

    // botão de editar
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-tarefa");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    tarefa.appendChild(editBtn);

    // botão de deletar a tarefa
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-tarefa");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    tarefa.appendChild(deleteBtn);

    tarefaList.appendChild(tarefa);

    // apaga o texto após o envio
    tarefaInput.value = "";
    tarefaInput.focus();

};

// esconde algumas partes do formulário, deixando a opção selecionada mais clean
const toggleForms = () => {

    editForm.classList.toggle("hide");
    tarefaForm.classList.toggle("hide");
    tarefaList.classList.toggle("hide");

};

const updateTarefa = (text) => {
    const tarefas = document.querySelectorAll(".tarefa");

    tarefas.forEach((tarefa) => {
        let tarefaTitle = tarefa.querySelector("h3");

        if(tarefaTitle.innerText === oldInputValue) {
            tarefaTitle.innerText = text;
        }
    })
}

// EVENTOS
tarefaForm.addEventListener("submit", (e) => {

    // faz com que o formulário não seja enviado (recarregado) ao pressionar "enviar"
    e.preventDefault();

    const inputValue = tarefaInput.value;

    if(inputValue) {
        saveTarefa(inputValue);
    }

});

// pega o elemento que foi clicado
document.addEventListener("click", (e) => {

    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let tarefaTitle; // pega o titulo para futuros update

    // verifica o elemento existe e se o item selecionado é o h3
    if(parentEl && parentEl.querySelector("h3")) {
        tarefaTitle = parentEl.querySelector("h3").innerText;
    }

    // detecta o click no icon de finalizar tarefa
    if(targetEl.classList.contains("finish-tarefa")) {
        parentEl.classList.toggle("done");
    }

    // detecta o click no icon de remover tarefa
    if(targetEl.classList.contains("remove-tarefa")) {
        parentEl.remove();
    }

    // detecta o click no icon de editar tarefa
    if(targetEl.classList.contains("edit-tarefa")) {

        // esconde algumas partes do formulário, deixando a opção selecionada mais clean
        toggleForms();
        editInput.value = tarefaTitle;
        oldInputValue = tarefaTitle;
    }
});

// habilitando o botão de "cacelar" (cancel edition)
cancelEditBtn.addEventListener("click", (e) => {

    // faz com que o formulário não seja enviado (recarregado) ao pressionar "enviar"
    e.preventDefault();

    // esconde algumas partes do formulário, deixando a opção selecionada mais clean
    toggleForms();

});

// habilitando o botão de submit de quando edita a tarefa
editForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const editInputValue = editInput.value;

    // editInputValue != null
    if(editInputValue) {
        updateTarefa(editInputValue)
    }

    toggleForms();

});