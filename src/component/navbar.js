import React, {Component} from 'react';

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="/">Navbar</a>
                <a className="nav-item" href="/dashboard">dashboard</a>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        );
    }
}

export {Navbar};