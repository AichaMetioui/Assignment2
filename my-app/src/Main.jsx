import { useState } from "react";
import axios from "axios"

function Main() {


    const [quote, setQuote] = useState([]);




    function newQuote() {
        axios.get("https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then(result => {
                console.log(result.data)
                setQuote(result.data)
            })
            .catch(err => { console.log(err) })


    }








    return (


        <div>

            <button onClick={newQuote}>NEW QUOTE</button>


            <p>{quote.quoteText}</p>


        </div>
    );
}

export default Main;