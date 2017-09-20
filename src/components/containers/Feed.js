import React, {Component} from 'react'
import {connect} from 'react-redux'
import actions from '../../actions'

class Feed extends Component {

	render(){
		const selectedFeed = this.props.feed.selected
		let name = 'Welcome to Newsfeed'
		let items =[]
		if(selectedFeed){
			name = selectedFeed.name
			items = this.props.rss[selectedFeed.url] ? this.props.rss[selectedFeed.url] : []
		}
		return(

			    <div className="content">
                  <header>
                    <h1>{name}</h1>
                    <hr/>
                    
                  </header>
                  <ol>
                  {
                  	
                  	items.map((item,i) => {
                  		return(
                  			 <li key={i}>
                  			 	<a target="_blank" href={item.link}>{item.title}</a>
                  			 </li>
                  			)
                  	})
                  	
                  }
                  </ol>
                </div>
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
		selectFeed: (feed) => dispatch(actions.selectFeed(feed))
	}
}


export default  connect(stateToProps,dispatchToProps)(Feed)