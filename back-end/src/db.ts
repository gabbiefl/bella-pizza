import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg"; //
import { PrismaClient } from "../generated/prisma/client.js";
import { log } from "console";

// url de conexão com o banco de dados, definida no arquivo .env
const connectionString = `${process.env.DATABASE_URL}`;

// cria uma instância do adaptador PrismaPg, passando a string de conexão como parâmetro
const adapter = new PrismaPg({ connectionString });

// cria uma instância do PrismaClient, passando o adaptador como parâmetro
const prisma = new PrismaClient({ adapter });

// forma antiga de utilizar o prisma client: const prisma = new PrismaClient();

export { prisma };

// função assincrona para conectar ao banco de dados e exibir uma mensagem de sucesso
// uma função assincorna é uma função que retorna uma Promise, e pode ser utilizada com a palavra-chave "await" para esperar a resolução da Promise antes de continuar a execução do código
// uma promise é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona, e seu valor resultante. nesse caso, seria o console.log("Conectado com o BD") que só será executado após a conexão com o banco de dados ser estabelecida com sucesso.
export async function connection() {
  // o try serve para tentar executar o código dentro dele, e caso ocorra algum erro, o catch irá capturar esse erro e executar o código dentro dele. nesse caso, se ocorrer algum erro ao tentar conectar com o banco de dados, o catch irá capturar esse erro e exibir no console.
  try {
    await prisma.$connect();
    console.log("Conectado com o BD");
  } catch (error) {
    console.log(error);
  }
}
