import * as React from 'react';
import { Component } from 'react';
import data from "../data/data.json";
import Product from '../model/product';
import HomeItem from "./components/homeItem";
interface HomePageProps {

}

interface HomePageState {
    products: Array<Product>
    states: Array<string>
    categories: Array<string>

}

class HomePage extends React.Component<HomePageProps, HomePageState> {

    constructor(props: HomePageProps) {
        super(props);
        this.state = { products: [], states: [], categories: [], };
    }

    subCategory: Map<string, Array<string>> = new Map();

    componentDidMount() {

        for (let index = 0; index < data.length; index++) {
            const element = data[index];

            //states
            const stateItem = this.state.states.filter((e) => e == element.state)[0];
            if (stateItem == null) {
                let st = this.state.states;
                st.push(element.state);
                st.sort();
                this.setState({
                    states: [...st]
                })

            }

            // categories
            const categoryitem = this.state.categories.filter((e) => e == element.category)[0];
            if (categoryitem == null) {
                let st = this.state.categories;
                st.push(element.category);
                this.setState({
                    categories: [...st]
                })

            }

            // sub category 
            /**check if the map contains the key */
            if (this.subCategory.has(element.category)) {
                const subCategores = this.subCategory.get(element.category)
                const subCategoryItem = subCategores!.filter((e) => e == element.subCategory)[0];
                if (subCategoryItem == null) {
                    this.subCategory.set(element.category, [...subCategores!, element.subCategory])
                }
            } else {

                this.subCategory.set(element.category, [element.subCategory])
            }
        }

    }



    render() {
        return (
            <React.Fragment>


                <table className="table table-bordered">
                    <thead>

                        <tr>
                            <th colSpan={2}>Products </th>
                            <th colSpan={this.state.states.length}>states </th>
                        </tr>
                        <tr>
                            <th>Catgory </th>
                            <th>Sub- Catgory </th>
                            {
                                this.state.states.map((statesItem, index) => {

                                    return <th key={index}> {statesItem}</th>

                                })
                            }

                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.state.categories.map((categoryItem, index) => {

                                return <React.Fragment> <tr key={index}>
                                    <th> {categoryItem}

                                    </th>



                                    <th>

                                        {this.subCategory.get(categoryItem)?.map((subCategoryItem, index2) => {
                                            return <React.Fragment>
                                                <td key={index2 + "2"}> {subCategoryItem}</td>
                                                <br />
                                            </React.Fragment>

                                        })
                                        }
                                    </th>



                                    {
                                        data.map((dataItem, index3) => {

                                            return <th key={index3}>

                                                {/* {statesItem} */}
                                                {this.subCategory.get(categoryItem)?.map((subCategoryItem, index4) => {
                                                   
                                                    return <HomeItem state={dataItem.state}  subCategory={subCategoryItem} category={categoryItem}/>

                                                })
                                                }

                                            </th>

                                        })
                                    }




                                </tr>
                                    <tr> {categoryItem} Total</tr>
                                </React.Fragment>

                            })


                        }


                       

                       

                    </tbody>
                </table>


            </React.Fragment>
        );
    }
}

export default HomePage;