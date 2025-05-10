import { FC } from 'react'
import Box from '@mui/material/Box'
import { TeachersSection } from '../Teacher/TeachersSection'
import { PupilsSection } from '../Pupil/PupilsSection'
import { SubjectsSection } from '../Subject/SubjectsSection'
import { GradesSection } from 'Components/Grade/GradesSection'

export const Dashboard: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 4,
        marginTop: 4,
      }}
    >
      <TeachersSection />
      <PupilsSection />
      <SubjectsSection />
      <GradesSection />
    </Box>
  )
}
