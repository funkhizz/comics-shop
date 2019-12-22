import React from 'react'
import './page-title.styles.scss'

export default function title(props) {
    return (
        <div className="page-title">
            <span>{props.name}</span>
        </div>
    )
}
