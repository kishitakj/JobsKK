

import React, { Component } from 'react'
import Section2 from './sections/Section2'
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';
import Section1 from './sections/Section1/index';
import Section3 from './sections/section3';
import Section4 from './sections/section4';
import Section5 from './sections/section5';
import Section6 from './sections/section6';
import Section7 from './sections/section7';
// import Advertisment from '../../components/Advertisment';


export default class Home extends Component {
    render() {
        return (
            <div>
              {/* <Header/>  */}
                <Section1/>
                <Section2 />
                <Section3/>
                <Section4/>
                <Section5/>
                <Section6/>
                <Section7/>
                {/* <Advertisment/> */}
                {/* <Footer/> */}
            </div>
        )
    }
}
