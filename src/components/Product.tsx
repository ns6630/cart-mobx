import AddIcon from "./icons/AddIcon";
import RemoveIcon from "./icons/RemoveIcon";
import styled from "styled-components";
import IconButton from "./IconButton";
import ProductCounter from "./ProductCounter";
import {ProductType} from "../state/cart/types";
import {useContext} from "react";
import {AppStateContext} from "../index";
import {observer} from "mobx-react-lite";

export interface ProductProps {
  name: ProductType;
}

function Product({name}: ProductProps) {
  const appState = useContext(AppStateContext);
  const cart = appState?.cart;
  const count = cart?.products[name] || 0;


  return (
    <StyledProduct>
      <ProductName>{name}</ProductName>
      <ProductActions>
        <IconButton onClick={() => cart?.addProduct(name)}>
          <AddIcon/>
        </IconButton>
        <ProductCounter>{count}</ProductCounter>
        <IconButton onClick={() => cart?.removeProduct(name)}>
          <RemoveIcon/>
        </IconButton>
      </ProductActions>
    </StyledProduct>
  )
}

const StyledProduct = styled.div``;

const ProductName = styled.div`
  background: #a4d166;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 20px;
  margin-bottom: 20px;
`;

const ProductActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    margin-right: 20px;
  }

  & > *:last-child {
    margin-right: 0;
  }
`;

export default observer(Product);