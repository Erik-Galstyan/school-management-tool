import { gql } from '@apollo/client'

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
        role
      }
    }
  }
`

export const CREATE_TEACHER_MUTATION = gql`
  mutation CreateTeacher($name: String!) {
    createTeacher(name: $name) {
      id
      name
    }
  }
`

export const CREATE_SUBJECT_MUTATION = gql`
  mutation createSubject($name: String!, $teacherId: Int!) {
    createSubject(name: $name, teacherId: $teacherId) {
      id
      name
      teacherId
    }
  }
`

export const CREATE_PUPIL_MUTATION = gql`
  mutation createPupil($name: String!, $gradeId: Int!) {
    createPupil(name: $name, gradeId: $gradeId) {
      id
      name
      gradeId
    }
  }
`

export const CREATE_GRADE_MUTATION = gql`
  mutation createGrade($name: String!) {
    createGrade(name: $name) {
      id
      name
    }
  }
`

export const DELETE_TEACHER_MUTATION = gql`
  mutation deleteTeacher($id: Int!) {
    deleteTeacher(id: $id) 
  }
`

export const DELETE_PUPIL_MUTATION = gql`
  mutation deletePupil($id: Int!) {
    deletePupil(id: $id)
  }
`

export const DELETE_SUBJECT_MUTATION = gql`
  mutation deleteSubject($id: Int!) {
    deleteSubject(id: $id)
  }
`

export const DELETE_GRADE_MUTATION = gql`
  mutation deleteGrade($id: Int!) {
    deleteGrade(id: $id)
  }
`

export const UPDATE_TEACHER_MUTATION = gql`
  mutation updateTeacher($id: Int!, $name: String!) {
    updateTeacher(id: $id, name: $name) {
      id
      name
    }
  }
`
export const UPDATE_PUPIL_MUTATION = gql`
  mutation updatePupil($id: Int!, $name: String!, $gradeId: Int!) {
    updatePupil(id: $id, name: $name, gradeId: $gradeId) {
      id
      name
      gradeId
    }
  }
`

export const UPDATE_SUBJECT_MUTATION = gql`
  mutation updateSubject($id: Int!, $name: String!, $teacherId: Int!) {
    updateSubject(id: $id, name: $name, teacherId: $teacherId) {
      id
      name
      teacherId
    }
  }
`

export const UPDATE_GRADE_MUTATION = gql`
  mutation updateGrade($id: Int!, $name: String!) {
    updateGrade(id: $id, name: $name) {
      id
      name
    }
  }
`