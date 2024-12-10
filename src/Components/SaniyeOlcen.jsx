import React, { useState, useEffect } from "react";
import "./saniyeolcen.css"

const SaniyeOlcen = () => {
    const [vaxt, setVaxt] = useState(0);
    const [isRunning, setIsRunning] = useState(false); 

    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                setVaxt((prevVaxt) => prevVaxt + 1);
            }, 1000);
        } else if (!isRunning && vaxt !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval); 
    }, [isRunning]);

    const baslaDayandir = () => {
        if (isRunning) {
            alert(`Ölçmə nəticəsi: ${vaxt} saniyə`);
        }
        setIsRunning(!isRunning); 
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Saniyə Ölçən: {vaxt}s</h1>
            <button
                onClick={baslaDayandir}
                style={{
                    backgroundColor: isRunning ? "#cc3333" : "#33cc33"
                }}
            >
                {isRunning ? "Dayandır" : "Başla"}
            </button>
        </div>
    );
};

export default SaniyeOlcen;
