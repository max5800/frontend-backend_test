import React, { useState, useEffect } from 'react';

function App() {
    const [cpuInfo, setCpuInfo] = useState({});

    useEffect(() => {
        const fetchCpuInfo = async () => {
            const response = await fetch('http://localhost:3001/cpu-info');
            const data = await response.json();
            setCpuInfo(data);
        };

        fetchCpuInfo();
    }, []);

    return (
        <div>
            <h1>CPU & Memory Info</h1>
            <p>CPU Load: {cpuInfo.cpuLoad && cpuInfo.cpuLoad[0]}</p>
            <p>Total Memory: {cpuInfo.totalMem}</p>
            <p>Free Memory: {cpuInfo.freeMem}</p>
        </div>
    );
}

export default App;
