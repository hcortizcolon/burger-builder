import React from 'react';

import Aux from '../../../hoc/Aux'

const OrderSummary = (props) => {

    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => 
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        );

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    );
}

export default OrderSummary;