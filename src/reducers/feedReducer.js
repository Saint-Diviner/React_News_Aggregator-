import constants from '../constants'

var initialState = {
	all: null,
	selected: null
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state)

	switch (action.type) {

		case constants.FEEDS_RECIEVED:
		console.log('FEEDS_RECIEVED '+ action.feeds)
			newState['all'] = action.feeds
			return newState

		case constants.FEED_SELECTED:
		console.log('FEED_SELECTED '+ action.data)
			newState['selected'] = action.data
			return newState

		case constants.FEEDS_CREATED:
		console.log('FEEDS_CREATED '+ action.feed)
			var all = (newState.all) ? Object.assign([],newState.all) : []
			all.unshift(action.feed)
			newState['all'] = all
			return newState


		default:
			return state
	}
}