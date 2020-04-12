import React from 'react'

class App extends React.PureComponent {
  render() {
    const { ...y } = {
      username: 'Chin',
      password: '123',
      gender: 'male'
    }

    const profile = (
      <>
        <h3>zxc</h3>
      </>
    )

    console.log('Hello', y)
    return (
      <div>
        <button
          id="asd"
          style={{ width: 200, height: 200 }}
          onClick={() => {
            console.log('hgf')
          }}
        >
          Chin
        </button>
        {profile}
        <h1 className="hello">hello1234</h1>
      </div>
    )
  }
}

export default App
