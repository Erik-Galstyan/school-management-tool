import { FC } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { SelectTeacher } from 'Components/Teacher/SelectTeacher'
import { Stack } from '@mui/material'


interface EditFormSubjectProps {
  dialogTitle: string
  subjectName: string
  isDialogOpen: boolean
  submitButtonLabel: string
  teacherId: number | undefined
  onCloseDialog: () => void
  updateSubject: (updatedSubject: any) => void
  updateTeacherId: (id: number | undefined) => void
  onKeyDownHandler: (e: React.KeyboardEvent) => void
  onSubmitForm: () => void
}

export const EditFormSubject: FC<EditFormSubjectProps> = (props) => {
  const {
    dialogTitle,
    subjectName,
    isDialogOpen,
    submitButtonLabel,
    teacherId,
    onCloseDialog,
    updateSubject,
    updateTeacherId,
    onKeyDownHandler,
    onSubmitForm,
  } = props

  return (
    <Dialog open={isDialogOpen} onClose={onCloseDialog} fullWidth>
      <DialogTitle>{dialogTitle} Subject</DialogTitle>
      <DialogContent>
        <Stack gap={4}>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={subjectName}
            onChange={(e) => updateSubject(e.target.value)}
            onKeyDown={onKeyDownHandler}
          />
          <SelectTeacher onSelect={(id) => {            
            updateTeacherId(id)
            
            }} />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseDialog} color="secondary">
          Cancel
        </Button>
        <Button
          onClick={onSubmitForm}
          color="primary"
          disabled={!subjectName|| !teacherId}
        >
          {submitButtonLabel}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
