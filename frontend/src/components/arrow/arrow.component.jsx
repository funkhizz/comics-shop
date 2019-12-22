import React from 'react'
import './arrow.styles.scss'

export default function arrow(props) {
    return (
        <div
        className={ `slide-arrow ${props.direction}` }
        onClick={ props.clickFunction }>
        { props.glyph }
        </div>
    )
}

