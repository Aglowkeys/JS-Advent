import styled from 'styled-components';

export const StyledInput = styled.input`
appearance: none;
background-color:grey;
border-radius: 5px;
height:10px;
width:300px;
margin-bottom: 45px;
&::-webkit-slider-thumb{
    background-color: red;
    transform: scale(1.5);
}
`