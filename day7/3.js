window.addEventListener('keypress', function(e){
    if (e.which === 13) {
        addTask();
    }
});

function addTask() {
    
    // clone of ref task block
    let newTaskBlock = $(".container-fluid").children().first().next().next().clone(true);
    newTaskBlock.removeClass('d-none');

    // updateing the right block by navigation.
    let inputValue = $("#textId").val();
    newTaskBlock.children().first().next().children().first().children().first().html(inputValue);

    $(".container-fluid").append(newTaskBlock);

    // clear the field
    $("#textId").val("");

}

function deleteTask(taskRef) {
    console.log(taskRef);
    taskRef.parentElement.parentElement.parentElement.remove()
}