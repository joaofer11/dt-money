import { useSummary } from '../../hooks/useSummary'

import { priceFormatter } from '../../utils/formatter'

import * as I from 'phosphor-react'
import * as S from './styles'

export const Summary = () => {
  const summary = useSummary()

  return (
    <S.SummaryContainer>
      <S.SummaryCard>
        <span>Entradas</span>
        <I.ArrowCircleUp size={32} color="#00b37e" />
        <strong>{priceFormatter.format(summary.income)}</strong>
      </S.SummaryCard>

      <S.SummaryCard>
        <span>Saídas</span>
        <I.ArrowCircleDown size={32} color="#f75a68" />
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </S.SummaryCard>

      <S.SummaryCard bg="green">
        <span>Total</span>
        <I.CurrencyDollar size={32} color="#fff" />
        <strong>{priceFormatter.format(summary.total)}</strong>
      </S.SummaryCard>
    </S.SummaryContainer>
  )
}
