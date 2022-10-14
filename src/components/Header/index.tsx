import * as Dialog from '@radix-ui/react-dialog'

import IgniteLogoSVG from '../../assets/IgniteLogo.svg'
import { NewTransactionModal } from '../NewTransactionModal'
import * as S from './styles'

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={IgniteLogoSVG} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <S.NewTransactionButton>Nova Transação</S.NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
