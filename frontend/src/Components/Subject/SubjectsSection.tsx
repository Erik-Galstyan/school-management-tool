import { FC } from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useSubjects } from 'Hooks/useSubjects'
import { AddSubject } from './AddSubject'
import { SubjectCard } from './SubjectCard'

export const SubjectsSection: FC = () => {
  const { subjects } = useSubjects()

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
          Subjects
        </Typography>
        <AddSubject />
      </Box>
      {subjects.map((subject) => {
        return <SubjectCard key={subject.id} subject={subject} />
      })}
    </Stack>
  )
}
