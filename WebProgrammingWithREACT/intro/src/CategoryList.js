import React, { Component } from 'react'
import {ListGroupItem,ListGroup} from 'reactstrap'

export default class CategoryList extends Component {
    /**
     *
     */
    constructor(props) {
        super(props);
        state:{}
        
    }
    render() {
        return (
            <div>
                <h3>{this.props.titleProp}</h3>
                <ListGroup>
                    <ListGroupItem>
                        Cras justo odio
                    </ListGroupItem>
                    <ListGroupItem>
                        Dapibus ac facilisis in
                    </ListGroupItem>
                    <ListGroupItem>
                        Morbi leo risus
                    </ListGroupItem>
                    <ListGroupItem>
                        Porta ac consectetur ac
                    </ListGroupItem>
                    <ListGroupItem>
                        Vestibulum at eros
                    </ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}
