import React from 'react';
import {CLEAR_ERRORS, clearErrors} from '../actions/session_actions'

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        if (this.props.formType === "signup"){
            this.state = {
                name: '',
                email: '',
                password: ''
            }
        } else if(this.props.formType === 'login') {
            this.state = {
                email: '',
                password: ''
            }
        }
        console.log(this.props, 'session_form log')
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentWillUnmount() {
        dispatch(clearErrors())
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
      }

    update(e, field) {
         this.setState({
            [field]: e.currentTarget.value
        });
    }

    
    render() {
        console.log(this.props.errors, 'error logger')
        let formTitle;
        if (this.props.formType === 'signup') {
            formTitle = (
                <h2>Create a new account!</h2>
            )
        } else if (this.props.formType === 'login') {
            formTitle = (
                <h2>Login to find your adventure!</h2>
            )
        }


        let name_elements = "";
        if (this.props.formType === 'signup') {
            name_elements = (
                <label>Name:
                    <input type='text' value={this.state.name} onChange={(e) => this.update(e, 'name')}/>
                </label>
            )
        }

        return(
            <div className='form-container'>
                <form className='user-auth-forms' onSubmit={this.handleSubmit}>
                    {formTitle}
                    {name_elements}
                    <label>Email:
                        <input type='text' value={this.state.email} onChange={(e) => this.update(e,'email')} />
                    </label>
                    <label>Password:
                        <input type='password' value={this.state.password} onChange={(e) => this.update(e,'password')}/>
                    </label>
                    <button onClick={this.handleSubmit}>Submit</button>
                    <ul>
                        {this.props.errors.map((error, i) => (
                        <li className="user-form-error" key={`error-${i}`}>
                            {error}
                        </li>
                        ))}
                    </ul>
                </form>
            </div>
        )
    }
}

export default SessionForm