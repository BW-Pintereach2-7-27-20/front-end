import styled from 'styled-components'; 

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 40%;
  padding: 5%;

  label {
    font-size: 1.8rem;
    margin: 1%;
    font-family: 'Roboto Slab', serif;
    font-weight: bold;
  }

  input {
    height: 3vh;
    background-color: coral;
    opacity: 70%;
    font-weight: bold;
    font-size: 1.4rem;
  }
`;

export default Form; 