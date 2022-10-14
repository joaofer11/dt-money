import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border: 0;
    border-radius: 6px;
    padding: 1rem;

    color: ${(props) => props.theme['gray-300']};
    background-color: ${(props) => props.theme['gray-900']};

    &:placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 1px solid ${(props) => props.theme['green-300']};
    border-radius: 6px;
    padding: 1rem;

    cursor: pointer;
    font-weight: bold;

    color: ${(props) => props.theme['green-300']};
    background-color: transparent;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      border-color: ${(props) => props.theme['green-300']};

      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme['green-500']};

      transition: all 200ms;
    }
  }
`
