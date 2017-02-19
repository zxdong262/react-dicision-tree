import React, { Component } from 'react'
import Lib from './react-dicision-tree.jsx'
import data from './test.data'
export default class App extends Component {

	state = {
    data
  }

	render() {

		return (
			<div style={{
        minHeight: 5000,
        position: 'relative'
      }}>
				<Lib {...this.state} />
			</div>
		)
	}
	
}