import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <span>Gerenciador de Esferas do Dragão</span>

      <Link to="/">Gerenciador</Link>

      <Link to="/address-form">Formulário de Endereços</Link>
    </header>
  );
}
