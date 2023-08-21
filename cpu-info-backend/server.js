const express = require('express');
const os = require('os');
const cors = require('cors'); // Importieren Sie das CORS-Paket

const app = express();
const PORT = 3001;

app.use(cors()); // Verwenden Sie CORS-Middleware

app.get('/cpu-info', (req, res) => {
    const cpuLoad = os.loadavg();
    const totalMem = os.totalmem();
    const freeMem = os.freemem();

    res.json({
        cpuLoad,
        totalMem,
        freeMem
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
