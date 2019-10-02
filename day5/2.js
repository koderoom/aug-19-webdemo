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


function addTaskUsingJQuery() {

    let inputRef = $('#textId');
    
    // let containerRef = document.querySelector('.container');
    let containerRef = $('.container');
    let container1 = $('.ref-container');

    let taskRef = container1.children().first();
    let delRef = container1.children().first().next();

    // make clone
    let newTask = taskRef.clone(true);
    let newDel = delRef.clone(true);

    // lets update the new Task object
    newTask.html(inputRef.val());

    newTask.css("visibility", "visible");   // jquery version
    newDel.css("visibility", "visible");   // jquery version


    containerRef.first().append(newTask);
    containerRef.first().append(newDel);


    // Once everything done; lets clear the box;
    inputRef.val("")
}


function addTaskUsingJQueryVer2() {
    let newTask = $('.ref-container').children().first().clone();
    let newDel = $('.ref-container').children().first().next().clone();

    newTask.html($('#textId').val());

    newTask.css("visibility", "visible");   // jquery version
    newDel.css("visibility", "visible");   // jquery version

    $('.container').first().append(newTask);
    $('.container').first().append(newDel);

    $('#textId').val("")
}


function deleteTask(delElemRef) {
    let taskRef = delElemRef.previousElementSibling;

    delElemRef.remove();
    taskRef.remove();
}


function deleteTaskUsingJQuery(delElemRef) {
    let taskRef = $(delElemRef).prev();

    delElemRef.remove();
    taskRef.remove();
}