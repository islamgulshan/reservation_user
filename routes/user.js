var express= require('express');

var router = express.Router();

const usercontoller= require('../controllers/userControllers');

const reservationControllers= require('../controllers/reservationControllers');


router.post('/login',usercontoller.login);

//router.post('/signup',usercontoller.signup);

//router.get('/contact_get',usercontoller.signup);




//reservation
router.post('/add_reservation',reservationControllers.add_reservation);
router.get('/get_all_reservation',reservationControllers.get_all_reservation);
router.get("/getReservationId", reservationControllers.getReservationId);
router.delete("/deleteReservation",reservationControllers.deleteReservation);
router.put("/updatReservation",reservationControllers.updatReservation);
// will exports all function and varaible to main js file 
module.exports = router;