import IgniteLogoSVG from '../../assets/IgniteLogo.svg'
import * as S from './styles'

export const Header = () => {
    return (
    <S.HeaderContainer>
        <S.HeaderContent>
            <img src={IgniteLogoSVG} alt=""/>
            <S.NewTransactionButton>Nova Transação</S.NewTransactionButton>
        </S.HeaderContent>
    </S.HeaderContainer>
    )
}
