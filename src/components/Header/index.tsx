import * as Dialog from '@radix-ui/react-dialog'

import IgniteLogoSVG from '../../assets/IgniteLogo.svg'
import * as S from './styles'

export const Header = () => {
    return (
    <S.HeaderContainer>
        <S.HeaderContent>
            <img src={IgniteLogoSVG} alt=""/>
            
            <Dialog.Root>
            	<Dialog.Trigger asChild>
            		<S.NewTransactionButton>
            			Nova Transação
            		</S.NewTransactionButton>
            	</Dialog.Trigger>
            	
					<Dialog.Portal>
            		<Dialog.Overlay />
            		
            		<Dialog.Content>
            			<Dialog.Title>
            				Nova transação
            			</Dialog.Title>
            			
            			<Dialog.Close />
            		</Dialog.Content>
            	</Dialog.Portal>
            </Dialog.Root>
        </S.HeaderContent>
    </S.HeaderContainer>
    )
}
