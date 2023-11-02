const prisma = require("../prisma");
const seed = async () => {
  for (let i = 1; i <= 20; i++) {
    await prisma.author.create({
      data: {
        name: `Author ${i}`,
        books: {
          create: [
            { title: `Book ${i}-1` },
            { title: `Book ${i}-2` },
            { title: `Book ${i}-3` },
          ],
        },
      },
    });
  }
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
