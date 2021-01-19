let view = {
    displayMessage: function(msg) {
        let messageArea = document.getElementById('messageArea');
        messageArea.innerHTML = msg;
    }
};

let model = {
}

let isCircle = false;

playingArea.onclick = function(event) {
    let targetElement = event.target;

    if (!targetElement.hasAttribute('class', 'circle') && !targetElement.hasAttribute('class', 'cross')) {
                       
        let divCross = document.createElement('div');
        divCross.className = 'cross';
        let divCircle = document.createElement('div');
        divCircle.className = 'circle';

        if (!isCircle) {
            targetElement.prepend(divCross);
        } else {
            targetElement.prepend(divCircle);
        }

        isCircle = !isCircle;
    } else {        
        let warning = view.displayMessage('Ход уже сделан, повторите попытку');
        console.log(warning)
        // .setAttribute('class', 'warning');
    }    
}



