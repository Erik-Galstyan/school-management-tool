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
import { CREATE_GRADE_MUTATION } from 'Api/mutations'
import { GET_GRADES } from 'Api/queries'

export const AddGrade = () => {
  const [open, setOpen] = useState(false)
  const [gradeName, setGradeName] = useState('')
  const [createGrade] = useMutation(CREATE_GRADE_MUTATION, {
    refetchQueries: [{ query: GET_GRADES }],
  })

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = async () => {
    try {
      await createGrade({
        variables: {
          name: gradeName,
        },
      })
      setGradeName('')
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
        <DialogTitle>Add Grade</DialogTitle>
        <DialogContent>
          <Stack gap={4}>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              type="text"
              fullWidth
              value={gradeName}
              onChange={(e) => setGradeName(e.target.value)}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" disabled={!gradeName}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
