import React, { useState, useEffect } from "react";

const Timer = () => {
    const [vaxt, setVaxt] = useState(10); 
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isRunning && vaxt > 0) {
         
            interval = setInterval(() => {
                setVaxt((prevVaxt) => prevVaxt - 1);
            }, 1000);
        } else if (vaxt === 0) {
            clearInterval(interval);
            alert("Taymer bitdi!");
        }

        return () => clearInterval(interval); 
    }, [isRunning, vaxt]);

    const taymerBaslaPauza = () => {
        setIsRunning((prev) => !prev);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Taymer: {vaxt}s</h1>
            <button
                onClick={taymerBaslaPauza}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: isRunning ? "#cc3333" : "#33cc33",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                {isRunning ? "Pauza" : "Başla"}
            </button>
        </div>
    );
};

export default Timer;
