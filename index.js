function addingEventListener() {
    const input = document.getElementById('button');

    //creat clickalert function
    function clickAlert() {
        alert('I was clicked!');
    }
    //add eventlistener
    input.addEventListener('click', clickAlert);
}

addingEventListener();

