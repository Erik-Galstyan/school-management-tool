import { FC, useState } from 'react'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import { useTeachers } from 'Hooks/useTeachers'

interface SelectTeacherProps {
  onSelect: (id: number) => void
}

export const SelectTeacher: FC<SelectTeacherProps> = (props) => {
  const { onSelect } = props
  const { teachers } = useTeachers()
  const [value, setValue] = useState('')

  const handleChange = (event: any) => {
    const value = event?.target?.value
    setValue(value)
    onSelect(+value)
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="teacher-select-label">Teacher</InputLabel>
      <Select
        label="Teacher"
        onChange={handleChange}
        fullWidth
        labelId="teacher-select-label"
        value={value}
      >
        {teachers.map((teacher) => {
          return <MenuItem value={teacher.id}>{teacher.name}</MenuItem>
        })}
      </Select>
    </FormControl>
  )
}
