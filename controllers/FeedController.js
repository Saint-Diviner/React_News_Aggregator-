var Feed = require('../models/Feed')

module.exports = {
	find: function(params,callback){
		Feed.find(params,function(err,results){
			if(err){
				callback(err,null)
				return
			}else{
				callback(null,results)
			}
		})
	},

	findById: function(id,callback){
		Feed.findById(id, function(err,result){
			if(err){
				callback(err,null)
				return
			}else{
				callback(null,result)
			}
		})
	},

	create: function(params,callback){
		Feed.create(params, function(err,result){
			if(err){
				callback(err,null)
				return
			}else{
				callback(null,result)
			}
		})
	},

	put: function(id, params,callback){
		Feed.findByIdAndUpdate(id,params,{new:true},function(err,result){
			if(err){
				callback(err,null)
				return
			}else{
				callback(null,result)
			}
		})
	},

	delete: function(user){
		Feed.findByIdAndRemove(id,params,{new:true},function(err,result){
			if(err){
				callback(err,null)
				return
			}else{
				callback(null,null)
			}
		})

	}

}



