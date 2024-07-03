import { act } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AddressFormPage } from './AddressFormPage';

describe('test address form page', () => {
  let fetchMock: jest.MockInstance<Promise<Response>, any> | undefined;

  beforeEach(() => {
    fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: async () => ({
          cep: '01001000',
          bairro: 'Sé',
          logradouro: 'Praça da Sé',
        }),
      } as Response)
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render address form', async () => {
    const { container } = render(<AddressFormPage />);

    expect(screen.getByText('Formulário de Endereços')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('CEP')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('bairro')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('logradouro')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should fetch of cep data and fill the form', async () => {
    render(<AddressFormPage />);

    const cepInput = screen.getByPlaceholderText('CEP');
    fireEvent.change(cepInput, { target: { value: '01001000' } });

    await act(() => fetchMock);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      'https://viacep.com.br/ws/01001000/json/'
    );
    expect(screen.getByPlaceholderText('bairro')).toHaveAttribute(
      'value',
      'Sé'
    );
    expect(screen.getByPlaceholderText('logradouro')).toHaveAttribute(
      'value',
      'Praça da Sé'
    );
  });
});
