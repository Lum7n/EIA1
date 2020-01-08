var tasks: string[] = ["bake a cake", "buy presents", "good mood"];
var tasksTotal: number = tasks.length;


window.addEventListener("load", function (): void {

  // Ausgabe der Anzahl der Listeneinträge 
  console.log(tasksTotal);                                                   // Console
  document.querySelector("#counter").innerHTML = tasksTotal + " in total";   // Subheading


  for (var index: number = 0; index < tasks.length; index++) {
        document.querySelector("#tasks").innerHTML += "<div class='delete'>" + "<p>" + tasks[index] + "</p>" + "<button>" + "delete" + "</button>" + "</div>";
        tasksTotal = document.querySelector("#tasks").childElementCount;
        document.querySelector("#childs").innerHTML = tasksTotal;
    }
  document.querySelector("#add").addEventListener("click", addThing);
  document.querySelector("#tasks").addEventListener("click", deleteRow);

});

function addThing() {
    var text: any = document.querySelector("#text").value;
    tasks = [];
    tasks.push(text);
    addInputs();
}

function addInputs () {
    for (var index: number = 0; index < tasks.length; index++) {
        document.querySelector("#tasks").innerHTML += "<div class='delete'>" + "<p>" + tasks[index] + "</p>" + "<button>" + "delete" + "</button>" + "</div>";
        tasksTotal = document.querySelector("#tasks").childElementCount;
        document.querySelector("#childs").innerHTML = tasksTotal;
    }
}

function deleteRow() {
        var z: any = document.querySelectorAll(".delete");
        console.log(z);

        for (var i: number = 0; i < z.length ; i++) {
            z[i].onclick = function() {
                this.style.display = "none";
                tasksTotal--;
                document.querySelector("#childs").innerHTML = tasksTotal;
        }
    }
}