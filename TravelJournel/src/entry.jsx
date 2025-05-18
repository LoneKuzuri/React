import React from "react";

export default function Entry(props){
    return(
        <article className="journal-entry">
            <div className="main-image-container">
            <img className="main-image" src="https://scrimba.com/links/travel-journal-japan-image-url" alt="Mount Fuji" />
            </div>
            <div className="info-container">
                <img className="marker" 
                src="src/assets/marker.png" alt="map marker icon" />
                
                <span className="country">Japan</span>
                <a href="https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9">View more on google maps.</a>
                <h2 className="entry-title">Mount Fuji</h2>

                <p className="trip-dates">2 May, 2025 - 6 May, 2025</p>

                <p className="entry-text">Mount Fuji is the tallest mountain i Japan, standing at 3,776 meters. Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
            
        </article>
    )
}