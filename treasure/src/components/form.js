import React, { Component } from 'react';

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            UserName: '',
        }
    }
    onChangeUserName(e) {
        this.setState({
            UserName: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        alert(`your username is ${this.state.name} `);
        this.setState({
            UserName: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Add User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add User:  </label>
                        <input type="text" className="form-control" value={this.state.UserName}  onChange={this.onChangeUserName}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add User Name" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}

