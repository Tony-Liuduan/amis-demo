import React, { Component } from 'react';
import AmisRender from '../components/AmisRender.js';
import {
    schema,
} from '../schema';



export default class App extends Component {
    render() {
        return <div>
            <AmisRender schema={schema} />
        </div>
    }
}
