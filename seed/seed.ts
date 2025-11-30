import { PrismaClient, Role, } from '@/generated/prisma/client'
import { faker } from '@faker-js/faker'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
  adapter,
})

async function main() {
  /* ------------------------------ Create a User ----------------------------- */
  // await prisma.user.createMany({
  //   data: Array.from({ length: 10 }).map(() => ({
  //     name: faker.person.fullName(),
  //     clientId: faker.string.uuid(),
  //     email: faker.internet.email(),
  //     image: faker.image.personPortrait(),
  //     mobile: faker.phone.number({ style: "international" }),
  //     country: faker.location.country(),
  //     state: faker.location.state(),
  //     city: faker.location.city(),
  //     role: faker.helpers.enumValue(Role),
  //   })), skipDuplicates: true
  // })
}

main()
  .then(() => console.log("Seeding complete"))
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })