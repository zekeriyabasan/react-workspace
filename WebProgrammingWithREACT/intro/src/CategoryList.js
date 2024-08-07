import React, { Component } from 'react'
import {ListGroupItem,ListGroup} from 'reactstrap'

export default class CategoryList extends Component {
    /**
     *
     */
    constructor(props) {
        super(props);
        this.state = {categoriesAsState:this.props.categoryProp.categories}
        
    }
    render() {
        return (
            <div>
                <h3>{this.props.categoryProp.title}</h3>
                <ListGroup>
                    {
                        this.state.categoriesAsState.map(category => (
                            <ListGroupItem key={category.Id}>
                                {category.name}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
            </div>
        )
    }
}
