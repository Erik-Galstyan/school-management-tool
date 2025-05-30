import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const createAdminUser = async () => {
  const adminEmail = process.env.FIRST_ADMIN_EMAIL!
  const adminPassword = process.env.FIRST_ADMIN_PASSWORD!

  // Check if the admin user already exists
  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  })

  if (!existingAdmin) {
    // Hash the admin password
    const passwordHash = await bcrypt.hash(adminPassword, 10)

    // Create the admin user
    await prisma.user.create({
      data: {
        email: adminEmail,
        passwordHash,
        role: 'admin',
      },
    })

    console.log(`Admin user created: ${adminEmail}`)
  } else {
    console.log('Admin user already exists')
  }
}
