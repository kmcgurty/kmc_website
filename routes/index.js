var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(request, response, next) {
	response.render('index', {
		message: 'catscatscatscatscatscatscats'
	});
	console.log("serving index");
});

module.exports = router;