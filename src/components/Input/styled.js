import styled from 'styled-components'

export const StyledGroup = styled.div`
  label {
    color: #696d8c;
  }

  input {
    margin: 10px 0 25px;
    padding: 10px;
    width: 100%;
    background: #fff;
    border: 1px solid #b6b9d0;
    box-sizing: border-box;
    box-shadow: inset 0px 3px 3px rgba(0, 0, 0, 0.05);
    font-size: 1rem;
    color: #696d8c;
    outline: none;
    transition: all .2s linear;

    &:focus {
      outline: none;
    }
  }
`

export const StyledInput = styled.input`
  margin: 10px 0 25px;
  padding: 10px;
  width: 100%;
  background: #fff;
  border: 1px solid #b6b9d0;
  box-sizing: border-box;
  box-shadow: inset 0px 3px 3px rgba(0, 0, 0, 0.05);
  font-size: 1rem;
  color: #696d8c;
  outline: none;
  transition: all .2s linear;

  &:focus {
    outline: none;
  }
`
