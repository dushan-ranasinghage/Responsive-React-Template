import React, { Component } from 'react'

export default class Navbar extends Component {
    state = {
        isTop: true,
    };

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
    }

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{opacity: (this.state.isTop===false)?'0':'1'}}>
        <a className="navbar-brand" href="#">NeXuS <i class="fas fa-dumbbell"></i></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#why-fitness-gym">Why ?</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#instructors">Instructors</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" style={{borderRadius:' 20px',minWidth:'300px'}}/>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit" style={{borderRadius: '0px 20px 20px 0px',marginLeft:'-81px'}}>Search</button>
          </form>
        </div>
      </nav>
    )
  }
}
