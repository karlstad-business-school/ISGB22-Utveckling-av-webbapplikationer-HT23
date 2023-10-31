'use strict';

class GameData  {

    timerId = 0;

    imgRefs = [
        'https://openclipart.org/download/282127/Die1.svg',
        'https://openclipart.org/download/282128/Die2.svg',
        'https://openclipart.org/download/282129/Die3.svg',
        'https://openclipart.org/download/282130/Die4.svg',
        'https://openclipart.org/download/282131/Die5.svg',
        'https://openclipart.org/download/282132/Die6.svg'
    ];

    createImgElements() {

    }

    removeImgElements() {
        
    }

};

let oGameDataObject = new GameData();

window.addEventListener('load', function() {
    console.log( Date.now(), 'load' );
});

window.addEventListener('DOMContentLoaded', function() {
    console.log( Date.now(), 'DOMContentLoaded' );

    alert('Tryck b||B för att börja och e||E för att avsluta!');
});
