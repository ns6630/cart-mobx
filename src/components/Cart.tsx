import {useContext, useMemo, useState} from "react";
import Button from "./Button";
import styled from "styled-components";
import CartIcon from "./icons/CartIcon";
import CloseIcon from "./icons/CloseIcon";
import CartItem from "./CartItem";
import IconButton from "./IconButton";
import {ProductType} from "../state/cart/types";
import {AppStateContext} from "../index";
import {observer} from "mobx-react-lite";

function Cart() {
  const appState = useContext(AppStateContext);
  const products = appState?.cart.products;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  console.log(products);
  return (
    <CartWrapper>
      <CartHeader>
        {!isOpen &&
        <Button onClick={() => setIsOpen(!isOpen)}><CartIcon/>{appState?.cart.count}</Button>
        }
        {isOpen &&
        <IconButton onClick={() => setIsOpen(!isOpen)}><CloseIcon/></IconButton>
        }
      </CartHeader>
      {isOpen &&
      <CartBody>
        {(() => {
          let cartItems = [];
          for (let product in products) {
            cartItems.push(<CartItem key={product} name={product as ProductType}/>);
          }
          return cartItems;
        })()}
      </CartBody>
      }
    </CartWrapper>
  );
}

const CartWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  min-width: 350px;
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CartBody = styled.div`
  background: white;
  position: relative;
  min-height: 300px;
  max-height: calc(100vh - 100px);
  border: 1px solid #666;
  border-radius: 20px;
  padding: 20px;
  margin-top: 20px;
  
  ::before {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
    right: 20px;
    top: -20px;
    border-top: 5px solid;
    border-right: 5px solid;
    border-bottom: 15px solid;
    border-left: 15px solid;
    border-color: transparent transparent #666 transparent;
  }
  
  ::after {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
    right: 20px;
    top: -19px;
    border-top: 5px solid;
    border-right: 5px solid;
    border-bottom: 15px solid;
    border-left: 15px solid;
    border-color: transparent transparent white transparent;
  }
`;

export default observer(Cart);

