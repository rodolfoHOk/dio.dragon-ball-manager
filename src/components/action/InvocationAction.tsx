import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../button/Button';
import { AppToast } from '../app-toast/AppToast';
import { BallService } from '../../services/ball-service';

type InvocationActionProps = {
  profileId: number;
};

export function InvocationAction({ profileId }: InvocationActionProps) {
  const [showToast, setShowToast] = useState(false);
  const [showShenlong, setShowShenlong] = useState(false);

  function invocate() {
    const hasAllBalls = BallService.hasAllBalls(profileId);
    if (!hasAllBalls) {
      setShowToast(true);
      return;
    }
    setShowShenlong(true);
    setTimeout(() => setShowShenlong(false), 6000);
  }

  function onShowToast(value: boolean) {
    setShowToast(value);
  }

  return (
    <>
      {showShenlong && (
        <motion.div
          className="absolute top-0 left-0 h-screen w-screen bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.97 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="h-[80vh] mt-[10vh] flex items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, duration: 2 }}
          >
            <img
              data-testid="shenlong-image"
              src="/images/shenlong.webp"
              alt="Shenlong apareceu"
            />
          </motion.div>
        </motion.div>
      )}

      <div
        data-testid="invocation-card"
        className="p-6 flex flex-col items-center justify-center gap-4 bg-zinc-100 dark:bg-zinc-900"
      >
        <h2 className="font-bold text-2xl">Invocar Shenlong</h2>

        <Button data-testid="invoke-button" className="w-48" onClick={invocate}>
          Invocar
        </Button>
      </div>

      <AppToast
        message="Você não tem todas as esferas para invocar o Shenlong"
        showToast={showToast}
        setShowToast={onShowToast}
      />
    </>
  );
}
