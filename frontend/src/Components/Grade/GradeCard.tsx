import { FC } from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { GradeItem } from 'Types/grade'

interface GradeCardProps {
  grade: GradeItem
}

export const GradeCard: FC<GradeCardProps> = (props) => {
  const { grade } = props

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
        <Typography variant="body1">{grade.id} </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" gap={1}>
        <Typography variant="body1" fontWeight={600}>
          Name:
        </Typography>
        <Typography variant="body1">{grade.name} </Typography>
      </Stack>
    </Card>
  )
}