import './Access.css';

function Registration() {
  const createUser = () => {
    const email = (document.getElementById('email').value);
    const name = (document.getElementById('name').value);
    const password = (document.getElementById('password').value);
    const isProfessor = (!!document.getElementById('isProfessor').value);

    const obj = {
      name,
      email,
      password,
      isProfessor,
    };

    fetch("https://v93r9d3h1j.execute-api.us-east-1.amazonaws.com/dev/user", {
      "method": "POST",
      "body": JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err);
    });
  }

  return (
    <div className="access-page">
      <h1 className="access-label">Cadastre-se</h1>
      <input
        type="text"
        name="name"
        placeholder="nome"
        className="input"
        id="name"
      />
      <input type="text" name="email" placeholder="e-mail" className="input" id="email"/>
      <input type="password" name="password" placeholder="senha" className="input" id="password"/>
      <input type="password" name="password" placeholder="confirme a senha" className="input" id="password2"/>
      <div className="checkbox-div">
        <input type="checkbox" name="isProfessor" className="input-checkbox" id="isProfessor"/>
        <h2 className="checkbox-text">Sou um professor</h2>
      </div>
      <button className="blue-button" onClick={createUser}>Cadastre-se</button>
    </div>
  );
}

export default Registration;

/*
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
*/