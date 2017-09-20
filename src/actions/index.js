import constants from '../constants'


export default {

	fetchFeeds: (feeds) => {
		return {
			type: constants.FEEDS_RECIEVED,
			feeds: feeds
		}
	},
	createFeed: (feed) => {
		return {
			type: constants.FEEDS_CREATED,
			feed: feed
		}
	},
	selectFeed: (feed) => {
		return {
			type: constants.FEED_SELECTED,
			data: feed
		}
	},
	fetchRssFeed: (rss) => {
		return {
			type: constants.RSS_FEED_RECIEVED,
			data: rss
		}
	}
}
