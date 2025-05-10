import { FC, useState } from 'react'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import { useGrades } from 'Hooks/useGrades'

interface SelectGradeProps {
  onSelect: (id: number) => void
}

export const SelectGrade: FC<SelectGradeProps> = (props) => {
  const { onSelect } = props
  const { grades } = useGrades()
  const [value, setValue] = useState('')

  const handleChange = (event: any) => {
    const value = event?.target?.value
    setValue(value)
    onSelect(+value)
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="grade-select-label">Grade</InputLabel>
      <Select
        label="Grade"
        onChange={handleChange}
        fullWidth
        labelId="grade-select-label"
        value={value}
      >
        {grades.map((grade) => {
          return <MenuItem value={grade.id}>{grade.name}</MenuItem>
        })}
      </Select>
    </FormControl>
  )
}