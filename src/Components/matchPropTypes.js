import React from "react";
import propTypes from "prop-types";

export default {
    component: propTypes.func.isRequired,
    user: (props, propName, componentName) => {
        const propValue = props[propName];

        if (propValue !== null) {
            return new Error(
                'prop on component has invalid value'
            )
        }
    }
}