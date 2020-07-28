const express = require('express')
const PORT = process.env.PORT || 5000
const ewelink = require('ewelink-api');
const app = express()
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

app.listen(PORT, () => {
    console.log('Start server at port '+PORT)
})
