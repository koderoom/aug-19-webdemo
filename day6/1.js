
function makeAjaxCall() {
    let xhr = new XMLHttpRequest();
    let url = 'https://reqres.in/api/users';

    // describing the http request
    xhr.open('GET', url, true);

    xhr.onload = function() {
        let xmldata = xhr.responseXML;
        let textdata = xhr.responseText;

        let resData = JSON.parse(textdata);
        console.log(resData.data);

        for(let i=0; i<resData.data.length; i++) {
            // access element from array;
            let person = resData.data[i];

            let refNode = document.querySelector('#ref');
            let newElement = refNode.cloneNode(true);
            newElement.style.visibility = "visible";

            newElement.children[1].innerHTML = person.first_name;

            let parent = document.querySelector('.container-fluid');
            parent.appendChild(newElement);
        }
        
    }

    // sending the requst to server
    xhr.send();
}

