import styled from 'styled-components'

export const CountDownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme.colors.gray100};
  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme.colors.gray700};
    padding: 2rem 1rem;
    border-radius: 0.5rem;
  }
`

export const Divisor = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme.colors.green500};);
  width: 4rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`
