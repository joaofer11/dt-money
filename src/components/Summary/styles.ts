import styled from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;

  margin-top: -5rem;
`
interface ISummaryCardProps {
  bg?: 'green'
}

export const SummaryCard = styled.div<ISummaryCardProps>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1rem;

  border-radius: 6px;
  padding: 2rem;
  background-color: ${(props) =>
    props.bg ? props.theme['green-700'] : props.theme['gray-600']};

  > span {
    color: ${(props) => props.theme['gray-300']};
  }

  > svg {
    justify-self: end;
  }

  > strong {
    font-size: 2rem;
  }
`
