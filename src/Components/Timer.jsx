import React, { useState, useEffect } from "react";

const Timer = () => {
    const [vaxt, setVaxt] = useState(10); 
    const [isRunning, setIsRunning] = useState(false);
    const [initialVaxt, setInitialVaxt] = useState(10);

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

    const handleReset = () => {
        setVaxt(initialVaxt); 
        setIsRunning(false);
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
                    marginBottom:"20px"
                }}
            >
                {isRunning ? "Pauza" : "Başla"}
            </button>
            <br />
            <input
                    type="number"
                    value={initialVaxt}
                    onChange={(e) => setInitialVaxt(Number(e.target.value))}
                    disabled={isRunning}
                    style={{
                        padding: "10px",
                        fontSize: "16px",
                        width: "100px",
                        marginRight: "10px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                    }}
                />
      
            <button
                onClick={handleReset}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "#ff9933",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Yenidən başla
            </button>
        </div>
    );
};

export default Timer;
