import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
// import axios from 'axios';

import exampleData from "./../Data.json"

class Input extends Component {

    constructor(){
        super();
        this.state = {
            quote : "",
            author: ""
        }

        this.grabInput = this.grabInput.bind(this);
    }

    grabInput(error){
        error.preventDefault();
        let randIndex = Math.floor(Math.random() * exampleData.length)
        this.setState({
            quote : exampleData[randIndex].quote,
            author: exampleData[randIndex].author
        });
        // this.setState({
        //
        // });

        // axios({
        //     method: 'get',
        //     url: "http://quotes.stormconsultancy.co.uk/random.json",
        //     headers : {
        //         "Content-Type" : "application/json"
        //     }
        // })
        // .then((response) => {
        //     this.setState({
        //         quote : response.data.quote,
        //         author: "-" + response.data.author
        //     });
        // })
        // .catch((error) => {
        //     console.log(error)
        // });
    }

    render() {
        return (
            <div className= "quoteSpacing">
                <form>
                    <Button bsStyle="primary" onClick={this.grabInput}>Generate Quote!</Button>
                </form>
                <hr/>
                <h4><em>{this.state.quote}</em></h4>
                <h5>{this.state.author}</h5>
                <hr/>
            </div>
        );
    }
}

export default Input;
