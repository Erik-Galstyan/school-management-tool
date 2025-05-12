import { useState } from 'react'
import { useMutation } from '@apollo/client'
import IconButton from '@mui/material/IconButton'
import AddCircle from '@mui/icons-material/AddCircle'
import { CREATE_SUBJECT_MUTATION } from 'Api/mutations'
import { GET_SUBJECTS } from 'Api/queries'
import { EditFormSubject } from './EditFormSubject'

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
      <EditFormSubject
        dialogTitle="Add"
        subjectName={subjectName}
        isDialogOpen={open}
        submitButtonLabel="Add"
        teacherId={teacherId}
        onCloseDialog={handleClose}
        updateSubject={setSubjectName}
        updateTeacherId={setTeacherId}
        onKeyDownHandler={handleKeyDown}
        onSubmitForm={handleSubmit}
      />
    </>
  )
}
