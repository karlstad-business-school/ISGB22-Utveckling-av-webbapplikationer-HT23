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

        let rndValue = 0;
        let mainRef = document.querySelector('main');
        let imgRef = null;

        for(let i = 0; i <= 5; i++) {

            rndValue = Math.floor(Math.random() * 6);

            imgRef = document.createElement('img'); 
            imgRef.setAttribute('src', this.imgRefs[rndValue]);
            imgRef.setAttribute('alt', 'Tärning ' + (rndValue + 1));

            imgRef.style.width = '10%';
            imgRef.style.height = '10%';

            mainRef.appendChild(imgRef);

        }

    }

    removeImgElements() {

        let imgRefs = document.querySelectorAll('main img');

        for(let i = 0; i < imgRefs.length; i++) {
            imgRefs.item(i).remove();
        }
        
    }

};

let oGameDataObject = new GameData();

window.addEventListener('load', function() {
    console.log( Date.now(), 'load' );
});

window.addEventListener('DOMContentLoaded', function() {
    console.log( Date.now(), 'DOMContentLoaded' );

    alert('Tryck b||B för att börja och e||E för att avsluta!');

    document.addEventListener('keydown', function( e ) {

        if(e.key === 'b' || e.key === 'B') {

            oGameDataObject.removeImgElements();
            oGameDataObject.createImgElements();
        }

    });

    /*
        1. Lägg till en lyssnar för tangentbordet 
        2. Kontrollera om bokstaven b resp. B är tryckt
        3. Om så är fallet anropa metoderna removeImgElements() resp. createImgElements()
        4. Skriv koden för metoden removeImgElements() i vilken du skall ta bort alla img-element som finns i main.
        5. Skriv koden för metoden createImgElements() i vilken du skall skapa sex img-element.
        5.1 Img-elementen skall skapas i en iteration och dess src-attribut skall bestå av värdet i ngn av planserna i vektorn imgRefs.
        5.2 slumpa ett tal mellan 1-6 (floor() och random())
        5.3 Skapa ett img-element
        5.4 Lägg till src- och alt-attributen till det nya img-elementet.
        5.5 ändra css-egenskaperna width och height till 10% för det nya img.elementet.
        5.6 lägg det nya img-elementet sist i main-elementet.
        
        Om tid finnes...
        6. Ändra din lösning så att nya täningar visas med ett intervall på två sekunder.
        7. Ändra så att bara en timer kan vara igång åt gången.
        8. Lägg till kod som gör att timern avslutas om användaren trycker på e eller E på tangentbordet.
    */
});
