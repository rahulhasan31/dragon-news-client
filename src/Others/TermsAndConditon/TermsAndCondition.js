import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h2>here our terms and condition</h2>
            <p>go back to <Link to={'/register'}>registration </Link> </p>
        </div>
    );
};

export default TermsAndCondition;