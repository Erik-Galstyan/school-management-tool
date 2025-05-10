import { FC } from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { SubjectItem } from 'Types/subject'

interface PupilCardProps {
  pupil: SubjectItem
}

export const PupilCard: FC<PupilCardProps> = (props) => {
  const { pupil } = props

  return (
    <Card
      elevation={2}
      sx={{
        width: '100%',
        marginX: 2,
        paddingX: 2,
        paddingY: 1,
        marginY: 1,
      }}
    >
      <Stack direction="row" alignItems="center" gap={1}>
        <Typography variant="body1" fontWeight={600}>
          Id:
        </Typography>
        <Typography variant="body1">{pupil.id} </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" gap={1}>
        <Typography variant="body1" fontWeight={600}>
          Name:
        </Typography>
        <Typography variant="body1">{pupil.name} </Typography>
      </Stack>
    </Card>
  )
}