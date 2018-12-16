import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
        <div class="about" id="about" >
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ height: '500px',top:'100px' }}>
                <h1 class="float-right fs70"><span style={{color:'red'}}>About</span> GYM</h1>
                <iframe width="800" height="350" src="https://www.youtube.com/embed/X_9VoqR5ojM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
