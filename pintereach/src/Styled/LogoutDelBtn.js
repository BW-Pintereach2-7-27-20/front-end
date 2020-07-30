import styled from 'styled-components'; 

const LogoutDelBtn = styled.button`
	background: linear-gradient(to bottom, #E93F3F 5%, #CB0039 100%);
	cursor: pointer;
	color: white;
	font-family: 'Roboto Slab', serif;
    font-size: 14px;
    letter-spacing: 2px;
	font-weight: bold;
    text-decoration: none;
    height: 5vh;
    margin-right: .5%;
    
    &:hover {
        background: linear-gradient(to bottom, #CB0039 5%, #E93F3F 100%);
    }
	
`; 

export default LogoutDelBtn; 