import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;

  background-color: ${(props) => props.theme['gray-800']};

  > form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 2rem;

    > input {
      border: 0;
      border-radius: 6px;
      padding: 1rem;

      color: ${(props) => props.theme['gray-300']};
      background-color: ${(props) => props.theme['gray-900']};

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button[type='submit'] {
      height: 58px;

      margin-top: 1.5rem;
      border: 0;
      border-radius: 6px;
      padding: 0 1.25rem;

      cursor: pointer;
      font-weight: bold;

      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme['green-500']};

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background-color: ${(props) => props.theme['green-700']};
        transition: all 200ms;
      }
    }
  }
`
export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  border: 0;

  line-height: 0;
  cursor: pointer;

  color: ${(props) => props.theme['gray-500']};
  background-color: transparent;
`
export const TransactionType = styled(RadioGroup.Root)`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-top: 0.5rem;
`

interface ITransactionTypeItemProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeItem = styled(
  RadioGroup.Item,
)<ITransactionTypeItemProps>`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border: 0;
  border-radius: 6px;
  padding: 1rem;

  cursor: pointer;
  color: ${(props) => props.theme['gray-300']};
  background-color: ${(props) => props.theme['gray-700']};

  &[data-state='unchecked']:hover {
    background-color: ${(props) => props.theme['gray-600']};
    transition: all 200ms;
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background-color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};

    > svg {
      color: ${(props) => props.theme.white};
    }
  }

  > svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }
`
