/*
Event listener, when tim button is pressed return true
*/
function timButtonPushed() {
    document.getElementById('tim').addEventListener('click', () =>{
        let result = document.getElementById('tim').value;
        result = true; 
    });
    return result;
}

/*
Event listener, when demetri button is pressed return true
*/
function demetriButtonPushed() {
    document.getElementById('demetri').addEventListener('click', () =>{
    });
    return document.getElementById('demetri').value;
}

/*
Event listener, when demetri button is pressed return true
*/
function griffinButtonPushed() {
    document.getElementById('griffin').addEventListener('click', () =>{
    });
    return document.getElementById('griffin').value;
}

/*
Grabs result of button pushed event and updates the user's button
*/
function updateButton() {
    if(timButtonPushed() == 'tim') {
        console.log('tim')
    }
    if(demetriButtonPushed() == 'demetri') {
        console.log('demetri')
    }
    if(griffinButtonPushed() == 'griffin') {
        console.log('griffin')
    }
}
