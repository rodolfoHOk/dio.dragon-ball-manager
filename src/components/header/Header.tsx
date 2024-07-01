import { Link } from 'react-router-dom';
import logo from '../../assets/images/db-logo.png';
import { ToggleButton } from '../toggle-button/ToggleButton';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

export function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="w-full px-4 py-2 flex flex-row justify-between items-center bg-orange-600">
      <div className="w-64 h-10">
        <img src={logo} alt="dragon ball" />
      </div>

      <div className="flex gap-4 items-center">
        <Link
          to="/"
          className="text-lg font-semibold text-yellow-300 hover:text-yellow-100 transition-colors duration-200"
        >
          Gerenciador
        </Link>

        <Link
          to="/cep"
          className="text-lg font-semibold text-yellow-300 hover:text-yellow-100 transition-colors duration-200"
        >
          Formulário de Endereços
        </Link>

        <ToggleButton isChecked={theme === 'dark'} onToggle={toggleTheme} />
      </div>
    </header>
  );
}
