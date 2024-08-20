// Register
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        res.redirect('/login');
    } catch (error) {
        res.status(400).send('Error registering user');
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user && await user.comparePassword(password)) {
            req.session.userId = user._id;
            res.redirect('/profile');
        } else {
            res.status(400).send('Invalid email or password');
        }
    } catch (error) {
        res.status(400).send('Error logging in user');
    }
});

// Logout
router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Error logging out');
        }
        res.redirect('/login');
    });
});

module.exports = router;