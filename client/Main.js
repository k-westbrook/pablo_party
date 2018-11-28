import React from 'react'

export default class Main extends React.Component {

  constructor() {

    super();
    this.state = {
      guest: []
    }
  }



  render() {
    return (
      <div>
        <h1>Pablo's Party</h1>
        <p>Hope to see you all there</p>
      </div>
    )
  }


}
