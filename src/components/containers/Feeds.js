import React, {Component} from 'react'
import {connect} from 'react-redux'
import actions from '../../actions'
import APIManager from '../../utils/APIManager'

class Feeds extends Component {
	constructor(){
		super()
	}

	componentDidMount(){
		APIManager
		.get('/api/feed',null)
		.then(data => {
			this.props.fetchFeeds(data.results)
		})
	}
	selectFeed(feed,e){
		e.preventDefault()
		if(this.props.rss[feed.url] != null){
			console.log('we already have the data!')
			return
		}
		const endpoint = 'https://api.rss2json.com/v1/api.json'
		const params = {
			rss_url: feed.url
		}
		APIManager.get(endpoint,params).then(data => {this.props.fetchRssFeed(data)})
		this.props.selectFeed(feed)
	}
	render(){
		const feeds = this.props.feed.all || []
		return(
			<ul>
			{
				feeds.map((feed,i) => {
					const color = (feed == this.props.feed.selected) ? 'red' : "#bbb"
					return <li key={feed._id}><a style = {{color: color}} onClick={this.selectFeed.bind(this,feed)} href={feed.url}>{feed.name}</a></li>
				})
			}
			</ul>
			)
	}
}
const stateToProps = (state) => {
	return {
		feed: state.feed,
		rss: state.rss
	}
}
const dispatchToProps = (dispatch) => {
	return {
		fetchFeeds: (params) => dispatch(actions.fetchFeeds(params)),
		createFeed: (params) => dispatch(actions.createFeed(params)),
		selectFeed: (feed) => dispatch(actions.selectFeed(feed)),
		fetchRssFeed: (feed) => dispatch(actions.fetchRssFeed(feed))
	}
}


export default  connect(stateToProps,dispatchToProps)(Feeds)