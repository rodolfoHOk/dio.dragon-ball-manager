import { act } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AddressFormPage } from './AddressFormPage';

const assetsFetchMock = () =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: async () => ({
      cep: '01001000',
      bairro: 'Sé',
      logradouro: 'Praça da Sé',
    }),
  } as Response);

describe('test address form page', () => {
  let fetchMock: jest.MockInstance<Promise<Response>, any> | undefined;

  beforeEach(() => {
    fetchMock = jest.spyOn(global, 'fetch').mockImplementation(assetsFetchMock);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render address form', async () => {
    const { container } = render(<AddressFormPage />);

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
    expect(container).toMatchSnapshot();
  });
});
