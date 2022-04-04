import styled from "styled-components"

type Props = {
    bgColor: string
}

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 5px;
  align-items: center;
  overflow: hidden;
  width: 200px;
  height: fit-content;
  background-image: linear-gradient(
    160deg,
    ${(props: Props) => props.bgColor},
    ${(props: Props) => props.bgColor},
    white,
    white
  );
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 0px 2px 6px lightgray;
  p {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    margin-top: 5px;
    font-size: large;
    font-weight: 600;
  }
  img {
    height: 170px;
  }
  @media screen and (max-width: 452px) {
    width: 90%;
    img{
      height: 250px;
    }
  }
`

export const TypeContainer = styled.div`
  display: flex;
  .type{
    color: gray;
    font-size: 0.8em;
    margin: 5px;
    margin-bottom: 10px;
    border: 1px solid lightgray;
    padding: 3px;
    border-radius: 5px;
  }
`
