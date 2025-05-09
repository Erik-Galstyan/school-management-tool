import { mergeTypeDefs } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'
import { makeExecutableSchema } from '@graphql-tools/schema'
import teacherResolver from './resolvers/teacherResolver'
import subjectResolver from './resolvers/subjectResolver'
import gradeResolver from './resolvers/gradeResolver'
import pupilResolver from './resolvers/pupilResolver'
import path from 'path'
import userResolver from './resolvers/userResolver'

// Load all .graphql schema files
const typesArray = loadFilesSync(path.join(__dirname, './schemas'))

// Merge all type definitions
const typeDefs = mergeTypeDefs(typesArray)

// Combine all resolvers
const resolvers = {
  Query: {
    ...teacherResolver.Query,
    ...subjectResolver.Query,
    ...gradeResolver.Query,
    ...pupilResolver.Query,
    ...userResolver.Query,
  },
  Mutation: {
    ...teacherResolver.Mutation,
    ...subjectResolver.Mutation,
    ...gradeResolver.Mutation,
    ...pupilResolver.Mutation,
    ...userResolver.Mutation,
  },
  Teacher: teacherResolver.Teacher,
  Subject: subjectResolver.Subject,
  Grade: gradeResolver.Grade,
}

// Create the executable schema
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
