import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './contexts/TransactionsContext'
import axios from 'axios'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'
import { Transactions } from './pages/Transactions'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}

axios.get('https://bsproxy.royaleapi.dev/v1/brawlers', {
	headers: {
		'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjYzYTcyNDBmLTAxY2MtNGZmMC04YmI0LTNlMmU3ZjY4ZWI3MiIsImlhdCI6MTY2NjcyNTAzOCwic3ViIjoiZGV2ZWxvcGVyLzRhMjg5MjI2LWY5NTItZGRmNy0yNjZhLWY5ZjI5YmJlNzUwNSIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNDUuNzkuMjE4Ljc5Il0sInR5cGUiOiJjbGllbnQifV19.f36hdC3tBO3kuZsS7dMposlsXL9xN8chnHP4Zly7x74FZaKwvCMeoFaWLXyYnKl32GE1Dq4H7JFVkPI_tT55nw',
		'Accept': 'application/json',
		'auth': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjYzYTcyNDBmLTAxY2MtNGZmMC04YmI0LTNlMmU3ZjY4ZWI3MiIsImlhdCI6MTY2NjcyNTAzOCwic3ViIjoiZGV2ZWxvcGVyLzRhMjg5MjI2LWY5NTItZGRmNy0yNjZhLWY5ZjI5YmJlNzUwNSIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNDUuNzkuMjE4Ljc5Il0sInR5cGUiOiJjbGllbnQifV19.f36hdC3tBO3kuZsS7dMposlsXL9xN8chnHP4Zly7x74FZaKwvCMeoFaWLXyYnKl32GE1Dq4H7JFVkPI_tT55nw',
	}
}).then(response => console.log(response.data))