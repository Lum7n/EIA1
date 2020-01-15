interface ToDo {
    text: string;
    status: boolean;
}

var todosObject: ToDo[] = [
    {
        text:   "Lorem",
        status: true
    },
    {
        text:   "Ipsum",
        status: false
    },
    {
        text:   "Dolor",
        status: false
    },
    {
        text:   "new",
        status: false
    }
];

var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;


window.addEventListener("load", function(): void {

    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");

    addButtonDOMElement.addEventListener("click", addTodo);

    drawListToDOM();
});

function drawListToDOM(): void {

    todosDOMElement.innerHTML = "";

    for (let index: number = 0; index < todosObject.length; index++) {

        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

        todo.innerHTML =  "<span class='check "
                            + todosObject[index].status
                            + "'><i class='fas fa-check'></i></span>"
                            + todosObject[index].text
                            + "<span class='trash fas fa-trash-alt'></span>";

        todo.querySelector(".check").addEventListener("click", function(): void {
            toggleCheckState(index);
        });

        todo.querySelector(".trash").addEventListener("click", function(): void {
            deleteTodo(index);
        });

        todosDOMElement.appendChild(todo);
        todosDOMElement.insertBefore(todo, todosDOMElement.childNodes[0]);
    }

    updateCounter();
}

function updateCounter(): void {
    let unchecked: number = 0;
    let checked: number = 0;

    for (var i: number = 0; i < todosObject.length; i++) {
        if (todosObject[i].status == true) {
            checked ++;
        }
        else {
            unchecked ++;
        }
    }

    counterDOMElement.innerHTML = todosObject.length + " in total | " + unchecked + " open | " + checked + " done" ;
}

function addTodo(): void {

    if (inputDOMElement.value != "") {

        let task: ToDo = {
            text: inputDOMElement.value,
            status: false
        };
        
        todosObject.push(task);

        inputDOMElement.value = "";

        drawListToDOM();
    }
}

function toggleCheckState(index: number): void {

    todosObject[index].status = !todosObject[index].status;

    drawListToDOM();
}

function deleteTodo(index: number): void {

    todosObject.splice(index, 1);

    drawListToDOM();
}

/* Spracheingabe */
declare var Artyom: any;

window.addEventListener("load", function (): void {
    const artyom: any = new Artyom();

    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i: any, wildcard: string): void {
            console.log("Neues ToDo " + wildcard + " wurde erstellt.");
            let task: ToDo = {
                text: wildcard,
                status: false
            };
            
            todosObject.push(task);
        }
    });

    function startContinuousArtyom(): void {
        artyom.fatality();

        setTimeout(
            function (): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function (): void {
                    console.log("Ready!");
                });
            },
            250);
    }

    startContinuousArtyom();

});