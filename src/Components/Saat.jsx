import React, { useState, useEffect } from "react";

const Saat = () => {
    const [saat, setSaat] = useState("");

    const saatYenile = () => {
        const indi = new Date();
        const saat = indi.getHours();
        const deqiqe = indi.getMinutes(); 
        const saniye = indi.getSeconds(); 

        const formatliSaat = 
            (saat < 10 ? "0" + saat : saat) + ":" +
            (deqiqe < 10 ? "0" + deqiqe : deqiqe) + ":" +
            (saniye < 10 ? "0" + saniye : saniye);

        setSaat(formatliSaat);
    };

    useEffect(() => {
        const interval = setInterval(saatYenile, 1000);
        return () => clearInterval(interval); 
    }, []);

    return (
        <div style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", marginTop: "20px" }}>
            Saat: {saat}
        </div>
    );
};

export default Saat;
