"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useModal } from "@/hooks/use-modal-store";
import { ServerWithMembersWithProfiles } from "@/types";

export const MembersModal = () => {
  const { onOpen, isOpen, onClose, type, data } = useModal();

  const isModelOpen = isOpen && type == "members";
  const { server } = data as { server: ServerWithMembersWithProfiles };

  return (
    <>
      <Dialog open={isModelOpen} onOpenChange={onClose}>
        <DialogContent className="bg-white text-black p-0 overflow-hidden">
          <DialogHeader className="pt-8 px-6 flex items-center">
            <DialogTitle className="text-2xl text-center font-bold">
              Manage members
            </DialogTitle>{" "}
            <DialogDescription className="text-center text-zinc-500">
              {server?.member?.length} Members
            </DialogDescription>
          </DialogHeader>

          <div className="p-6">Hello, Members</div>
        </DialogContent>
      </Dialog>
    </>
  );
};
