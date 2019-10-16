

function makeAjaxCall() {
    let xhr = new XMLHttpRequest();

    const requestType = "GET";
    const requestURL = "https://reqres.in/api/users";
    xhr.open(requestType, requestURL, true);

    //bind the response handler
    xhr.onload = function() {
        console.log(xhr.responseText);
    }

    // send the request to server
    xhr.send();
}


function makePostAjaxCall() {
    const xhr = new XMLHttpRequest();

    const type ="POST";
    const url = "https://reqres.in/api/users/"

    xhr.open(type, url);
    xhr.onload = function() {
        console.log(xhr.responseText);
    }

    const data = {
        name : "CDAC"
    };
    xhr.send(data);
}