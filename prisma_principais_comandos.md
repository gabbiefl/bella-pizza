npx prisma init
-> Inicializa o Prisma no projeto. Cria a pasta prisma e o arquivo schema.prisma.

npx prisma migrate dev
-> Cria e executa as migrations no banco durante o desenvolvimento.

npx prisma generate
-> Gera o Prisma Client para acessar o banco no código.

npx prisma db push
-> Empurra o schema para o banco sem criar migrations.

npx prisma db pull
-> Puxa a estrutura do banco para o schema.prisma.

npx prisma studio
-> Abre uma interface visual para visualizar e editar dados.

npx prisma migrate reset
-> Reseta o banco e reaplica todas as migrations.