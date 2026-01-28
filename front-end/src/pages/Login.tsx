import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // evita o comportamento padrão do form de recarregar a página
    console.log(email);
    console.log(password);
  }

  return (
    <form
      className="flex h-screen items-center justify-center"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <Link to="/">
          <img src="./logo.png" alt="Logo" className="mb-2 h-25 w-auto" />
        </Link>

        {/* onChange dispara quando o valor do input muda (a cada digitação).
        O React fornece o evento (e), onde:
        e.target -> input que disparou o evento
        e.target.value -> valor digitado pelo usuário */}
        <Input
          placeholder="E-mail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Login" theme="primary" type="submit" />

        <Link to="/register" className="w-full">
          <Button title="Cadastro" theme="secondary" />
        </Link>
      </div>
    </form>
  );
};

export default Login;
