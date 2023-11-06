'use strict';

class GameData {

    timerId = 0;
    antalSpoken = 0;
    antalKlickadSpoken = 0;
    imgAlt = 'Detta är en bild på ett spöke!';
    imgSrc = 'https://openclipart.org/image/400px/svg_to_png/83359/fantomme.png';
    GameBegin = 0;
    GameEnd = 0;
    milliseconds = 1000;

    imgWidth = 400;
    imgHeight = 211;

    calculateGhostLeft() {
        return Math.round( Math.random() * (screen.availWidth - this.imgWidth)) + 1;
    }

    calculateGhostTop() {
        return Math.round( Math.random() * (screen.availHeight - this.imgHeight)) + 1;
    }

    removeGhosts() {
        let imgRefs = document.querySelectorAll('#gameField img');

        for(let i = 0; i < imgRefs.length; i++) {
            imgRefs.item(i).remove();
        }
    }

    prepareForNewGame() {
        this.timerId = 0;
        this.antalKlickadSpoken = 0;
        this.antalSpoken = 0;
        this.GameEnd = 0;
        this.GameBegin = 0;
        this.imgWidth = 400;
        this.imgHeight = 211;
    

    }

}

let oGameData = new GameData();
window.addEventListener('load', function() {
    //Nu är det ok att modifera DOM:en

    document.addEventListener('keydown', function( e ) {


        if(e.key === 'b' || e.key === 'B') {

            clearInterval(oGameData.timerId);

            oGameData.timerId = setInterval(function() {

                let imgRef = document.createElement('img');

                let top = oGameData.calculateGhostTop();
                let left = oGameData.calculateGhostLeft();

                imgRef.style.left = left + 'px';
                imgRef.style.top = top + 'px';

                imgRef.setAttribute('src', oGameData.imgSrc);
                imgRef.setAttribute('alt', oGameData.imgAlt);

                imgRef.style.width = oGameData.imgWidth + 'px';
                imgRef.style.height = oGameData.imgHeight + 'px';
                imgRef.style.position = 'absolute';

                document.querySelector('#gameField').appendChild(imgRef);

                oGameData.antalSpoken++;

                imgRef.addEventListener('click', function( e ) {
                    oGameData.antalKlickadSpoken++;
                    this.remove();
                });

                //if(oGameData.antalSpoken % 2 === 0) {

                    oGameData.milliseconds -= 100;
                    oGameData.imgHeight -= 25;
                    oGameData.imgWidth -= 50;

                    if( oGameData.milliseconds === 0) {
                        console.log('Game Over...');

                        document.dispatchEvent(new KeyboardEvent('keydown', {'key' : 'e'}));
                    }

                //}


            }, oGameData.milliseconds);

        }

        if(e.key === 'e' || e.key === 'E') {
            clearInterval(oGameData.timerId);

            alert('Antalet spöken var ' + oGameData.antalSpoken + ' och du fångade ' + oGameData.antalKlickadSpoken);

            oGameData.prepareForNewGame();
            oGameData.removeGhosts();

        }


    });


});



/*
    1. Lägg till attributet miliseconds i GameData och instansiera 
        sedan ett objekt ur GameData oGameData
    2. Lyssnare för load
    3. Lyssnare för keydown b eller B
    4. Skapa en timer 
    5. Skapa ett img-element
    6. Top, left, alt, src
    7. witdh, height
    8. Addera img-elementet till DOM
    9. Lyssnare click på img-elementet
    10. Styrande variabler
    11. Game Over
    12. e eller E
*/






