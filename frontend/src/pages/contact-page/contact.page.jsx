import React, { Component } from 'react'

import './contact.styles.scss'
import PageTitle from '../../components/page-title/page-title.component'
import ContactForm from '../../components/contact-form/contact-form.component'


export default class contact extends Component {


    render() {
        return (
            <div className="contact-page">
            <PageTitle name="Contact" />
            <div className="contact-page__text">
                <span>Name: </span>
                <span>Email: </span>
                <span>Message: </span>
                <div className="contact-page__text-form">
                    <ContactForm />
                </div>
            </div>
        </div>
        )
    }
}

