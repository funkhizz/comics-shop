import React from 'react';
import './with-spinner.styles.scss';

const withSpinner = WrappedComponent => {
    const Spinner = ({isLoading, ...otherProps}) => {

    return isLoading ? (
        <div className="spinner">
                <div className="spinner__container">
                </div>
        </div>
    ) : (
        <WrappedComponent {...otherProps} />
    )
    }
    return Spinner
}

export default withSpinner