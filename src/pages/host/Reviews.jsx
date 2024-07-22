import React from 'react'
import ratingImg from '../../images/rating.png'
import starsIcon from '../../images/stars-icon.png'

const Reviews = () => {
    return (
        <div className="reviews-page-container">
            <div className="reviews-section-top">
                <div>
                    <h1 className="host-titles">Your reviews</h1>
                    <h2 className="gray-small-text">last <span className="underline">30 days</span></h2>
                </div>
                <img src={ratingImg} alt="A bar chart depicting a 5.0 overall rating with 100% of reviews being 5 stars, and 0% for 4 stars, 3 stars, 2 stars, and 1 star."/>
            </div>
            <div className="reviews-section-bottom">
                <h4>Reviews (2)</h4>
                <div className="review-container">
                    <img src={starsIcon} alt="5 filled stars" />
                    <h5>Eliot <span>December 1, 2023</span></h5>
                    <p>
                        I loved the Tranquil Traveler sauna.
                        It's cozy and perfect for solo relaxation or a romantic getaway.
                        The wood-burning stove adds a nice rustic touch, and the bench is very comfortable.
                        At $50 a day, it's a great deal for such a relaxing experience.
                    </p>
                </div>
                <hr />
                <div className="review-container">
                    <img src={starsIcon} alt="5 filled stars" />
                    <h5>Sandy <span>November 23, 2023</span></h5>
                    <p>
                        I used the Opulent Oasis for a weekend getaway and it was incredible!
                        The aromatherapy and sound system were top-notch, and the plush seating was super comfy.
                        No complaints at all, absolutely perfect luxury experience!
                    </p>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Reviews