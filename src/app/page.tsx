/* eslint-disable no-console */
"use client";

import React from "react";

import "react-toastify/dist/ReactToastify.css";

import { useEffect } from "react";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";

import { InfoHeaderSkeleton } from "@/components/Skeletons/InfoHeaderSkeleton";

export default function HomePage() {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
  const desiredChainId = 1440002;

  useEffect(() => {
    if (chain?.id !== desiredChainId && switchNetwork) {
      switchNetwork(desiredChainId);
    }
  }, [chain, desiredChainId]);

  return (
    <main>
      <section>
        <div className="layout relative flex min-h-screen flex-col items-center justify-start gap-20 text-center">
          {address ? address : <InfoHeaderSkeleton />}
          <div className="text-3xl">Please connect your wallet</div>
        </div>
      </section>
    </main>
  );
}
