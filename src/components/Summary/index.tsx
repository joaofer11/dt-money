import * as I from 'phosphor-react'
import * as S from './styles'

export const Summary = () => {
	return (
		<S.SummaryContainer>
			<S.SummaryCard>
				<span>Entradas</span>
				<I.ArrowCircleUp size={32} color="#00b37e"/>
				<strong>R$ 17.400,00</strong>
			</S.SummaryCard>
			
			<S.SummaryCard>
				<span>Saídas</span>
				<I.ArrowCircleDown size={32} color="#f75a68"/>
				<strong>R$ 17.400,00</strong>
			</S.SummaryCard>
			
			<S.SummaryCard bg="green">
				<span>Total</span>
				<I.CurrencyDollar size={32} color="#fff"/>
				<strong>R$ 17.400,00</strong>
			</S.SummaryCard>
		</S.SummaryContainer>
	)
}