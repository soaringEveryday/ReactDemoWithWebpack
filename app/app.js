import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import NewsList from './NewsList';

class HelloWorld extends React.Component {
    render() {
        return (
            <NewsList/>
        );
    }

}

render(<HelloWorld />, $('#content')[0]);