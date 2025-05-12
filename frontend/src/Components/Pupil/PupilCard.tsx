import { FC } from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { SubjectItem } from 'Types/subject'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { useMutation } from '@apollo/client'
import { DELETE_PUPIL_MUTATION } from 'Api/mutations'
import { GET_PUPILS } from 'Api/queries'
import { EditPupil } from './EditPupil'

interface PupilCardProps {
  pupil: SubjectItem
}

export const PupilCard: FC<PupilCardProps> = (props) => {
  const { pupil } = props

  const [deletePupil] = useMutation(DELETE_PUPIL_MUTATION, {
    refetchQueries: [{ query: GET_PUPILS }],
  })

  const handleDelete = async (id: number) => {
    await deletePupil({
      variables: {
        id,
      },
    })
  }

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
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
        <Box>
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
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, p: 0 }}>
          <EditPupil pupil={pupil} />
          <IconButton sx={{ p: 0 }} onClick={() => handleDelete(pupil.id)}>
            <DeleteIcon fontSize="small" sx={{}} />
          </IconButton>
        </Box>
      </Box>
    </Card>
  )
}
