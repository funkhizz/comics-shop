import React from 'react'
import './imageslide.styles.scss'

export default function imageslide(props) {
    // const styles ={
    //     backgroundImage: `url(${props.url})`,
    //     backgroundSize: 'contain',
    //     backgroundPosition: 'center'
    // }
    // console.log(styles)
    return (
        // <div className="image-slide" style={styles}>
        <div className="image-slide" >
            <img src={props.url} alt="1" />
        </div>
    )
}
