import React from 'react'
import classes from './About.module.css'



const about = () => {
    return (
        <div>

            <div className={classes.container}>
                <div className={classes.wrapper}>
                </div>
            </div>
            <div style={{ marginTop: "180px" }}>
                <center>
                    <div className="card mb-3" style={{ maxWidth: "1200px", backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://wallpapers.com/images/high/real-estate-background-ocxjr3dgfvkabxjv.webp" className="img-fluid rounded-start" alt="..." style={{ height: "280px", width: "100%" }} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 className="card-title">About HomzSpot</h1>
                                    &nbsp;
                                    <p className="card-text fs-5">
                                        Absolutely! Our HOMZSPOT, real estate listing application is designed to make the process of listing, browsing, and managing real estate properties seamless and user-friendly. Users can easily list their properties, explore available listings, and efficiently manage property-related information. The platform aims to simplify the real estate experience by providing a centralized hub for property transactions and information.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        </div>
    )
}

export default about

