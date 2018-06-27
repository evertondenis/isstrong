import styled from 'styled-components'

export const Field = styled.p`
  margin: 8px 0;
  display: flex;
  align-items: center;

  .icon,
  .isDisabled,
  .isInvalid,
  .isValid {
    margin-right: 8px;
    font-size: 0.75em;
    transition: all .2s linear;
  }

  .isDisabled {
    color: #eaeaf4;
  }

  .isInvalid {
    font-size: 0.75em;
    color: #f79682;
  }

  .isValid {
    font-size: 0.75em;
    color: #1fe6a8;
  }
`
