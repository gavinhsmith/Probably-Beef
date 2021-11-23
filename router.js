const {Router} = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.render('home', {
        title: "Home"
    });
});

router.get('/quiz', (req, res) => {
    res.render('quiz', {
        title: "Quiz"
    });
});

module.exports = router;