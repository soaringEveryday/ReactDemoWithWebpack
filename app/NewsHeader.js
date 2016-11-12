import React from 'react';
import '../res/css/NewsHeader.css';
import '../res/css/app.css';
import ImageLogo from '../res/img/logo.png';

export default class NewsHeader extends React.Component {
    render() {
        return (
            <div className="newsHeader">
                {this.getLogo()}{this.getTitle()}{this.getNavigator()}{this.getLogin()}
            </div>
        )
    }

    getLogo() {
        return (
            <div className="newsHeader-logo">
                <a href="http://www.qianmi.com/"><img src={ImageLogo}/></a>
            </div>
        )
    }

    getTitle() {
        return (
            <div className="newsHeader-title">
                <a className="newsHeader-textLink" href="http://www.qianmi.com/">Hacker News</a>
            </div>
        )
    }

    getNavigator() {
        var navLinks = [
            {
                name: 'new',
                url: 'newest'
            },
            {
                name: 'comments',
                url: 'newcomments'
            },
            {
                name: 'show',
                url: 'show'
            },
            {
                name: 'ask',
                url: 'ask'
            },
            {
                name: 'jobs',
                url: 'jobs'
            },
            {
                name: 'submit',
                url: 'submit'
            }
        ];

        return (
            <div className="newsHeader-nav">
                {
                    navLinks.map(function (navItem) {
                        return (
                            <a key={navItem.url} className="newsHeader-navLink newsHeader-textLink"
                               href={"https://news.ycombinator.com/" + navItem.url}>
                                {navItem.name}
                            </a>
                        )
                    })
                }
            </div>
        )
    }

    getLogin() {
        return (
            <div className="newsHeader-login">
                <a className="newsHeader-textLink" href="https://news.ycombinator.com/login?goto=news">login</a>
            </div>
        );
    }

}