import './homepage.styles.scss'

import React, { Component } from 'react'

export default class homepage extends Component {

    render() {
        return (
            <React.Fragment>
            <div className="homepage">
                <div className="homepage__greeting">
                    <div className="homepage__greeting-text">
                        <div className="homepage__greeting-text-p">
                            Welcome to Brainies!
                        </div>
                        <span className="homepage__greeting-text-avatar">
                        </span>
                    </div>
                </div>
                <div className="homepage__main">
                    <div className="homepage__main-center">
                        <div className="homepage__main-p">
                            Brainies! Comics is an independent, family-run pop culture retailer based on the South Coast of England. Brainies! focus is on presenting a personal curation of Comic Books, Graphic Novels, Toys, Games, Apparel and Collectibles.
                        </div>
                        <div className="homepage__main-p">
                            We use the finest Comicare bags and boards on the market to ensure your comics arrive in top condition and are kept looking fresh year after year.
                        </div>
                    </div>
                    <div className="homepage__main-square">
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

