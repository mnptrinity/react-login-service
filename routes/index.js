const { User, validate, loginValidation } = require('../models/user');
const express = require('express');
const router = express.Router();


/**
 * Function for insertinf new user and before insertion we are checking the valid user...
 */
router.post('/', async (req, res) => {

    // First Validate The Request
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    // Check if this user already exisits
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('That user already exisits!');
    } else {
        // Insert the new user if they do not exist yet
        user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        await user.save();
        res.send(user);
    }
});

/**
 * Function for checking if the user is already exists ...
 * will return valid / invalid user as response...
 */
router.post('/login', async (req, res) => {

    let result = await loginValidation(req.body);

    // Check if this user already exisits
    let user = await User.findOne({ email: req.body.email, password: req.body.password });
    if (user)
        return res.status(200).send({ user, message: "success" });
    return res.status(202).send({ message: result.error && result.error.details ? result.error.details[0].message : "Invalid user" });

});

module.exports = router;