import EditIcon from '@mui/icons-material/Edit'
import IconButton from '@mui/material/IconButton'
import { EditFormTeacher } from './EditFormTeacher'
import { FC, useState } from 'react'
import { TeacherItem } from 'Types/teacher'
import { useMutation } from '@apollo/client'
import { UPDATE_TEACHER_MUTATION } from 'Api/mutations'
import { GET_TEACHERS } from 'Api/queries'

interface EditTEacherProps {
  teacher: TeacherItem
}

export const EditTeacher: FC<EditTEacherProps> = (props) => {
  const { teacher: teacherInitValue } = props

  const [open, setOpen] = useState(false)
  const [teacher, setTeacher] = useState(teacherInitValue)
  const [updateTeacher] = useMutation(UPDATE_TEACHER_MUTATION, {
      refetchQueries: [{ query: GET_TEACHERS }],
    })

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = async () => {
    try {
        await updateTeacher({
            variables: {
                id: teacher.id,
                name: teacher.name
            }
        })
        handleClose()
    } catch (error) {
        console.log(error);
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
      <EditFormTeacher
        isDialogOpen={open}
        teacher={teacher}
        dialogTitle="Edit"
        submitButtonLabel="Update"
        updateTeacher={setTeacher}
        onCloseDialog={handleClose}
        onSubmitForm={handleSubmit}
        onKeyDownHandler={handleKeyDown}
      />
    </>
  )
}
