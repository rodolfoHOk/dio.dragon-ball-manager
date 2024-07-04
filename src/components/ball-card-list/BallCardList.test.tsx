import * as Toast from '@radix-ui/react-toast';
import { fireEvent, render, screen } from '@testing-library/react';
import { BallCardList } from './BallCardList';
import { BallService } from '../../services/ball-service';

describe('ball card list component test', () => {
  it('should render ball card list', () => {
    const { container } = render(
      <BallCardList profileId={1} allBalls={BallService.getBalls()} />
    );

    expect(screen.getByTestId('filter-trigger')).toBeInTheDocument();
    expect(screen.getAllByTestId('card').length).toBe(7);
    const foundBadges = screen.getAllByText('Encontrada');
    const notFoundBadges = screen.getAllByText('Não encontrada');
    expect(foundBadges.length + notFoundBadges.length).toBe(7);
    expect(container).toMatchSnapshot();
  });

  it('should filter my balls', () => {
    const { container } = render(
      <BallCardList profileId={1} allBalls={BallService.getBalls()} />
    );

    const filterSelect = container.querySelector('select');
    if (filterSelect) {
      fireEvent.change(filterSelect, {
        target: { value: 'me' },
      });
    }

    expect(screen.getAllByTestId('card').length).toBe(5);
  });

  it('should filter not founded balls', () => {
    const { container } = render(
      <BallCardList profileId={1} allBalls={BallService.getBalls()} />
    );

    const filterSelect = container.querySelector('select');
    if (filterSelect) {
      fireEvent.change(filterSelect, {
        target: { value: 'not-me' },
      });
    }

    expect(screen.getAllByTestId('card').length).toBe(2);
  });

  it('should not filter when all is selected', () => {
    const { container } = render(
      <BallCardList profileId={1} allBalls={BallService.getBalls()} />
    );

    const filterSelect = container.querySelector('select');
    if (filterSelect) {
      fireEvent.change(filterSelect, {
        target: { value: 'all' },
      });
    }

    expect(screen.getAllByTestId('card').length).toBe(7);
  });

  it('should open validate ball modal', async () => {
    render(<BallCardList profileId={1} allBalls={BallService.getBalls()} />);

    const iFoundButton = screen.getByTestId('card-button-3');
    expect(iFoundButton).toBeInTheDocument();
    fireEvent.click(iFoundButton);

    const backButton = screen.getByText('Voltar');
    expect(backButton).toBeInTheDocument();
    fireEvent.click(backButton);
  });

  it('should show toast if enter with invalid code', async () => {
    render(
      <Toast.Provider>
        <div>
          <BallCardList profileId={1} allBalls={BallService.getBalls()} />
          <Toast.Viewport />
        </div>
      </Toast.Provider>
    );

    const iFoundButton = screen.getByTestId('card-button-3');
    expect(iFoundButton).toBeInTheDocument();
    fireEvent.click(iFoundButton);

    const validateButton = screen.getByTestId('validate-button-3');
    expect(validateButton).toBeInTheDocument();
    fireEvent.click(validateButton);

    expect(
      screen.getByText('Código da esfera do dragão não confere')
    ).toBeInTheDocument();

    const backButton = screen.getByText('Voltar');
    expect(backButton).toBeInTheDocument();
    fireEvent.click(backButton);

    expect(
      screen.queryByText('Código da esfera do dragão não confere')
    ).toBeNull();
  });

  it('should validate ball code', async () => {
    render(
      <Toast.Provider>
        <div>
          <BallCardList profileId={1} allBalls={BallService.getBalls()} />
          <Toast.Viewport />
        </div>
      </Toast.Provider>
    );

    let notFoundBadges = screen.getAllByText('Não encontrada');
    expect(notFoundBadges.length).toBe(2);
    let foundBadges = screen.getAllByText('Encontrada');
    expect(foundBadges.length).toBe(5);

    const iFoundButton = screen.getByTestId('card-button-3');
    expect(iFoundButton).toBeInTheDocument();
    fireEvent.click(iFoundButton);

    const codeInput = screen.getByTestId('ball-code-input');
    fireEvent.change(codeInput, { target: { value: 'esfera-3-valida' } });

    const validateButton = screen.getByTestId('validate-button-3');
    expect(validateButton).toBeInTheDocument();
    fireEvent.click(validateButton);

    expect(
      screen.queryByText('Código da esfera do dragão não confere')
    ).toBeNull();
    notFoundBadges = screen.getAllByText('Não encontrada');
    expect(notFoundBadges.length).toBe(1);
    foundBadges = screen.getAllByText('Encontrada');
    expect(foundBadges.length).toBe(6);
  });
});
