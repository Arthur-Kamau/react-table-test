import * as React from 'react';
import { Component } from 'react';
import data from "../../data/data.json";
import VisibilitySensor from "react-visibility-sensor"
import Product from "../../model/product";
interface TotalComponentsProps {
    subCategory: Map<string, Array<string>>
    category: string
    state: string
}

interface TotalComponentsState {
    isVisible: boolean,

}

class TotalComponents extends React.Component<TotalComponentsProps, TotalComponentsState> {
    constructor(props: TotalComponentsProps) {
        super(props);
        this.state = { isVisible: false };
    }
    onChange = (isVisibleI: boolean) => {
        this.setState({ isVisible: isVisibleI });
    };


    showProperty = () => {

        const sub = this.props.subCategory.get(this.props.category);
        var final: Array<number> = [];
        sub?.forEach(element => {
            let x = data.filter((e: Product) => {
                return e.state == this.props.state && e.category == this.props.category && e.subCategory == element//this.props.subCategory
            })[0]
            if (x != undefined) {
                final.push(x.sales)
            }
        });
       

        const arrSum = final.reduce((a, b) => a + b, 0)
        return <React.Fragment>

           
                <td >
                    {arrSum}
                </td>
               
           
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
                                    <small>loading</small>
                                </td>
                                <br />
                            </React.Fragment>
                    }
                </React.Fragment>
            </VisibilitySensor>
        );
    }
}

export default TotalComponents;