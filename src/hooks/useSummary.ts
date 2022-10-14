import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

export const useSummary = () => {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      return transaction.type === 'income'
        ? {
            ...acc,
            income: acc.income + transaction.price,
            total: acc.total + transaction.price,
          }
        : {
            ...acc,
            outcome: acc.outcome + transaction.price,
            total: acc.total - transaction.price,
          }
    },
    { income: 0, outcome: 0, total: 0 },
  )

  return summary
}
