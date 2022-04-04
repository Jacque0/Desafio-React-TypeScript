import styled from 'styled-components';

export const Bar = styled.div`
display:flex;
align-items:center;
box-shadow: 0 0.5px 0 0 gray;
width:100%;
height: 50px;
position: sticky;
top: 0;
z-index: 3;
background-color: blue;
color: yellow;
    .BackIcon{
        position: absolute;
        left: 16px;
        width: 30px;
        background-color: #eaea33df;
        cursor: pointer;
        padding: 5px;
        border: none;
        border-radius: 50%;
        img{
            width: 100%;
        }
    }
`

export const Title = styled.section`
display: flex;
align-items: center;
justify-content: center;
flex-grow: 1;
text-align: center;
font-size: larger;
font-weight: bolder;
font-family: 'Times New Roman', Times, serif;
`