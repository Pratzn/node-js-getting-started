
const PORT = process.env.PORT || 5000;
const express = require('express');
const ewelink = require('ewelink-api');
const serveStatic = require('serve-static');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());


app.use(serveStatic(path.join(__dirname, 'public')));

const connection = new ewelink({
    email: 'prat.nud@icloud.com',
    password: 'apm12ev8',
    region: 'as',
});
app.get('/status', (req, res) => {
    (async () => {
    const status = await connection.getDevicePowerState('100022d6fe');
    res.send(status)
    })().catch((e) => {
        console.log("error"+e.message);});
})

app.get('/toggle', (req, res) => {
    (async () => {
        const status = await connection.toggleDevice('100022d6fe');

        res.send(status)
    })().catch((e) => {
        console.log("error"+e.message);});

})

app.listen(PORT);

