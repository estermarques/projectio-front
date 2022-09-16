import './Access.css';
import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

class Registration extends Component {
  state = {
    signedUp: false,
    confirmed: false,
    name: '',
    password: '',
    email: '',
    confirmationCode: '',
    submittingSignUp: false,
    submittingConfirmation: false
}

constructor(props) {
  super(props);

  this.handleSubmitSignUp = this.handleSubmitSignUp.bind(this);
}

handleSubmitSignUp(e) {
    e.preventDefault(e);
    const { confirmed, signedUp, name, password, email, isProfessor } = this.state;
    
    if(!confirmed && !signedUp) {
        this.setState({ submittingSignUp: true });

        Auth.signUp({
            username: name,
            password,
            attributes: {
              email,
              isProfessor,
              name
            }
        })
        .then(() => this.setState({ signedUp: true, submittingSignUp: false }))
        .catch(err => {
            this.setState({ submittingSignUp: false });
            console.log(err);
        });
    }
}

render () {
  return (
    <form className="access-page"  onSubmit={this.handleSubmitSignUp}>
      <h1 className="access-label">Cadastre-se</h1>
      <input type="text" name="name" placeholder="nome" className="input"/>
      <input type="text" name="email" placeholder="e-mail" className="input"/>
      <input type="password" name="password" placeholder="senha" className="input"/>
      <div className="checkbox-div">
        <input type="checkbox" name="isProfessor" className="input-checkbox"/>
        <h2 className="checkbox-text">Sou um professor</h2>
      </div>
      <button disabled={this.state.submittingSignUp} type="submit" className="blue-button">Cadastre-se</button>
    </form>
  )
  }
}

export default Registration;
