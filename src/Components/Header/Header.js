import React, {Component} from "react";
import {connect} from "react-redux";
import "./Header.scss";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <h1>Discover</h1>
                </div>
                <div className="nav">
                    <ul>
                        <li className="active">POPULAR</li>
                        <li>TREND</li>
                        <li>NEWEST</li>
                        <li>TOP RATED</li>
                    </ul>
                </div>
                <div className="search">
                    <h3>Search</h3>
                    <svg height="1rem" x="0px" y="0px" viewBox="0 0 100 125" fill="rgb(100,100,100)" enableBackground="new 0 0 100 100"><path d="M99.337,89.242L68.052,57.956c4.063-6.057,6.246-13.179,6.246-20.636c0-9.923-3.864-19.252-10.881-26.269  C56.4,4.035,47.072,0.171,37.149,0.171c-9.923,0-19.252,3.864-26.269,10.88C3.864,18.068,0,27.397,0,37.32  s3.864,19.251,10.881,26.268s16.345,10.881,26.269,10.881c7.541,0,14.737-2.234,20.838-6.385l31.255,31.253  c1.055,1.056,2.995,0.826,4.332-0.511l5.252-5.252C100.164,92.237,100.393,90.297,99.337,89.242z M37.149,64.405  c-14.936,0-27.086-12.15-27.086-27.085s12.151-27.086,27.086-27.086c14.935,0,27.085,12.151,27.085,27.086  S52.084,64.405,37.149,64.405z"/></svg>
                </div>
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {};
};

const mapDispachToProps = dispatch => {
    return {};
};
export default connect(
    mapStateToProps,
    mapDispachToProps
)(Header);
