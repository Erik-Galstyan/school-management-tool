import { useState } from 'react'
import { useMutation } from '@apollo/client'
import IconButton from '@mui/material/IconButton'
import AddCircle from '@mui/icons-material/AddCircle'
import { CREATE_PUPIL_MUTATION } from 'Api/mutations'
import { GET_PUPILS } from 'Api/queries'
import { EditFormPupil } from './EditFormPupil'

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

  const handleKeyDown = (e: React.KeyboardEvent) => {    
    if (e.code === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <>
      <IconButton color="primary" onClick={handleClickOpen}>
        <AddCircle fontSize="medium" />
      </IconButton>
      <EditFormPupil
        dialogTitle="Add"
        pupilName={pupilName}
        isDialogOpen={open}
        submitButtonLabel="Add"
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
