import React, { Component } from 'react'
import Lib from './react-dicision-tree'
import data from './test.data'
export default class App extends Component {

	state = {
    data
  }

	render() {

		return (
			<div>
				<Lib {...this.state} />
			</div>
		)
	}
	
}