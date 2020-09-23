import React, { Component } from 'react'
import {Table} from "reactstrap"

export default class CartList extends Component {

    renderCart(){
        return(
            <Table stripad>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category Id</th>
                        <th>Product Name</th>
                        <th>unit price</th>
                        <th>Quantity</th>
                        <th>Units In Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cart.map(cartItem=>(
                            <tr key={cartItem.product.id}>
                                <td>{cartItem.product.id}</td>
                                <td>{cartItem.product.categoryId}</td>
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.quantity}</td>
                                <td>{cartItem.product.unitsInStock}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }

    render() {
        return (
            <div>
                {this.renderCart()}
            </div>
        )
    }
}
