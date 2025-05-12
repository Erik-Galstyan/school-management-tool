import EditIcon from '@mui/icons-material/Edit'
import IconButton from '@mui/material/IconButton'
import { FC, useState } from 'react'
import { PupilItem } from 'Types/pupil'
import { useMutation } from '@apollo/client'
import { UPDATE_PUPIL_MUTATION } from 'Api/mutations'
import { GET_PUPILS } from 'Api/queries'
import { EditFormPupil } from './EditFormPupil'

interface EditPupilProps {
  pupil: PupilItem
}

export const EditPupil: FC<EditPupilProps> = (props) => {
  const { pupil: pupilInitValue } = props

  const [open, setOpen] = useState(false)
  const [pupil] = useState(pupilInitValue)
  const [pupilName, setPupilName] = useState(pupil.name)
  const [gradeId, setGradeId] = useState<number | undefined>()
  const [updatePupil] = useMutation(UPDATE_PUPIL_MUTATION, {
    refetchQueries: [{ query: GET_PUPILS }],
  })

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = async () => {
    try {
      await updatePupil({
        variables: {
          id: pupil.id,
          name: pupilName,
          gradeId: gradeId,
        },
      })
      handleClose()
    } catch (error) {
      console.log(error)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <EditIcon fontSize="small" />
      </IconButton>
      <EditFormPupil
        dialogTitle="Update"
        pupilName={pupilName}
        isDialogOpen={open}
        submitButtonLabel="Update"
        gradeId={gradeId}
        onCloseDialog={handleClose}
        updatePupil={setPupilName}
        updateGradeId={setGradeId}
        onKeyDownHandler={handleKeyDown}
        onSubmitForm={handleSubmit}
      />
    </>
  )
}
