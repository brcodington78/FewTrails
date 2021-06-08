import React from 'react';
import {CLEAR_ERRORS, clearErrors} from '../actions/session_actions'
import {Link} from 'react-router-dom'

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
        let switchLink;
        let formHeader;
        if (this.props.formType === 'signup') {
            formHeader = (
                <h1>Create a new account!</h1>
            )
            switchLink = (
                <Link to="/login">Already have an acount? Log in</Link>
            )
        } else if (this.props.formType === 'login') {
            formHeader = (
                <h1>Login to find your adventure!</h1>
            )
            switchLink = (
                <Link to="/signup">Don't have an acount? Sign up!</Link>
            )
        }


        let name_elements = "";
        if (this.props.formType === 'signup') {
            name_elements = (
                <label>Name:
                    <input className='user-form-input' type='text' value={this.state.name} onChange={(e) => this.update(e, 'name')}/>
                </label>
            )
        }

        return(
            <div className='form-container'>
                <form className='user-auth-forms' onSubmit={this.handleSubmit}>
                    {formHeader}
                    {name_elements}
                    <label>Email:
                        <input className='user-form-input' type='text' value={this.state.email} onChange={(e) => this.update(e,'email')} />
                    </label>
                    <label>Password:
                        <input className='user-form-input' type='password' value={this.state.password} onChange={(e) => this.update(e,'password')}/>
                    </label>
                    <button onClick={this.handleSubmit}>Submit</button>
                    {switchLink}
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