import EditIcon from '@mui/icons-material/Edit'
import IconButton from '@mui/material/IconButton'
import { EditFormGrade } from './EditFormGrade'
import { FC, useState } from 'react'
import { GradeItem } from 'Types/grade'
import { useMutation } from '@apollo/client'
import { UPDATE_GRADE_MUTATION } from 'Api/mutations'
import { GET_GRADES } from 'Api/queries'

interface EditTEacherProps {
  grade: GradeItem
}

export const EditGrade: FC<EditTEacherProps> = (props) => {
  const { grade: gradeInitValue } = props

  const [open, setOpen] = useState(false)
  const [grade] = useState(gradeInitValue)
  const [gradeName, setGradeName] = useState(grade.name)

  const [updateGrade] = useMutation(UPDATE_GRADE_MUTATION, {
    refetchQueries: [{ query: GET_GRADES }],
  })

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = async () => {
    try {
      await updateGrade({
        variables: {
          id: grade.id,
          name: gradeName,
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
      <EditFormGrade
        dialogTitle="Update"
        gradeName={gradeName}
        isDialogOpen={open}
        submitButtonLabel="Update"
        onCloseDialog={handleClose}
        updateGrade={setGradeName}
        onKeyDownHandler={handleKeyDown}
        onSubmitForm={handleSubmit}
      />
    </>
  )
}
