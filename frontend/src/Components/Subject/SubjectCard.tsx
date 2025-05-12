import { FC } from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { SubjectItem } from 'Types/subject'
import { useMutation } from '@apollo/client'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Box from '@mui/material/Box'
import { DELETE_SUBJECT_MUTATION } from 'Api/mutations'
import { GET_SUBJECTS } from 'Api/queries'
import { EditSubject } from './EditSubject'

interface SubjectCardProps {
  subject: SubjectItem
}

export const SubjectCard: FC<SubjectCardProps> = (props) => {
  const { subject } = props
  const [deleteSubject] = useMutation(DELETE_SUBJECT_MUTATION, {
    refetchQueries: [{ query: GET_SUBJECTS }],
  })

  const handleDelete = async (id: number) => {
    console.log({ id })
    await deleteSubject({
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
            <Typography variant="body1">{subject.id} </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={1}>
            <Typography variant="body1" fontWeight={600}>
              Name:
            </Typography>
            <Typography variant="body1">{subject.name} </Typography>
          </Stack>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, p: 0 }}>
          <EditSubject subject={subject} />
          <IconButton onClick={() => handleDelete(subject.id)}>
            <DeleteIcon fontSize="small"/>
          </IconButton>
        </Box>
      </Box>
    </Card>
  )
}
