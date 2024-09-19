const express = require('express');
const router = express.Router();
const axios = require('axios');
const multer = require('multer');
const FormData = require('form-data');

const upload = require('./uploadMiddleware')// Initialize Multer for handling multipart/form-data

// Route 1: Sending data from UI to model using POST '/data/sendRequest'
router.post('/sendingReqWData', async (req, res) => {
    try {
        const { airTemp, processTemp, rotationalSpeed, torque, toolWear } = req.body;
        const response = await axios.post('http://127.0.0.1:5001/predict', {
            airTemp, processTemp, rotationalSpeed, torque, toolWear
        });
        const needed = response.data.prediction;
        let failure = '';

        if (needed[0][0] != 1) {
            return res.status(200).send({ state: 'good', result: 'No failure' });
        } else {
            const failureTypes = [
                null,
                "No failure",
                "Heat Dissipation Failure",
                "Overstrain Failure",
                "Power Failure",
                "Tool Wear Failure",
                "Random Failure"
            ];

            for (let i = 2; i < needed[0].length; i++) {
                if (needed[0][i] === 1) {
                    failure = failureTypes[i] || "Unknown Failure";
                    break;
                }
            }
        }

        res.status(200).send({ state: 'bad', result: failure });
    } catch (error) {
        console.error('Error', error);
        res.status(500).send('Internal server error');
    }
});


module.exports = router;


