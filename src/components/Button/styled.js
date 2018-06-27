import styled from 'styled-components'

export const StyledButton = styled.button`
  display: inline-block;
  margin: 25px 0;
  padding: 10px;
  width: 100%;
  -webkit-user-select: none;
  border: 0;
  background-image: none;
  background: #17D499;
  cursor: pointer;
  font-size: 18px;
  font-weight: normal;
  color: #fff;
  line-height: 1.5;
  text-align: center;
  transition: all .2s linear;
  white-space: nowrap;

  span {
    color: #fff;
    text-decoration: none;
  }

  &:focus {
    background: #17D499;
    color: #fff;

    span {
      color: #fff;
    }
  }

  &:hover:not([disabled]) {
    color: #fff;
    background-color: #17D499;
    transition: all .2s linear;

    span {
      color: #FFF;
      text-decoration: none;
    }
  }

  &:disabled {
    color: #efefef;
    background: #ccc;
    cursor: not-allowed;
  }
`
