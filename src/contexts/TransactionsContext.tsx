import { useState, useEffect, createContext, ReactNode } from 'react'
import { api } from '../lib/axios'

interface ITransaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

type TTransactionCreationInput = Omit<ITransaction, 'createdAt' | 'id'>

interface ITransactionsContext {
  transactions: ITransaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createNewTransaction: (data: TTransactionCreationInput) => Promise<void>
}

interface ITransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as ITransactionsContext)

export const TransactionsProvider = ({
  children,
}: ITransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  const fetchTransactions = async (query?: string) => {
    const response = await api.get('/transactions', {
      params: {
        q: query,
      },
    })

    setTransactions(response.data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  const createNewTransaction = async (data: TTransactionCreationInput) => {
    const { description, price, type, category } = data

    const response = await api.post('/transactions', {
      description,
      price,
      type,
      category,
      createdAt: new Date(),
    })

    setTransactions((state) => [response.data, ...state])
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createNewTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
