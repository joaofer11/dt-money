import { useState, useEffect, createContext, ReactNode } from 'react'

interface ITransaction {
	id: number;
	description: string;
	type: 'income' | 'outcome';
	category: string;
	price: number;
	createdAt: string;
}

interface ITransactionsContext {
	transactions: ITransaction[];
}

interface ITransactionsProviderProps {
	children: ReactNode;
}

const TransactionsContext = createContext({} as ITransactionsContext

export const TransactionsProvider = ({ children }: ITransactionsProviderProps) => {
	const [transactions, setTransactions] = useState<ITransaction[]>([])
	
	const getTransactionsData = async () => {
		const response = await fetch('http://localhost:3333/transactions')
		const responseBody = await response.json()
		
		setTransactions(responseBody)
	}
	
	useEffect(() => {
		getTransactionsData()
	}, [])
	
	return (
		<TransactionsContext.Provider
			value={{
				transactions,
			}}
		>
		</TransactionsContext.Provider>
	)
}