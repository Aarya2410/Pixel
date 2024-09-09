import express from "express";
import OpenAI from "openai";
import * as dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Ensure this is correctly set
});

const router = express.Router();

// Test Route
router.route('/').get((req, res) => {
    res.send('HELLO FROM PIXEL!');
});

// DALL-E Image Generation Route
router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        // Generate the image from OpenAI API
        const aiResponse = await openai.images.generate({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json' // Ensure this is correct
        });

        const image = aiResponse.data[0].b64_json; // Adjust this access point
        res.status(200).json({ photo: image });

    } catch (error) {
        console.error('Error generating image:', error);  // Log detailed error
        res.status(500).json({
            message: error?.response?.data?.error?.message || 'Something went wrong!'
        });
    }
});

export default router;
