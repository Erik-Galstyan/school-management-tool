import { FC } from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { GradeItem } from 'Types/grade'
import { DELETE_GRADE_MUTATION } from 'Api/mutations'
import { GET_GRADES } from 'Api/queries'
import { useMutation } from '@apollo/client'
import  IconButton  from '@mui/material/IconButton'
import  Box  from '@mui/material/Box'
import DeleteIcon from '@mui/icons-material/Delete'



interface GradeCardProps {
  grade: GradeItem
}

export const GradeCard: FC<GradeCardProps> = (props) => {
  const { grade } = props
  const [deleteGrade] = useMutation(DELETE_GRADE_MUTATION, {
    refetchQueries: [{ query: GET_GRADES }],
  })

  const handleDelete = async (id: number) => {
    console.log({ id })
    await deleteGrade({
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
            <Typography variant="body1">{grade.id} </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={1}>
            <Typography variant="body1" fontWeight={600}>
              Name:
            </Typography>
            <Typography variant="body1">{grade.name} </Typography>
          </Stack>
        </Box>
        <IconButton sx={{ p: 0 }} onClick={() => handleDelete(grade.id)}>
          <DeleteIcon fontSize="small" sx={{}} />
        </IconButton>
      </Box>
    </Card>
  )
}
