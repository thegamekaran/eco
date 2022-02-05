import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import {mobile} from "../responsive";

const Container = styled.div`
  height: 100px;
  color: black;
  ${mobile({height:"50px"})}   
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({padding:"10px 0px"})}   

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

  ${mobile({display:"none"})}   

`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;

  ${mobile({width:"50px"})}   

`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 50px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 17px;
  cursor: pointer;
  margin-left: 25px;
  font-weight:500;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language></Language>
          <SearchContainer>
            <Input />
            <Search style={{color:"gray", fontSize:20}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>HBIC.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge color="primary" badgeContent={99}>
              <ShoppingCartOutlined/>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
