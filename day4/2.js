document.addEventListener('keypress', function(e) {
    console.log('hello', e.which);
    if(e.which == 13) {
        addTask();
    }
});


function addTask() {

    let inputRef = document.querySelector('#textId');
    
    let containerRef = document.querySelector('.container');

    let container1 = document.querySelector('.ref-container');
    let taskRef = container1.children[0];
    let delRef = container1.children[1];

    // make clone
    let newTask = taskRef.cloneNode(true);
    let newDel = delRef.cloneNode(true);

    // lets update the new Task object
    newTask.innerHTML = inputRef.value;
    newTask.style.visibility = "visible";
    newDel.style.visibility = "visible";


    containerRef.appendChild(newTask);
    containerRef.appendChild(newDel);


    // Once everything done; lets clear the box;
    inputRef.value = "";
}


function deleteTask(delElemRef) {
    let taskRef = delElemRef.previousElementSibling;

    delElemRef.remove();
    taskRef.remove();
}