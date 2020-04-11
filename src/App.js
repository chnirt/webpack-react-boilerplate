import React from 'react'
import Data from './assets/data.xml'

class App extends React.PureComponent {
	render() {
		console.log(Data)
		return (
			<div>
				<h1 className='hello'>hello12345</h1>
			</div>
		)
	}
}

export default App
