import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

export const useTransaction = () => {
  return useContext(TransactionsContext)
}
