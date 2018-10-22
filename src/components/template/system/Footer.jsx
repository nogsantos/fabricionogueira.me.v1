import React, { Component } from "react";
/**
 *
 * @class Footer
 * @extends {Component}
 */
class Footer extends Component {
    /**
     * Creates an instance of Footer.
     * @memberof Footer
     */
    constructor() {
        super();

        this.state = {
            currentYear: new Date().getFullYear()
        };
    }
    /**
     * Check user browser
     *
     * @memberof Footer
     */
    iEVerify = () => {
        return (
            /MSIE 10/i.test(navigator.userAgent) ||
            /MSIE 9/i.test(navigator.userAgent) ||
            /rv:11.0/i.test(navigator.userAgent)
        );
    };
    /**
     *
     * @returns
     * @memberof Footer
     */
    render() {
        return (
            <div className="container">
                <div className="row">
                    {!this.iEVerify ? (
                        " "
                    ) : (
                        <div className="col s12 m12 offset-m1 xl12">
                            <div className="footer-copyright text-center">
                                &copy; Fabricio Nogueira{" "}
                                {this.state.currentYear}
                                <a
                                    className="grey-text text-darken-1 right"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="mailto:nogsantos@gmail.com"
                                >
                                    nogsantos@gmail.com
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Footer;
