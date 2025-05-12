import EditIcon from '@mui/icons-material/Edit'
import IconButton from '@mui/material/IconButton'
import { EditFormSubject } from './EditFormSubject'
import { FC, useState } from 'react'
import { SubjectItem } from 'Types/subject'
import { useMutation } from '@apollo/client'
import { UPDATE_SUBJECT_MUTATION } from 'Api/mutations'
import { GET_SUBJECTS } from 'Api/queries'

interface EditSubjectProps {
  subject: SubjectItem
}

export const EditSubject: FC<EditSubjectProps> = (props) => {
  const { subject: subjectInitValue } = props

  const [open, setOpen] = useState(false)
  const [subject] = useState(subjectInitValue)
  const [subjectName, setSubjectName] = useState(subject.name)
  const [teacherId, setTeacherId] = useState<number | undefined>()
  const [updateSubject] = useMutation(UPDATE_SUBJECT_MUTATION, {
    refetchQueries: [{ query: GET_SUBJECTS }],
  })

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = async () => {
    try {
      await updateSubject({
        variables: {
          id: subject.id,
          name: subjectName,
          teacherId: teacherId,
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
      <EditFormSubject
        dialogTitle="Update"
        subjectName={subjectName}
        isDialogOpen={open}
        submitButtonLabel="Update"
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
