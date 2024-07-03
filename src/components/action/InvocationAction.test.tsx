import { render, screen, fireEvent } from '@testing-library/react';
import { InvocationAction } from './InvocationAction';
import { ToastProvider, ToastViewport } from '@radix-ui/react-toast';
import { BallService } from '../../services/ball-service';

describe('invocation action component test', () => {
  it('should render invocation action', () => {
    const { container } = render(
      <ToastProvider>
        <div>
          <InvocationAction profileId={1} />
          <ToastViewport />
        </div>
      </ToastProvider>
    );

    expect(screen.getByText('Invocar Shenlong')).toBeInTheDocument();
    expect(screen.getByText('Invocar')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should show toast if user do not have all balls', () => {
    render(
      <ToastProvider>
        <div>
          <InvocationAction profileId={1} />
          <ToastViewport />
        </div>
      </ToastProvider>
    );

    const button = screen.getByText('Invocar');
    fireEvent.click(button);
    expect(
      screen.getByText('Você não tem todas as esferas para invocar o Shenlong')
    ).toBeInTheDocument();

    const backButton = screen.getByText('Voltar');
    fireEvent.click(backButton);
    expect(
      screen.queryByText(
        'Você não tem todas as esferas para invocar o Shenlong'
      )
    ).toBeNull();
  });

  it('should show shenlong', () => {
    render(
      <ToastProvider>
        <div>
          <InvocationAction profileId={1} />
          <ToastViewport />
        </div>
      </ToastProvider>
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
