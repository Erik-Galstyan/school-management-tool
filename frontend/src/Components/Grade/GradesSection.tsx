import { FC } from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { AddGrade } from './AddGrade'
import { useGrades } from 'Hooks/useGrades'
import { GradeCard } from './GradeCard'

export const GradesSection: FC = () => {
  const { grades } = useGrades()

  return (
    <Stack
      spacing={1}
      alignItems="center"
      direction="column"
      sx={{ width: '100%' }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" fontWeight={500}>
          Grades
        </Typography>
        <AddGrade />
      </Box>
      {grades.map((grade) => {
        return <GradeCard key={grade.id} grade={grade} />
      })}
    </Stack>
  )
}
