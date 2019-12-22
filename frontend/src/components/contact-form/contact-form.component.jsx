import React from 'react';

import './contact-form.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import axios from 'axios'

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            displaySubmit: false
        }
    }


    handleSubmit = (event) => {
        event.preventDefault()
        const { name, email, message } = this.state;

        axios.defaults.xsrfCookieName = 'csrftoken';
        axios.defaults.xsrfHeaderName = 'X-CSRFToken';

        axios.post('https://comics-djreact.herokuapp.com/contacts/api/contacts/', {name, email, message, })
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        });
        console.log(this.state)
        this.setState({ name: '', email: '', message: '' })
        this.setState({displaySubmit: true})

    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='contact-form'>
                { this.state.displaySubmit ?
                    <div class="submit-class">
                        <p>Thank you for your email!</p>
                        <p>We will contact you soon!!!</p>
                    </div>
                    :
                    <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='name'
                        type='text'
                        value={this.state.name}
                        handleChange={this.handleChange}
                        required />
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required/>
                    <FormInput
                        name='message'
                        type='text'
                        value={this.state.message}
                        handleChange={this.handleChange}
                        required
                        label='message' />
                    <div className='buttons'>
                        <CustomButton type='submit' onSubmit={this.handleSubmit}>SEND</CustomButton>
                    </div>
                </form>
                }
            </div>
        )
    }
}

export default ContactForm;