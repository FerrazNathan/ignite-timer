import styled from 'styled-components'

export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme.colors.gray100};
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      & :hover {
        border-bottom: 3px solid ${(props) => props.theme.colors.green500};
      }
    }

    .active {
      color: ${(props) => props.theme.colors.green500};
    }
  }
`
