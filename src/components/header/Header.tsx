import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="w-full px-4 py-2 flex flex-row justify-between items-center bg-zinc-900">
      <span className="font-bold text-2xl text-orange-500">
        Gerenciador de Esferas do Dragão
      </span>

      <div className="flex gap-4">
        <Link
          to="/"
          className="text-lg font-semibold text-yellow-600 hover:text-yellow-400 transition-colors duration-200"
        >
          Gerenciador
        </Link>

        <Link
          to="/cep"
          className="text-lg font-semibold text-yellow-600 hover:text-yellow-400 transition-colors duration-200"
        >
          Formulário de Endereços
        </Link>
      </div>
    </header>
  );
}
