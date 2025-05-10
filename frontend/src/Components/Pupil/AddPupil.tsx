import { useState } from 'react'
import { useMutation } from '@apollo/client'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import AddCircle from '@mui/icons-material/AddCircle'
import { Stack } from '@mui/material'
import { CREATE_PUPIL_MUTATION } from 'Api/mutations'
import { GET_PUPILS } from 'Api/queries'
import { SelectGrade } from './SelectPupil'

export const AddPupil = () => {
  const [open, setOpen] = useState(false)
  const [pupilName, setPupilName] = useState('')
  const [gradeId, setGradeId] = useState<number | undefined>()
  const [createPupil] = useMutation(CREATE_PUPIL_MUTATION, {
    refetchQueries: [{ query: GET_PUPILS }],
  })

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = async () => {
    try {
      await createPupil({
        variables: {
          name: pupilName,
          gradeId,
        },
      })
      setPupilName('')
      setGradeId(undefined)
      handleClose()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <IconButton color="primary" onClick={handleClickOpen}>
        <AddCircle fontSize="medium" />
      </IconButton>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Add Pupil</DialogTitle>
        <DialogContent>
          <Stack gap={4}>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              type="text"
              fullWidth
              value={pupilName}
              onChange={(e) => setPupilName(e.target.value)}
            />
            <SelectGrade onSelect={(id) => setGradeId(id)} />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            color="primary"
            disabled={!pupilName || !gradeId}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}