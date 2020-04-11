import React from 'react'
import Icon from './assets/icon.png'
import Data from './assets/data.xml'

class App extends React.PureComponent {
	render() {
		console.log(Data)
		return (
			<div>
				<h1 className='hello'>hello1</h1>
			</div>
		)
	}
}

export default App
