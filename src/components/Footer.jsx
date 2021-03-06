import { Facebook, Instagram, Twitter, Pinterest,LocationOn, PhoneIphone,EmailOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container=styled.div`
display: flex;`

const Left=styled.div`
flex:1;
display: flex;
flex-direction:column;
padding: 20px;
`

const Logo = styled.h1`
align-items: center;
justify-content: center;
display: flex;`

const Desc = styled.p`
margin: 20px ;`

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;


const Center=styled.div`
flex:1;
padding: 20px;

`

const Title=styled.h3`
    margin-bottom: 30px;
`

const List=styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`

const Right=styled.div`
flex:1;
padding: 20px;
`

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>HBIC.</Logo>
                <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, distinctio repellendus eos, praesentium mollitia minima iusto quas eius itaque officia repellat. Impedit eaque modi sunt nisi cumque non magni error.</Desc>
            </Left>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
                </Center>            
            <Right>
                <Title>Contact</Title>
                <ContactItem> <LocationOn style={{marginRight:"10px"}}/>
                    Bestech Business Tower, Chandigarh
                </ContactItem>
                <ContactItem><PhoneIphone style={{marginRight:"10px"}}/>
                    +91 7018343317
                </ContactItem>
                <ContactItem><EmailOutlined style={{marginRight:"10px"}}/>
                    contact@hbic.karry
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />

            </Right>
        </Container>
    );
}

export default Footer;
