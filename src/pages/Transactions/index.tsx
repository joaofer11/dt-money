import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'

import { dateFormatter, priceFormatter } from '../../utils/formatter'

import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import * as S from './styles'

export const Transactions = () => {
  const { transactions } = useContext(TransactionsContext)

  return (
    <>
      <Header />
      <Summary />

      <S.TableWrapper>
        <SearchForm />
        <S.Table>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.description}</td>
                  <td>
                    <S.PriceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome'
                        ? `- ${priceFormatter.format(transaction.price)}`
                        : priceFormatter.format(transaction.price)}
                    </S.PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </S.Table>
      </S.TableWrapper>
    </>
  )
}
