import styled from 'styled-components'

const STATUS_COLORS = {
  inProgress: 'yellow500',
  completed: 'green500',
  canceled: 'red500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const ContainerHistory = styled.main`
  flex: 1;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.gray100};
  }
`

export const ListHistory = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background: ${(props) => props.theme.colors.gray600};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme.colors.gray100};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background: ${(props) => props.theme.colors.gray700};
      border-top: 4px solid ${(props) => props.theme.colors.gray800};
      font-size: 0.875rem;
      padding: 1rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

export const StatusDot = styled.span<StatusProps>`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${(props) =>
      props.theme.colors[STATUS_COLORS[props.statusColor]]};
  }
`
