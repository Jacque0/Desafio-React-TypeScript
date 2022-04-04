import styled from "styled-components";

type Props = {
    bgColor1: string,
    bgColor2: string
}

export const PokeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-image: linear-gradient(
    160deg,
    ${(props: Props) => props.bgColor1},
    ${(props: Props) =>
      props.bgColor2 === "white" ? props.bgColor1 : props.bgColor2},
    white
  );
  border: 1px solid lightgray;
  max-width: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 10px lightgray;
  overflow: hidden;
  img {
    height: 300px;
    position: relative;
  }
`
export const FooterDetails = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    list-style-position: inside;
    p{
        display: flex;
        flex-direction: column;
    }
`