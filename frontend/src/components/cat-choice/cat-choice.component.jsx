import React from 'react';
import './cat-choice.styles.scss';
import {withRouter} from 'react-router-dom'

const CatChoice = ({text, imgUrl, history, match, linkUrl}) => (

        <div className='choice' onClick={() => history.push(`${match.url}${linkUrl}`)} >
            <div className='choice__image' style={{backgroundImage: `url(${imgUrl})`}}></div>
            <div className="choice__text">
                {text}
            </div>
        </div>
    )

export default withRouter(CatChoice);