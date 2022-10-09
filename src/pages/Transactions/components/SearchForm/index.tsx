import * as I from 'phosphor-react'
import * as S from './styles'

export const SearchForm = () => {
	return (
		<S.SearchFormContainer>
			<input type="text" placeholder="Busque por transações" />
			
			<button>
				<I.MagnifyingGlass size={20} />
				Buscar
				
			</button>
		</S.SearchFormContainer>
	)
}