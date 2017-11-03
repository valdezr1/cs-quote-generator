import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap'

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
        axios({
            method: 'get',
            url: "http://quotes.stormconsultancy.co.uk/random.json",
            headers : {
                "Content-Type" : "application/json"
            }
        })
            .then((response) => {
                this.setState({
                    quote : response.data.quote,
                    author: "-" + response.data.author
                });
            })
            .catch((error) => {
                console.log(error)
            });

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
