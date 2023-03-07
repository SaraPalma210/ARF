import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function ProgressBar(props) {
    const progreso = props.numero * 2;
    return (
            <div className="progress">
                <div className="progress-bar bg-success text-white progress-bar-animated"
                role="progressbar"
                
                style={{width: progreso ? progreso +"%": "100%"}}>{progreso ? progreso +"%": "0%"}
                </div>
            </div>            
    );
}

export default ProgressBar;