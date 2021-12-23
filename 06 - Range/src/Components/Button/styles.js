import styled from 'styled-components';

export const StyledButton = styled.button`
background-color: #444;
padding: 25px 50px;
border-radius:50px;
border: none;
font-weight: bold;
font-size: 20px;
color: white;
letter-spacing: 2.5px;
transition: background-color 0.5s, color 0.5s;  
&:hover{
    color:#444;
    background-color: #ccc;
    cursor:pointer;
}
`
