const app = {
    init: function(){
        console.log("App init");
        app.addTodo();
        //deleteTodo.init();
        //modifyTodo.init();
    },

    addTodo: function() {
        console.log("Add todo");

        const appDiv = document.getElementById("app");
        const form = document.querySelector("form");

        form.addEventListener("submit", (event => {
            event.preventDefault();

            const newTodo = document.getElementById("name").value; //je recup la valeur de l'input
            const newTodoDiv = document.createElement("div");
            newTodoDiv.className = "todos";
            const todoItem = document.createElement("p");
            todoItem.className = "new-todo";
            todoItem.textContent = newTodo; //add value of input a ma new todo

            if(newTodo === ""){
                //bloque la suite du programme si rien n'a été saisi
                return 0;
            }
            else{
                //j'ajoute ma new div avec ma todo a ma div#app
                appDiv.appendChild(newTodoDiv);
                newTodoDiv.appendChild(todoItem);
                document.getElementById('name').value = '';
            }
            const modifyBtn = document.createElement("button");
            modifyBtn.type = "submit";
            //modifyBtn.textContent = "modifier";
            modifyBtn.className = "modifyBtn";
            newTodoDiv.appendChild(modifyBtn);

            const deleteBtn = document.createElement("button");
            deleteBtn.type = "submit";
            //deleteBtn.textContent = "supprimer";
            deleteBtn.className = "deleteBtn";
            newTodoDiv.appendChild(deleteBtn);
            //la j'ajoute un id a chaque nouvelle div todo
            for(let i = 0; i < appDiv.children.length; i++){
                appDiv.children[i].id = `todo-id${i}`;
                //console.log(appDiv.children[i].id);
            }
        }))
        //;
        appDiv.addEventListener("click", function(event){
            const divId = event.target.parentElement;
            //console.log(`je suis la div sacrée `+ divId.firstChild.className);
            const modifiedTodo = document.querySelectorAll(`#${divId.id} p`);
            //console.log(modifiedTodo[0]);
            const stockText = modifiedTodo[0].innerHTML;
            console.log(stockText);
                if(event.target.className === "modifyBtn"){
                    modifiedTodo[0].form = "input";
                    modifiedTodo[0].contentEditable = "true";
                    divId.className = "modifiedTodo";
                    const validateBtn = document.createElement("button");
                    validateBtn.type = "submit";
                    //validateBtn.textContent = "valider";
                    validateBtn.className = "validateBtn";
                    divId.appendChild(validateBtn);

                }
                if(event.target.textContent != "validateBtn"){
                    modifiedTodo[0].innerHTML = stockText;
                }
                if(event.target.className === "validateBtn"){
                    divId.className = "todos";
                    modifiedTodo[0].contentEditable = "false";
                    divId.lastChild.remove();
                }
        })
        appDiv.addEventListener("click", function(event){
            const divId = event.target.parentElement;
                if(event.target.className === "deleteBtn"){
                    divId.remove();
                }
        })
        
    }
};
document.addEventListener("DOMContentLoaded", app.init);

//je récupere le bouton modifier via l'id précédent et j'écoute le click dessus
        // je modifie le p en input et la valeur du bouton modifier devient valider
        // je fais de meme avec le bouton supprimer
/*
const modifyTodo = {
    init : function(){
        console.log("Delete Todo");
        //addTodo.init();

        
    }
}

const deleteTodo = {
    init : function(){
        console.log("Modify Todo");
        //addTodo.init();

        
    }
}

cneter tout
boutons = favIcon

*/