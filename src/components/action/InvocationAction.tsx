import { useState } from 'react';
import * as Toast from '@radix-ui/react-toast';
import * as Separator from '@radix-ui/react-separator';
import { motion } from 'framer-motion';
import { Button } from '../button/Button';
import { BallServiceFactory } from '../../services/factories/ball-service-factory';

type InvocationActionProps = {
  profileId: number;
};

export function InvocationAction({ profileId }: InvocationActionProps) {
  const [showToast, setShowToast] = useState(false);
  const [showShenlong, setShowShenlong] = useState(false);

  function invocate() {
    const service = BallServiceFactory.getInstance();
    const hasAllBalls = service.hasAllBalls(profileId);
    if (!hasAllBalls) {
      setShowToast(true);
      return;
    }
    setShowShenlong(true);
    setTimeout(() => setShowShenlong(false), 6000);
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
            <img src="/images/shenlong.webp" alt="Shenlong apareceu" />
          </motion.div>
        </motion.div>
      )}

      <div className="p-6 flex flex-col items-center justify-center gap-4 bg-zinc-100 dark:bg-zinc-900">
        <h2 className="font-bold text-2xl">Invocar Shenlong</h2>

        <Button className="w-48" onClick={invocate}>
          Invocar
        </Button>
      </div>

      <Toast.Root
        open={showToast}
        onOpenChange={setShowToast}
        className="relative w-fit px-6 py-4 flex flex-col gap-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg"
      >
        <Toast.Title className="font-bold text-lg">Desculpe-nos</Toast.Title>

        <Toast.Description className="font-normal text-base">
          Você não tem todas as esferas para invocar o Shenlong
        </Toast.Description>

        <Separator.Root
          className="h-[1px] w-full mt-2 mb-1 bg-neutral-300 dark:bg-neutral-700"
          decorative
          orientation="horizontal"
        />

        <Toast.Action altText="voltar" className="flex justify-end">
          <Button>Voltar</Button>
        </Toast.Action>
      </Toast.Root>
    </>
  );
}
