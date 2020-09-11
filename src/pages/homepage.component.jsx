import React from 'react';
import './homepage.styles.scss';

import Header from '../components/Header/header.component'
import Directory from '../components/Directory/directory.component'


const Homepage = () => (
    <div className="homepage">
        <Header />
        <Directory />
    </div>

)


export default Homepage;