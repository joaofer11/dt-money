import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/TransactionsContext'

export const useSummary = () => {
  const transactions = useContextSelector(TransactionsContext, ({ 
  	transactions 
  }) => transactions)

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
