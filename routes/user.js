var express= require('express');

var router = express.Router();

const usercontoller= require('../controllers/userControllers');

const reservationControllers= require('../controllers/reservationControllers');


const parkingSotUserController= require('../controllers/parkingSotUserController');

const parkingslotController= require('../controllers/parkingslotController');

const parkingSlotAssignController= require('../controllers/parkingSlotAssignController');


const studentController= require('../controllers/studentController');

const courseController= require('../controllers/courseController');

const enrollementController= require('../controllers/enrollementController');



router.post('/login',usercontoller.login);

//router.post('/signup',usercontoller.signup);

//router.get('/contact_get',usercontoller.signup);

/*
    PakingSlot Rout
*/

router.post('/parking/slot/signup',parkingSotUserController.parkingSlotSignUp);
router.post('/parking/slot/add',parkingslotController.AddParkingSlot);
router.post('/parking/slot/assign',parkingSlotAssignController.AssignSlot);


/*
    End PakingSlot Rout
*/

 

/*
     Student and Course Management Route
*/

router.post('/student/add',studentController.AddStudent);
router.post('/course/add',courseController.AddCourse);
router.post('/enrollement/add',enrollementController.AddEnrollement);

/*
    End  Student and Course Management Route
*/


//
//reservation
router.post('/add_reservation',reservationControllers.add_reservation);
router.get('/get_all_reservation',reservationControllers.get_all_reservation);
router.get("/getReservationId", reservationControllers.getReservationId);
router.delete("/deleteReservation",reservationControllers.deleteReservation);
router.put("/updatReservation",reservationControllers.updatReservation);
// will exports all function and varaible to main js file 
module.exports = router;