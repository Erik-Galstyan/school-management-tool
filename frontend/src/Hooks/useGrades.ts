import { useQuery } from '@apollo/client'
import { GradeItem } from 'Types/grade'
import { GET_GRADES } from 'Api/queries'

export const useGrades = () => {
  const { loading, error, data } = useQuery(GET_GRADES)
  const grades = data?.getGrades ?? []

  return {
    loading,
    error,
    grades: grades as GradeItem[],
  }
}