
import ReactDOM from 'react-dom/client';
import App from './App';

//createRoot är en del av ReactDOM och innanför paranteserna
//använder vi Vanilla script (vanlig JS) för att hämta en referens till elementet med 
//id root. Sedan ropar vi på render och ropar på komponenten App.

//let domRef = document.getElementById( 'root' );
//let myRef = ReactDOM.createRoot(domRef);
//myRef.render( <App /> );

ReactDOM.createRoot( document.getElementById( 'root' ) ).render( <App /> );
