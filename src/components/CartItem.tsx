import {AppState} from "../state";
import styled from "styled-components";
import AddIcon from "./icons/AddIcon";
import IconButton from "./IconButton";
import RemoveIcon from "./icons/RemoveIcon";
import ProductCounter from "./ProductCounter";
import ClearIcon from "./icons/ClearIcon";
import {ProductType} from "../state/cart/types";
import {useContext} from "react";
import {AppStateContext} from "../index";
import {observer} from "mobx-react-lite";

export interface CartItemProps {
  name: ProductType;
}

function CartItem({name}: CartItemProps) {
  const appState = useContext(AppStateContext);
  const cart = appState?.cart;
  const count = cart?.products[name] || 0;

  return (
    <StyledCartItem>
      <CartItemName>
        {name}
      </CartItemName>
      <CartItemActions>
        <IconButton onClick={() => cart?.addProduct(name)}><AddIcon/></IconButton>
        <ProductCounter>{count}</ProductCounter>
        <IconButton onClick={() => cart?.removeProduct(name)}><RemoveIcon/></IconButton>
        <IconButton onClick={() => cart?.deleteProduct(name)}><ClearIcon/></IconButton>
      </CartItemActions>
    </StyledCartItem>
)
}

const StyledCartItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 40px;
  line-height: 40px;
  margin-bottom: 10px;
`;

const CartItemName = styled.div`
  margin-right: 10px;
`;

const CartItemActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export default observer(CartItem);