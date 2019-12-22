import React from 'react'
import './footer.styles.scss'
import pic1 from '../../static/img/instagram.png';
import pic2 from '../../static/img/twitter.png'
import pic3 from '../../static/img/facebook.png'

export default function footer() {
    return (
        <div className="footer">
            <div className="footer__text">
                Find me on
            </div>
            <div className="footer__contact">
                <div className="footer__contact-insta">
                    <a href="https://www.instagram.com/"><img src={pic1} alt="" className="footer__contact-insta-pic" /></a>
                    <div className="footer__contact-insta-name">@Instagram</div>
                </div>
                <div className="footer__contact-insta">
                    <a href="https://twitter.com/?lang=en-gb">
                    <img src={pic2} alt="" className="footer__contact-insta-pic" />
                    </a>
                    <div className="footer__contact-insta-name">@Twitter</div>
                </div>
                <div className="footer__contact-insta">
                    <a href="http://www.facebook.com">
                    <img src={pic3} alt="" className="footer__contact-insta-pic" />
                    </a>
                    <div className="footer__contact-insta-name">@Facebook</div>
                </div>
            </div>
        </div>
    )
}
