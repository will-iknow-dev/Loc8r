var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* GET home page.
router.get('/', ctrlMain.index);
module.exports = router;
 */

/* Location Pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other Pages */
router.get('/about', ctrlOthers.about);

module.exports = router;