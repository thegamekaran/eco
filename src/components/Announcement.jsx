import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Announcement = () => {
    return (
        <Container>
            SALE IS HERE! YOU WON'T AFFORD TO MISS IT
        </Container>
    );
}

export default Announcement;
