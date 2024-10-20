import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productActions from '../../redux/actions/productActions'
import * as categoryActions from '../../redux/actions/categoryActions'
import { ListGroup, ListGroupItem } from 'reactstrap'
import {Badge} from 'reactstrap'
class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories()
  }
  selectCategory = category => {
    this.props.actions.changeCategory(category)
    this.props.actions.getProducts(category.id)
  }
  render() {
    return (
      <div>
        <h3><Badge color='warning'>Categories</Badge></h3>
        <ListGroup>
          {this.props.categories.map(category => (
            <ListGroupItem active={this.props.currentCategory.id === category.id} onClick={()=>this.selectCategory(category)} key={category.id}>
              {category.categoryName}
            </ListGroupItem>
          )

          )}

          {/* {this.props.categories.map(category => {
            <ListGroupItem key={category.id}>
              {category.categoryName}
            </ListGroupItem>
          })} */}
        </ListGroup>
      </div>
    )
  }
}

// this fuction for reducer state connect
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer
  }
}

// connect action to props
function mapDispatchToProps(dispatch) {

  return {
    actions: {
      getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
      getProducts: bindActionCreators (productActions.getProducts, dispatch),
      changeCategory: bindActionCreators (categoryActions.changeCategory, dispatch)
      
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);