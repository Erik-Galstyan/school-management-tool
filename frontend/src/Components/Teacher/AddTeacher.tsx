import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_TEACHER_MUTATION } from 'Api/mutations'
import { GET_TEACHERS } from 'Api/queries'
import IconButton from '@mui/material/IconButton'
import AddCircle from '@mui/icons-material/AddCircle'
import { EditFormTeacher } from './EditFormTeacher'

export const AddTeacher = () => {
  const [open, setOpen] = useState(false)
  const [teacher, setTeacher] = useState({ name: '' })
  const [createTeacher] = useMutation(CREATE_TEACHER_MUTATION, {
    refetchQueries: [{ query: GET_TEACHERS }],
  })

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') {
      handleSubmit()
    }
  }

  const handleSubmit = async () => {
    try {
      await createTeacher({
        variables: {
          name: teacher.name,
        },
      })
      setTeacher({ ...teacher, name: '' })
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
      <EditFormTeacher
        isDialogOpen={open}
        teacher={teacher}
        dialogTitle="Add"
        submitButtonLabel="Add"
        updateTeacher={setTeacher}
        onCloseDialog={handleClose}
        onSubmitForm={handleSubmit}
        onKeyDownHandler={handleKeyDown}
      />
    </>
  )
}
