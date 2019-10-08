import React, { Component } from 'react';

class Search extends Component{


    render(){
        return(
            <div className="row mt-5">
                <div className="card text-center mx-auto">
                        <div className="card-header">
                                Know the weather around
                        </div>
                        <div className="card-body">
                            <form className="form-inline">
                                <div className="form-group mx-sm-3 mb-2">
                                        <label for="City" className="sr-only">City</label>
                                        <input type="text" className="form-control" id="inputPassword2" placeholder="City" 
                                            onChange={e => this.props.setCity(e.target.value)}
                                        />
                                </div>
                                <button type="submit" className="btn btn-primary mb-2"
                                    onClick={(e)=> this.props.setShowWeather(false)}
                                >Search</button>
                            </form>
                        </div>
                </div>
            </div>
        )
    }
}

export default Search;