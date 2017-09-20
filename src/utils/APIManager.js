import superagent from 'superagent'
import Promise from 'bluebird'

export default {
	get: (url,params) => {
		return new Promise((resolve, reject) => {
			superagent
			.get(url)
			.query(params)
			.set('Accept', 'aplication/json')
			.end((err,response) => {
				if(err){
					reject(err)
					return
				}
				if(url.search('/api/') == 0){
					const confirmation = response.body.confirmation
					if(confirmation != 'success'){
						resolve({message: response.body.message})
						return
					}
				}
				resolve(response.body)
			})
		})
	},
	post: (url,body) => {
		return new Promise((resolve, reject) => {
			superagent
			.post(url)
			.send(body)
			.set('Accept', 'aplication/json')
			.end((err,response) => {
				if(err){
					reject(err)
					return
				}
				if(url.search('/api/') == 0){
					const confirmation = response.body.confirmation
					if(confirmation != 'success'){
						resolve({message: response.body.message})
						return
					}
					
				}
				resolve(response.body)
			})
		})
	}
}