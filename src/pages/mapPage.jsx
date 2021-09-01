import React from "react";

const mapGuide = () => {
    return (
        <div className="bodyF">

            <div class="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <h1 class="map-h1">Lost?</h1>
                            <p>
                                EzO not only has information about your course but can help with getting you from class to class. 
                                Here are some helpful tips for you to be able to navigate your way around campus...
                            </p>
                            <div className="row">
                                <div className="col-9">
                                    <div className="card">
                                        <iframe src="https://mazemaps.newcastle.edu.au/?zoom=15" width="725" height="500" />
                                        <p>This map is provided my Mazemaps and you can see their work <a href="https://www.mazemap.com/">here</a>, or for this exact map <a href="https://mazemaps.newcastle.edu.au/?zoom=15">here</a>.</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card mapguide-card">
                                        <div class="card-body">
                                            <h3 class="card-title">Search Bar</h3>
                                            <hr />
                                            <p class="card-text">The search bar can be used to find any building on the university campus, just type in the building name and select it. It will then give you directions from your current location to the building!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-7">
                                    <div className="card mapguide-card">
                                        <div class="card-body">
                                            <h3 class="card-title">Map Tools</h3>
                                            <hr />
                                            <p class="card-text">These icons on the left of the map will help you with the navigation of the map!</p>
                                            <ul class="cardul">
                                                <li>The plus icon will zoom in on the map</li>
                                                <li>The minus icon will zoom out on the map</li>
                                                <li>The diamond icon will reset the map so that north is towards the top of the map</li>
                                                <li>The target icon will reset the map back to your current location</li>
                                                <li>The stacked paper icon will highlight paths e.g the shuttle bus</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default mapGuide;
