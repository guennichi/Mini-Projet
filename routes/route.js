
const express = require('express');
const passport = require('passport');
const { Login } = require('../controllers/Login');
const { Register } = require('../controllers/Register');
const  Mission  = require('../controllers/Mission');
const  Employée  = require('../controllers/Employée');
const router = express.Router();

router.post('/Register', Register)
router.post('/Login', Login)
router.get('/profile', passport.authenticate('bearer', { session: false }), (req, res) => {
    res.send(req.user)
})
// routes pour employee//
router.get('/', Employée.getAllEmployée);
router.post('/', Employée.createEmployée);
router.get('/:id', Employée.getOneEmployée);
router.put('/:id', Employée.modifyEmployée);
router.delete('/:id', Employée.deleteEmployée);

// routes pour mission//
router.get('/', Mission.getAllMission);
router.post('/', Mission.createMission);
router.get('/:id', Mission.getOneMission);
router.put('/:id', Mission.modifyMission);
router.delete('/:id', Mission.deleteMission);


module.exports = router;