import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import * as I from 'phosphor-react'
import * as S from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type TSearchFormSchema = z.infer<typeof searchFormSchema>

export const SearchForm = () => {
  const fetchTransactions = useContextSelector(TransactionsContext, ({
  	fetchTransactions
  }) => fetchTransactions)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<TSearchFormSchema>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearchTransactions = async (data: TSearchFormSchema) => {
    await fetchTransactions(data.query)
  }

  return (
    <S.SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <I.MagnifyingGlass size={20} />
        Buscar
      </button>
    </S.SearchFormContainer>
  )
}
