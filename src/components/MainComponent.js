import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishdetailComponent";
import Comments from "../components/CommentsComponent";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Navbar dark color="primary">
            <NavbarBrand href="/">Ristorenate Con Fusion</NavbarBrand>
          </Navbar>
          <Menu
            dishes={this.state.dishes}
            onClick={dishId => this.onDishSelect(dishId)}
          />
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <DishDetail
                selectedDish={
                  this.state.dishes.filter(
                    dish => dish.id === this.state.selectedDish
                  )[0]
                }
              />
            </div>
            <div className="col-12 col-md-5 m-1">
              <Comments
                comments={
                  this.state.dishes.filter(
                    dish => dish.id === this.state.selectedDish
                  )[0]
                }
              >
                {" "}
              </Comments>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
