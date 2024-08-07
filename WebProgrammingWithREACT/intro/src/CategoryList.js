import React, { Component } from 'react'
import {ListGroupItem,ListGroup} from 'reactstrap'

export default class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoriesAsState:[],
        }      
    }

    getCategories = ()=>{
        fetch("http://localhost:3000/categories")
        .then(response=>response.json())
        .then(data=>this.setState({categoriesAsState:data}))
    }

    componentDidMount(){
        this.getCategories();

    }
    render() {
        return (
            <div>
                <h3>{this.props.categoryProp.title}</h3>
                <ListGroup>
                    {
                        this.state.categoriesAsState.map(category => (
                            <ListGroupItem active={category.id === this.props.id? true:false} onClick={()=> this.props.changeCategory(category)} key={category.id}>
                                {category.categoryName}
                            </ListGroupItem>
                        ))
                    }
                    
                </ListGroup>
            </div>
        )
    }
}
