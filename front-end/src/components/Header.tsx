import { Link } from "react-router";

const Header = () => {
  return (
      <div className="flex items-center justify-center">
        <header className="flex w-full items-center justify-between px-3 py-4 md:w-220 md:px-0">
          <img
            src="/logo.png"
            className="h-20 w-auto"
            alt="Logo da Pizzaria Bella Napoli"
          />

          <Link to="/login">
            <button className="cursor-pointer rounded-2xl bg-red-700 px-7 py-1 text-lg font-medium text-white transition-colors hover:bg-red-800">
              Entrar
            </button>
          </Link>
        </header>
      </div>
  );
};

export default Header;
