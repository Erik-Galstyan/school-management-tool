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
  mutation createSubject($name: String!, $teacherId: ID!) {
    createSubject(name: $name, teacherId: $teacherId) {
      id
      name
      teacherId
    }
  }
`

export const CREATE_PUPIL_MUTATION = gql`
  mutation createPupil($name: String!, $gradeId: ID!) {
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
