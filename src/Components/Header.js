import React, { Fragment } from 'react';

const Header = ({titulo}) => {
    return ( 
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <h3 className="text-white">{titulo}</h3>
            </nav>
        </Fragment>
     );
}
 
export default Header;