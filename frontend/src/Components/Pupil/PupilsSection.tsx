import { FC } from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { usePupils } from 'Hooks/usePupils'
import { PupilCard } from './PupilCard'
import { AddPupil } from './AddPupil'

export const PupilsSection: FC = () => {
  const { pupils } = usePupils()

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
          Pupils
        </Typography>
        <AddPupil />
      </Box>

      {pupils.map((pupil) => {
        return <PupilCard key={pupil.id} pupil={pupil} />
      })}
    </Stack>
  )
}
