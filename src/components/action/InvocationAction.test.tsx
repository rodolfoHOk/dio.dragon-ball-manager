import * as Toast from '@radix-ui/react-toast';
import { render, screen, fireEvent } from '@testing-library/react';
import { InvocationAction } from './InvocationAction';
import { BallService } from '../../services/ball-service';

describe('invocation action component test', () => {
  it('should render invocation action', () => {
    const { container } = render(
      <Toast.Provider>
        <div>
          <InvocationAction profileId={1} />
          <Toast.Viewport />
        </div>
      </Toast.Provider>
    );

    expect(screen.getByText('Invocar Shenlong')).toBeInTheDocument();
    expect(screen.getByText('Invocar')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should show toast if user do not have all balls', () => {
    render(
      <Toast.Provider>
        <div>
          <InvocationAction profileId={1} />
          <Toast.Viewport />
        </div>
      </Toast.Provider>
    );

    const button = screen.getByText('Invocar');
    fireEvent.click(button);
    expect(
      screen.getByText('Você não tem todas as esferas para invocar o Shenlong')
    ).toBeInTheDocument();
    expect(screen.queryByAltText('Shenlong apareceu')).toBeNull();

    const backButton = screen.getByText('Voltar');
    fireEvent.click(backButton);
    expect(
      screen.queryByText(
        'Você não tem todas as esferas para invocar o Shenlong'
      )
    ).toBeNull();
    expect(screen.queryByAltText('Shenlong apareceu')).toBeNull();
  });

  it('should show shenlong if user has all balls', () => {
    render(
      <Toast.Provider>
        <div>
          <InvocationAction profileId={1} />
          <Toast.Viewport />
        </div>
      </Toast.Provider>
    );

    jest.spyOn(BallService, 'hasAllBalls').mockImplementation(() => true);

    const button = screen.getByText('Invocar');
    fireEvent.click(button);
    expect(screen.getByAltText('Shenlong apareceu')).toBeInTheDocument();
    expect(
      screen.queryByText(
        'Você não tem todas as esferas para invocar o Shenlong'
      )
    ).toBeNull();
  });
});
