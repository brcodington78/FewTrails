import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
      }

    update(e, field) {
         this.state({
            [field]: e.currentTarget.value
        });
    }

    render() {
        return(
            <div>
                <form>
                    <label>Email:
                        <input type='text' value={this.state.email} onChange={(e) => this.update(e,'email')} />
                    </label>
                    <label>Password:
                        <input type='password' value={this.state.password} onChange={(e) => this.update(e,'password')}/>
                    </label>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}