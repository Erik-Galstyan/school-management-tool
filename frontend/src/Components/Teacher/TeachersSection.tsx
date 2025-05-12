import { FC } from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { AddTeacher } from 'Components/Teacher/AddTeacher'
import { TeacherCard } from 'Components/Teacher/TeacherCard'
import { useTeachers } from 'Hooks/useTeachers'

export const TeachersSection: FC = () => {
  const { teachers } = useTeachers()

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
          Teachers
        </Typography>
        <AddTeacher />
      </Box>

      {teachers.map((teacher) => (
        <TeacherCard key={teacher.id} teacher={teacher} />
      ))}
    </Stack>
  )
}
