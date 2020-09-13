import React, { Component } from 'react'
import logo1 from '../assets/logo1.svg'
import gear from '../assets/gear.svg'
import '../css/UnderConstruction.css'

export default class UnderConstruction extends Component {
    render() {
        return (
            <div className="UnderConstruction">
                <div className="logo unselectable">
                    <img src={logo1} alt="logo"/>
                    <div className="gearContainer">    
                        <img className="gear" src={gear} alt="gear"/>
                    </div>
                </div>
                <div className="name">
                    RUBICON
                </div>
                <br/>
                <div className="shortInfo">
                    The Website is under construction.
                </div>
                <br/>
                <div className="tagline">
                    We make everything best for you.
                </div>
            </div>
        )
    }
}
