import styled from "styled-components";

const Button = styled.button`
  background: #eeeeee;
  padding: 0 1em;
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  border-radius: 20px;
  outline: none;
  border: 1px solid #888888;
  box-shadow: 0 0 3px 0px rgba(0, 0, 0, .6);
  cursor: pointer;

  & > img {
    width: 20px;
    height: 20px;
  }

  :hover {
    box-shadow: 0 0 3px 0px rgba(0, 0, 0, .3);
  }
  
  :active {
    box-shadow: none;
  }
`;

export default Button;