const express = require('express');
const router = express.Router();
const Maid = require('../models/Maid');

router.post('/register', async (req, res) => {
    const { name, email, password, experience, services, location, contact } = req.body;

    try {
        const newMaid = await Maid.create({ name, email, password, experience, services, location, contact });
        res.status(201).json(newMaid);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
