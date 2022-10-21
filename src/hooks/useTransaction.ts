import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/TransactionsContext'

export const useTransaction = () => {
  return useContextSelector(TransactionsContext, (context) => {
    return context
  })
}
