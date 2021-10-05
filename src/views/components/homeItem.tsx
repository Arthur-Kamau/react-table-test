
import React from "react";

import data from "../../data/data.json";
import VisibilitySensor from "react-visibility-sensor"
import Product from "../../model/product";


interface HomeItemProps {
    state: string
    category: string
    subCategory: string
}

interface HomeItemState {
    isVisible: boolean
}

class HomeItem extends React.Component<HomeItemProps, HomeItemState> {
    constructor(props: HomeItemProps) {
        super(props);
        this.state = { isVisible: false };
    }
    onChange = (isVisibleI: boolean) => {
        this.setState({ isVisible: isVisibleI });
    };
    showProperty = () => {

        let x = data.filter((e: Product) => {
            return e.state == this.props.state && e.category == this.props.category && e.subCategory == this.props.subCategory
        })[0]
        return <React.Fragment>

            <td >
               {x == undefined ? "error" :  <span id={x.state+x.category+x.subCategory}  className={x.state + " " + x.subCategory + " " + x.category}>{x.sales}</span>}
            </td>
            <br />
        </React.Fragment>
    }
    render() {
        return (
            <VisibilitySensor onChange={this.onChange}>
                <React.Fragment>

                    {

                        this.state.isVisible ?

                            this.showProperty()
                            : <React.Fragment>
                                <td >
                                    <small>loading...</small>
                                    
                                </td>
                                <br />
                               
                            </React.Fragment>
                    }
                </React.Fragment>
            </VisibilitySensor>
        );
    }
}

export default HomeItem;