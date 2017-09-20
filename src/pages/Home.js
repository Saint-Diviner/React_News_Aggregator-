import React, {Component} from 'react'
import {Feeds, Feed} from '../components/containers'
import APIManager from '../utils/APIManager'
import {connect} from 'react-redux'
import actions from '../actions'

class Home extends Component {
    constructor(){
    super()
      this.state = {
        feed: {
          name: '',
          url: ''
        }
      }
  }
  updateFeed(e){
    var updatedFeed = Object.assign({},this.state.feed)
    updatedFeed[e.target.id] = e.target.value
    this.setState({
      feed: updatedFeed
    })
  }
  addFeed(e){
    e.preventDefault()
    let updatedFeed = Object.assign({},this.state.feed)
    APIManager
    .post('/api/feed',updatedFeed)
    .then( data => {
      this.props.createFeed(data.results)
    })
  }
	render(){
		return(
			<div id="wrapper">
		        <div id="main">
		            <div className="inner">
                  <section id="banner">
                    <Feed/>
                  </section>
      					</div>
      			</div>

			<div id="sidebar">
        <div className="inner">
          <section id="search" className="alt">
                    <form method="post" action="#">
                      <input value={this.state.feed.name} onChange={this.updateFeed.bind(this)} type="text" name="query" id="name" placeholder="Feed Name" /><br/>
                      <input value={this.state.feed.url} onChange={this.updateFeed.bind(this)} type="text" name="query" id="url" placeholder="Feed URL" /><br/>
                      <button onClick={this.addFeed.bind(this)}>Add Feed</button>
                    </form>
                </section>
          <nav id="menu">
                  <header className="major">
                      <h2>My Feeds</h2>
                  </header>
                  <Feeds/>
                </nav>  
        </div>
      </div>
			</div>
			)
	}
}
const stateToProps = (state) => {
  return {
    feed: state.feed
  }
}
const dispatchToProps = (dispatch) => {
  return {
    fetchFeeds: (params) => dispatch(actions.fetchFeeds(params)),
    createFeed: (params) => dispatch(actions.createFeed(params))
  }
}

export default connect(stateToProps,dispatchToProps)(Home)