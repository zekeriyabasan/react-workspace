import alertify from 'alertifyjs'
import React, { Component } from 'react'
import { Form, Button, Input, FormGroup, Label } from 'reactstrap'

export default class Form2 extends Component {
    state= {email:'',password:'',description:'',city:''}
    onChangeHandler = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value})
    }
    onSubmitHandler = event => {
        event.preventDefault();

        alertify.success(this.state.email + '> taken');
        alertify.success(this.state.password + '> taken');
        alertify.success(this.state.description + '> taken');
        alertify.success(this.state.city + '> taken');

    }
    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmitHandler}>
                    <FormGroup>
                        <Label for='email'>Email</Label>
                        <Input type='email' name='email' id='email'  onChange={this.onChangeHandler} placeholder='enter your email'></Input>

                        <Label for='password'>Password</Label>
                        <Input type='password' name='password' id='password' onChange={this.onChangeHandler} placeholder='enter your password'></Input>

                    </FormGroup>

                    <FormGroup>
                        <Label for='description'>Description</Label>
                        <Input type='text' name='description' id='description' onChange={this.onChangeHandler} placeholder='enter your description'></Input>

                        <Label for='city'>City</Label>
                        <Input type='select' name='city' id='city' onChange={this.onChangeHandler} placeholder='select your city'>
                            <option>
                                Ankara
                            </option>
                            <option>
                                Adana
                            </option>
                            <option>
                                Mersin
                            </option>
                        </Input>
                    </FormGroup>


                    <Button type='submit'>Save</Button>
                </Form>
            </div>
        )
    }
}
