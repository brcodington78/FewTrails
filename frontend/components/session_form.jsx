import React from 'react';
import {CLEAR_ERRORS, clearErrors} from '../actions/session_actions'
import {Link} from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        if (this.props.formType === "signup"){
            this.state = {
                first_name: '',
                last_name: '',
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
        this.demoUser = this.demoUser.bind(this);
        this.demoSignUpUser = this.demoSignUpUser.bind(this)
    }

    demoUser() {
        
        let demoUser = { email: "jdoe@yahoo.com", password: "123456" };
        this.props.login(demoUser)
    }

    demoSignUpUser() {
        
        let demoSignUp = { email: `guest${Math.floor(Math.random()*100)}@yahoo.com`, password: "123456", first_name: 'Guest', last_name: 'hiker' };
        this.props.processForm(demoSignUp)
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
        let demoButton;

        if (this.props.formType === 'signup') {
            formHeader = (
                <h1>Create a new account!</h1>
            )
            switchLink = (
                <Link className='form-link' to="/login">Already have an acount? Log in</Link>
            )
            demoButton = (
                <button onClick={this.demoUser}>Demo Sign Up</button>
            )
        } else if (this.props.formType === 'login') {
            formHeader = (
                <h1>Login to find your adventure!</h1>
            )
            switchLink = (
                <Link className='form-link' to="/signup">Don't have an acount? Sign up!</Link>
            )
            demoButton = (
                <button onClick={this.demoUser}>Demo Login</button>
            )
        }


        let name_elements = "";
        if (this.props.formType === 'signup') {
            name_elements = (
                <>
                        <input className='user-form-input' placeholder='First Name' type='text'  value={this.state.first_name} onChange={(e) => this.update(e, 'first_name')}/>
                    
                        <input className='user-form-input'  placeholder='Last Name' type='text' value={this.state.last_name} onChange={(e) => this.update(e, 'last_name')}/>
                </>
            )
        }


        return(
            <div className='form-container'>
                <form className='user-auth-forms' onSubmit={this.handleSubmit}>
                    {formHeader}
                    {name_elements}
                        <input className='user-form-input'  placeholder='Email' type='text' value={this.state.email} onChange={(e) => this.update(e,'email')} />
                        <input className='user-form-input'  placeholder='Password' type='password' value={this.state.password} onChange={(e) => this.update(e,'password')}/>
                    <button onClick={this.handleSubmit}>Submit</button>
                    {demoButton}
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