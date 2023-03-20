// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function Seed() {
//   const users = await prisma.users.createMany({
//     data: [
//       {
//         full_name: 'John Doe',
//         email: 'test1@gmail.com',
//         password: '123456',
//       },
//     ],
//   });

//   console.log(users);
// }

// Seed()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
