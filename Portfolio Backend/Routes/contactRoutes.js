const Contact = require('../Models/contactSchema');
const express = require('express');
const router = express.Router();

// Create a new contact
router.post('/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ message: 'Contact created successfully', contact: newContact });
    } catch (error) {
        res.status(500).json({ message: 'Error creating contact', error: error.message });
    }
});

module.exports = router;