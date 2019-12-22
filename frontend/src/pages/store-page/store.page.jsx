import React, { Component } from 'react'
import './store.styles.scss'
import PageTitle from '../../components/page-title/page-title.component'
import storePic from '../../static/img/store.jpg'


export default class store extends Component {

    render() {
        return (
            <div className="store-page">
            <PageTitle name="Store" />
            <div className="store-page__detail">
                <div className="store-page__detail-wrapper">
                    <img src={storePic} alt="store" className="store-page__detail-wrapper-img"/>
                </div>
                <div className="store-page__detail-text">
                    <span className="store-page__detail-text-span">
                    Address: Tony Stark st. 96
                    </span>
                </div>
            </div>
        </div>
        )
    }
}

