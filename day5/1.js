
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


function addNewElementUsingJQuery() {
    let container = $('.container');

    // first child :: blue box
    let refElement = container.children().first();

    // second child :: organge box
    let refElement1 = container.children().first().next();

    // clone of reference element
    let newElementBlue = refElement.clone(true);
    let newElementOrange = refElement1.clone(true);

    container.first().append(newElementBlue);
    container.first().append(newElementOrange);
}

function addNewElementUsingJQueryVer2() {
    let blueBox = $('.container').children().first().clone(true);
    let orangeBox = $('.container').children().first().next().clone(true);

    $('.container').first().append(blueBox);
    $('.container').first().append(orangeBox);
}

// TODO :: deleteing the first row child
function deleteElement() {
    let container = document.querySelector('div');

    let blueBox = container.children[0];
    let orangeBox = container.children[1];

    blueBox.remove();
    orangeBox.remove();
}