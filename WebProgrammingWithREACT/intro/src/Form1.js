import alertify from 'alertifyjs'
import React, { Component } from 'react'

export default class Form1 extends Component {
    state={userName:'',city:''}
    onChangeHandler = (event) =>{
        let name = event.target.name;
        let value = event.target.value;

        this.setState({[name]:value})
    }
    onSubmitHandler = (event) => {
        event.preventDefault();
        alertify.success("Success Submit")

    }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
            <h3>User Name</h3>
            <input name='userName' type='text' onChange={this.onChangeHandler}></input>
            <h1>{this.state.userName}</h1>

            <h3>City</h3>
            <input name='city' type='text' onChange={this.onChangeHandler}></input>
            <h1>{this.state.city}</h1>

            <input type='submit' value="Save"></input>
        </form>
      </div>
    )
  }
}
