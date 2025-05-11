import { FC } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

interface Teacher {
  name: string
}

interface EditFormTeacherProps {
  dialogTitle: string
  teacher: Teacher
  isDialogOpen: boolean
  submitButtonLabel: string
  onCloseDialog: () => void
  updateTeacher: (updatedTeacher: any) => void
  onKeyDownHandler: (e: React.KeyboardEvent) => void
  onSubmitForm: () => void
}

export const EditFormTeacher: FC<EditFormTeacherProps> = (props) => {
  const {
    dialogTitle,
    teacher,
    isDialogOpen,
    submitButtonLabel,
    onCloseDialog,
    updateTeacher,
    onKeyDownHandler,
    onSubmitForm,
  } = props

  return (
    <Dialog open={isDialogOpen} onClose={onCloseDialog} fullWidth>
      <DialogTitle>{dialogTitle} Teacher</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          type="text"
          fullWidth
          value={teacher.name || ''}
          onChange={(e) => updateTeacher({ ...teacher, name: e.target.value })}
          onKeyDown={onKeyDownHandler}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseDialog} color="secondary">
          Cancel
        </Button>
        <Button onClick={onSubmitForm} color="primary" disabled={!teacher.name}>
          {submitButtonLabel}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
