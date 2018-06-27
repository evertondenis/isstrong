import styled from 'styled-components'

export const ContainerValidation = styled.div`
  display: block;
  width: 100%;
  font-size: 16px;
  color: #696d8c;

  .pwd,
  .confirm-pwd {
    margin: 10px 0;
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

  .isEmpty {
    border: 1px solid #b6b9d0;
  }

  .isWeak {
    border: 1px solid #f79682;
  }

  .isMedium {
    border: 1px solid #f7bc1c;
  }

  .isStrong {
    border: 1px solid #1fe6a8;
  }
`

export const StyledStages = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  margin-bottom: 16px;

  .stage {
    border-radius: 5px;
    height: 8px;
    text-indent: -1000em;
    background-color: #eaeaf4;
    transition: all .2s linear;
  }

  .progress {
    width: 0;
    border-radius: 5px;
    height: 8px;
    background-color: #eaeaf4;
    opacity: 0;
    transition: all .2s linear;
  }

  &.isEmpty {
    border: 0;
  }

  &.isWeak {
    border: 0;
    .stage:first-child {
      .progress {
        width: 100%;
        opacity: 1;
        background-color: #f79682;
      }
    }
  }

  &.isMedium {
    border: 0;
    .stage:not(:last-child) {
      .progress {
        width: 100%;
        opacity: 1;
        background-color: #f7bc1c;
      }
    }
  }

  &.isStrong {
    border: 0;
    .stage {
      .progress {
        width: 100%;
        opacity: 1;
        background-color: #1fe6a8;
      }
    }
  }
`

export const StyledConfirm = styled.div`
  margin-top: 25px;

  .is-invalid {
    border-color: #f79682;
  }
`