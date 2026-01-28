import Input from "./Input";

const App = () => {
    return (
        <div className="flex flex-col gap-2">
            <Input placeholder="E-mail" type="email" required/>
            <Input placeholder="Senha" type="password" required/>
            <button type="submit" className="bg-red-700 hover:bg-red-800 text-white font-medium py-2 px-4 rounded-2xl mt-4 transition-colors ">
                Entrar
            </button>
        </div>
    )
}

export default App;