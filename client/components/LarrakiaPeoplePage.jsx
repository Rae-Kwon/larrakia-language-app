import React, { Component } from 'react'

import BurgerMenu from './BurgerMenu'

class LarrakiaPeople extends React.Component {
    render() {
        return (
            <div>
                <BurgerMenu />
                <div className="about-page">
                    <div className="container">
                        <div className="icon-container">
                            <img className="wl-icon" src="/images/button2.png" alt="Native Peanut"/>
                        </div>
                        <h1 className="text-center">Larrakia People are Saltwater People</h1>
                        <div className="p-5">
                                <p>We have a strong connection with the lands, waters and all the animals who we share them with.</p>
                                <p>We also have strong cultural connections with our neighbouring tribes who live around us, like the Kungarrakan people, The Wogait people and the Wulna People.</p>
                                <p>Larrakia people share some ceremonies and songlines with our neighbours to make sure we stay connected and to maintain law and peace.</p>
                                <p>Danggalaba is a very sacred animal for all Larrakia people, it is our Dreamtime story of our creation. We treat Danggalaba with great respect and expect all visitors to do the same.</p>
                                <br/>
                                <p>We have been here from The Beginning and have always co-existed with all the animals and the lands, caring for one another.</p>
                                <p>When you are on Larrakia country it's important that you respect all the people, animals and the law of Larrakia land too.</p>
                                <br/>
                                <p>Remember, when we look after the land, the land will look after us.
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LarrakiaPeople
