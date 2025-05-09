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
import { CREATE_SUBJECT_MUTATION } from 'Api/mutations'
import { GET_SUBJECTS } from 'Api/queries'
import { SelectTeacher } from 'Components/Teacher/SelectTeacher'
import { Stack } from '@mui/material'

export const AddSubject = () => {
  const [open, setOpen] = useState(false)
  const [subjectName, setSubjectName] = useState('')
  const [teacherId, setTeacherId] = useState<number | undefined>()
  const [createSubject] = useMutation(CREATE_SUBJECT_MUTATION, {
    refetchQueries: [{ query: GET_SUBJECTS }],
  })

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = async () => {
    try {
      await createSubject({
        variables: {
          name: subjectName,
          teacherId,
        },
      })
      setSubjectName('')
      setTeacherId(undefined)
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
        <DialogTitle>Add Subject</DialogTitle>
        <DialogContent>
          <Stack gap={4}>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              type="text"
              fullWidth
              value={subjectName}
              onChange={(e) => setSubjectName(e.target.value)}
            />
            <SelectTeacher onSelect={(id) => setTeacherId(id)} />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            color="primary"
            disabled={!subjectName || !teacherId}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
