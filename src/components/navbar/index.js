import React from 'react';
import './index.css';

class MyNavbar extends React.Component {

    render() {
        return (
            <header className='navbar'>
                <div className='navbar__title navbar__item'>Welcome Peeyush</div>
                <div className='navbar__item'><a href="/">Home</a></div>
            </header>
        );
    }

}

export default MyNavbar;