"use client";

import { useEffect, useState } from "react";
import { CreateServerModal } from "../modals/create-server-modal";

export const ModalProvider = () => {
  const [isMounted, serIsMounted] = useState(false);

  useEffect(() => {
    serIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <CreateServerModal />
    </>
  );
};
