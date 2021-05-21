import React from 'react';

const Navbar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">yeah its a navbar!!!!</a>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">test1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">test2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">test3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">test4</a>
                        </li>
                    </ul>
                </div>

                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" data-toggle="modal" data-target="#myModal">Search</button>
                </form>

            </nav>

            {/* Modal */}
            <div className="modal fade" id="myModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">stop doing shit!</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p style={{fontSize : 64}}>😳😳😳😳😳</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;