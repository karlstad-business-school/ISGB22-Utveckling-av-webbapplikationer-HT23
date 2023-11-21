import { Component } from "react";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {translation : ''};
    }

    render() {
        return(
            <main className="container-fluid mt-5 mb-5 text-center">
                <h2>Skriv in din text som ska översättas till Swahili</h2>
                <form>
                    <input type="text" id="transText" className="form-control mb-5"></input>
                    <button className="btn btn-danger" onClick={this.getTranslation.bind(this)} >Översätt</button>

                </form>
                <div className="text-primary lead mt-5">
                    {this.state.translation}
                </div>


            </main>
        );
    }

    getTranslation = (evt)=> {
        evt.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("content-type", "application/x-www-form-urlencoded");
        myHeaders.append("X-RapidAPI-Key", "15de227eeamsh14ac74b0438b36bp1d59d6jsn06435d35c770");
        myHeaders.append("X-RapidAPI-Host", "google-translate1.p.rapidapi.com");

        var urlencoded = new URLSearchParams();
        urlencoded.append("q", document.querySelector('#transText').value);
        urlencoded.append("target", "es");
        urlencoded.append("source", "sv");

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
        };

        fetch("https://google-translate1.p.rapidapi.com/language/translate/v2", requestOptions)
        .then(response => response.json())
        .then(result => {
            
            console.log(result);
            this.setState({translation : result.data.translations[0].translatedText})

        })
        .catch(error => console.log('error', error));


    }

}
export default Main;