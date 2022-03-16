import React from 'react';

const MyButton = ({children, ...props}) => {
    return (
        <a href='#'{...props}>
            {children}
        </a>
    );
};

export default MyButton;
