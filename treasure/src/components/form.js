import React, { Component } from 'react';

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            UserName: ''
        }
    }
    onChangeUserName(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        alert(`your username is ${this.state.UserName} `);
        // this.setState({
        //     UserName: e.target.value
        // })
    }

    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Add User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" value={this.state.UserName} name="UserName"  onChange={this.onChangeUserName}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Enter the game" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}

