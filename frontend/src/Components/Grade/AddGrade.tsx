import { useState } from 'react'
import { useMutation } from '@apollo/client'
import IconButton from '@mui/material/IconButton'
import AddCircle from '@mui/icons-material/AddCircle'
import { CREATE_GRADE_MUTATION } from 'Api/mutations'
import { GET_GRADES } from 'Api/queries'
import { EditFormGrade } from './EditFormGrade'

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
      <EditFormGrade
        dialogTitle="Add"
        gradeName={gradeName}
        isDialogOpen={open}
        submitButtonLabel="Add"
        onCloseDialog={handleClose}
        updateGrade={setGradeName}
        onKeyDownHandler={handleKeyDown}
        onSubmitForm={handleSubmit}
      />
    </>
  )
}
