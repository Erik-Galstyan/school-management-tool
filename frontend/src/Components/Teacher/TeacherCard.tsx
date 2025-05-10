import { FC } from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { TeacherItem } from 'Types/teacher'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { useMutation } from '@apollo/client'
import { DELETE_TEACHER_MUTATION } from 'Api/mutations'
import { GET_TEACHERS } from 'Api/queries'

interface TeacherCardProps {
  teacher: TeacherItem
}

export const TeacherCard: FC<TeacherCardProps> = (props) => {
  const { teacher } = props
  const [deleteTeacher] = useMutation(DELETE_TEACHER_MUTATION, {
    refetchQueries: [{ query: GET_TEACHERS }],
  })

  const handleDelete = async (id: number) => {
    console.log({ id })
    await deleteTeacher({
      variables: {
        id,
      },
    })
  }

  return (
    <Card
      elevation={2}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        position: 'relative',
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
            <Typography variant="body1">{teacher.id} </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={1}>
            <Typography variant="body1" fontWeight={600}>
              Name:
            </Typography>
            <Typography variant="body1">{teacher.name} </Typography>
          </Stack>
        </Box>

        <IconButton sx={{ p: 0 }} onClick={() => handleDelete(teacher.id)}>
          <DeleteIcon fontSize="small" sx={{}} />
        </IconButton>
      </Box>
    </Card>
  )
}
