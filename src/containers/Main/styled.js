import styled from 'styled-components'

export const StyledMain = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;

  .form__create-count {
    margin-top: 30px;
  }

  .loading{
    width: 50px;
  }

  .is-invalid {
    border-color: #f79682;
  }
`

export const StyledBox = styled.div`
  margin: auto;
  padding: 60px 70px 23px 70px;
  width: 515px;
  background: #fff;
  border: 3px solid #f2f2f2;
  box-sizing: border-box;

  h1 {
    font-size: 22px;
    color: #312f4f;
    text-align: center;
  }

  .box__msg {
    font-size: 1rem;
    color: #696d8c;
    text-align: center;
  }

  .box__img {
    margin: 10px;
  }
`
