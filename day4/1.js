
function addNewElement() {
    let container = document.querySelector('div');

    // first child :: blue box
    let refElement = container.children[0];

    // second child :: organge box
    let refElement1 = container.children[1];

    // clone of reference element
    let newElementBlue = refElement.cloneNode(true);
    let newElementOrange = refElement1.cloneNode(true);

    container.appendChild(newElementBlue);
    container.appendChild(newElementOrange);
}

// TODO :: deleteing the first row child
function deleteElement() {
    let container = document.querySelector('div');

    let blueBox = container.children[0];
    let orangeBox = container.children[1];

    blueBox.remove();
    orangeBox.remove();
}