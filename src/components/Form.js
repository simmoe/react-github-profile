import React from 'react';
/*
When Add card is pressed, the input form is cleared by clearing the userName state of the Form component.

When the form is submitted we call the handleSubmit event, and after the network call we call props.onSubmit passing the parent (App) the data we got from GitHub.
*/ 

export class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
        this.setUsername = this
            .setUsername
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }
    setUsername(e) {
        this.setState({
            username: e
        }, () => {
            console.log(this.state.username)
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        fetch('https://api.github.com/users/' + this.state.username)
        .then(res => res.json())
        .then(json => this.props.onSubmit(json))
        this.setState({username:'',})        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                value={this.state.username} 
                onChange= {event => this.setUsername(event.target.value)} 
                placeholder='Type a github username' required/>
                <button type='submit'>Add Card</button>
            </form>
        )
    }
}