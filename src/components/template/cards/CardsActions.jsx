import React, { Component } from 'react';
import {Icon} from 'react-materialize';
/**
 *
 *
 * @class CardsActions
 * @extends {Component}
 */
class CardsActions extends Component {
    /**
     *
     *
     * @returns
     * @memberof CardsActions
     */
    render() {
        return (
            <nav className="grey lighten-5 hide-on-med-and-down" id="pageActions">
                <div className="nav-wrapper">
                    <ul className="right">
                        {
                            this.props.btn.map((action, i) => {
                                return (
                                    <li key={i}>
                                        <a className="btn-flat grey lighten-5" title={`View as ${action.iconTitle}`} onClick={action.onClick}>
                                            {
                                                action.icon ? <Icon medium>{action.icon}</Icon> : ''
                                            }
                                            {
                                                action.title ? action.title : ''
                                            }
                                        </a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </nav>
        );
    }
}

export default AppCardsActions;
