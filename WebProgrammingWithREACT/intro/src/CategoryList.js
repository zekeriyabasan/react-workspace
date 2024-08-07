import React, { Component } from 'react'
import {ListGroupItem,ListGroup} from 'reactstrap'

export default class CategoryList extends Component {
    /**
     *
     */
    constructor(props) {
        super(props);
        this.state = {
            categoriesAsState:this.props.categoryProp.categories,
            currentCategoryId:0
        }
        
    }
    changeCategory = id => {
        this.setState({currentCategoryId:id})

    }
    render() {
        return (
            <div>
                <h3>{this.props.categoryProp.title}</h3>
                <ListGroup>
                    {
                        this.state.categoriesAsState.map(category => (
                            <ListGroupItem onClick={()=> this.changeCategory(category.Id)} key={category.Id}>
                                {category.name}
                            </ListGroupItem>
                        ))
                    }
                    
                </ListGroup>
                <h3>{this.state.currentCategoryId}</h3>
            </div>
        )
    }
}
