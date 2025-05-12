import { FC } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Stack } from '@mui/material'
import { SelectGrade } from './SelectPupil'

interface EditFormPupilProps {
  dialogTitle: string
  pupilName: string
  isDialogOpen: boolean
  submitButtonLabel: string
  gradeId: number | undefined
  onCloseDialog: () => void
  updatePupil: (updatedPupil: any) => void
  updateGradeId: (id: number | undefined) => void
  onKeyDownHandler: (e: React.KeyboardEvent) => void
  onSubmitForm: () => void
}

export const EditFormPupil: FC<EditFormPupilProps> = (props) => {
  const {
    dialogTitle,
    pupilName,
    isDialogOpen,
    submitButtonLabel,
    gradeId,
    onCloseDialog,
    updatePupil,
    updateGradeId,
    onKeyDownHandler,
    onSubmitForm,
  } = props

  return (
    <Dialog open={isDialogOpen} onClose={onCloseDialog} fullWidth>
      <DialogTitle>{dialogTitle} Pupil</DialogTitle>
      <DialogContent onKeyDown={onKeyDownHandler}>
        <Stack gap={4}>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={pupilName}
            onChange={(e) => updatePupil(e.target.value)}
          />
          <SelectGrade
            onSelect={(id) => {
              updateGradeId(id)
            }}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseDialog} color="secondary">
          Cancel
        </Button>
        <Button
          onClick={onSubmitForm}
          color="primary"
          disabled={!pupilName || !gradeId}
        >
          {submitButtonLabel}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
