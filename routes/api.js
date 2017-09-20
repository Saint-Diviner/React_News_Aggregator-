var express = require('express')
var router = express.Router()
var controllers = require('../controllers')


router.get('/:resource', function(req, res, next){
	var resource = req.params.resource
	var controller = controllers[resource]

	controller.find(null,function(err,results){
		if(err){
			res.json({
				confirmation: 'failed',
				message: err
			})
			return
		}

		res.json({
			confirmation: 'success',
			results: results
		})
	})

})

router.get('/:resource/:id', function(req, res, next){
	var resource = req.params.resource
	var id = req.params.id
	var controller = controllers[resource]

	controller.findById(id,function(err,results){
		if(err){
			res.json({
				confirmation: 'failed',
				message: err
			})
			return
		}

		res.json({
			confirmation: 'success',
			results: results
		})
	})

})

router.post('/:resource', function(req, res, next){
	var resource = req.params.resource
	var controller = controllers[resource]

	controller.create(req.body,function(err,results){
		if(err){
			res.json({
				confirmation: 'failed',
				message: err
			})
			return
		}
		
		res.json({
			confirmation: 'success',
			results: results
		})
	})

})


module.exports = router