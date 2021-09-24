import React, {useContext} from 'react';
import './App.css';
import styled from "styled-components";
import Products from "./components/Products";
import Product from "./components/Product";
import {ProductType} from "./state/cart/types";
import Button from "./components/Button";
import ClearIcon from "./components/icons/ClearIcon";
import {AppStateContext} from "./index";
import Cart from "./components/Cart";
import {observer} from "mobx-react-lite";

function App() {
  const appState = useContext(AppStateContext);

  return (
    <div className="App">
      <PageTitle>Grocery list</PageTitle>
      <Products>
        <Product name={ProductType.Cucumber}/>
        <Product name={ProductType.Potato}/>
        <Product name={ProductType.Pumpkin}/>
      </Products>

      <CartActions>
        <Button
          onClick={() => {appState?.cart.clearCart()}}
        >
          <ClearIcon/>
          Clear
        </Button>
      </CartActions>

      <Cart/>
    </div>
  );
}

const PageTitle = styled.h1`
  text-align: center;
`;

const CartActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default observer(App);
