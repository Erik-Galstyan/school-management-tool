import { FC } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack  from '@mui/material/Stack'


interface EditFormTeacherProps {
  dialogTitle: string
  gradeName: string
  isDialogOpen: boolean
  submitButtonLabel: string
  onCloseDialog: () => void
  updateGrade: (updatedTeacher: any) => void
  onKeyDownHandler: (e: React.KeyboardEvent) => void
  onSubmitForm: () => void
}

export const EditFormGrade: FC<EditFormTeacherProps> = (props) => {
  const {
    dialogTitle,
    gradeName,
    isDialogOpen,
    submitButtonLabel,
    onCloseDialog,
    updateGrade,
    onKeyDownHandler,
    onSubmitForm,
  } = props

  return (
      <Dialog open={isDialogOpen} onClose={onCloseDialog} fullWidth>
        <DialogTitle>{dialogTitle} Grade</DialogTitle>
        <DialogContent>
          <Stack gap={4}>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              type="text"
              fullWidth
              value={gradeName}
              onChange={(e) =>  updateGrade(e.target.value)}
              onKeyDown={onKeyDownHandler}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={onSubmitForm} color="primary" disabled={!gradeName}>
            {submitButtonLabel}
          </Button>
        </DialogActions>
      </Dialog>
  )
}
