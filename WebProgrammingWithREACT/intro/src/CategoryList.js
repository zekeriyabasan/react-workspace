import React, { Component } from 'react'
import {ListGroupItem,ListGroup} from 'reactstrap'

export default class CategoryList extends Component {
    /**
     *
     */
    // constructor(props) {
    //     super(props);
    //     state:{}
        
    // }
    render() {
        return (
            <div>
                <h3>{this.props.categoryProp.title}</h3>
                <ListGroup>
                    <ListGroupItem>
                    {this.props.categoryProp.categories[0]}
                    </ListGroupItem>
                    <ListGroupItem>
                    {this.props.categoryProp.categories[1]}
                    </ListGroupItem>
                    <ListGroupItem>
                    {this.props.categoryProp.categories[2]}
                    </ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}
