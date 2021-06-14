import React, { Component } from 'react';
import Heading from './sections/Heading';
import Jobs from './sections/Jobs';
export default class index extends Component {
    render() {
        return (
            <div>
                <Heading/>
                <Jobs/>
            </div>
        )
    }
}
