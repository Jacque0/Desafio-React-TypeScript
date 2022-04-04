import styled from 'styled-components';
import pokeball from '../../assets/pokeball.gif';


export const MainContainerLoading = styled.div`
display: flex;
width: 100%;
height: 80vh;
justify-content: center;
align-items: center;
background-image: url(${pokeball});
background-position-y: center;
background-position-x: center;
background-repeat: no-repeat;
`