import React, { Component } from "react";
import { GridLoader } from "react-spinners";

class List extends Component {
    
    static defaultProps = {
        fetching: true,
        loadingText: 'Loading.....'
    }

    render() {
        const { fetching, items, renderItem, loadingText } = this.props;
        
        const isEmpty = Object.keys(items).length === 0 ;
        console.log(items, isEmpty);
        if (isEmpty && fetching) {
            return <GridLoader color={'#123abc'} loading={fetching} />
        }

        return (
            <React.Fragment>
                {items.map(renderItem)}

            </React.Fragment>
        )
    }
}

export default List;