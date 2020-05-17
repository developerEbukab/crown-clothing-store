import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password incorrect");
      return;
    }
    
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName })
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })

    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-in">
        <h2 className="title">I do not have an account</h2>
        <span className="">sign up with email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput  
            label="Display Name"
            name="displayName"
            type="text"
            value={displayName}
            handleChange={this.handleChange}
            required
          />
          <FormInput  
            label="Email"
            name="email"
            type="text"
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Re-Enter Password"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton>SIGN UP</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
