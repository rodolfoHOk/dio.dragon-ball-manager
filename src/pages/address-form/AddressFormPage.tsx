import { useState } from 'react';
import { Input } from '../../components/input/Input';
import { Label } from '../../components/label/Label';

export function AddressFormPage() {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState({
    logradouro: '',
    bairro: '',
  });

  const fetchCep = async (cep: string) => {
    const cepResult = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const { logradouro, bairro } = await cepResult.json();
    setAddress({ logradouro, bairro });
  };

  const handleCepField = (value: string) => {
    if (value.length === 8) {
      fetchCep(value);
    }
    setCep(value);
  };

  return (
    <div className="flex flex-col gap-4 py-3">
      <h2 className="font-black text-2xl">Formulário de Endereços</h2>

      <form className="flex flex-row gap-4">
        <fieldset className="flex flex-col gap-2">
          <Label htmlFor="cep">CEP</Label>

          <Input
            id="cep"
            name="cep"
            placeholder="CEP"
            value={cep}
            onChange={({ target: { value } }) => handleCepField(value)}
          />
        </fieldset>

        <fieldset className="flex flex-col gap-2">
          <Label htmlFor="bairro">Bairro</Label>

          <Input
            id="bairro"
            name="bairro"
            placeholder="bairro"
            value={address.bairro}
            onChange={({ target: { value } }) =>
              setAddress({ ...address, bairro: value })
            }
          />
        </fieldset>

        <fieldset className="flex flex-col gap-2">
          <Label htmlFor="logradouro">Logradouro</Label>

          <Input
            id="logradouro"
            name="logradouro"
            placeholder="logradouro"
            value={address.logradouro}
            onChange={({ target: { value } }) =>
              setAddress({ ...address, logradouro: value })
            }
          />
        </fieldset>
      </form>
    </div>
  );
}
