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
import { ScrollArea } from "../ui/scroll-area";
import { UserAvatar } from "../user-avatar";
import { ShieldAlert, ShieldCheck } from "lucide-react";

const roleIconMap = {
  GUEST: null,
  MODERATOR: <ShieldCheck className="h-4 w-4 ml-2 text-indigo-500" />,
  ADMINISTRATOR: <ShieldAlert className="h-4 w-4 ml-2 text-rose-500" />,
};

export const MembersModal = () => {
  const { onOpen, isOpen, onClose, type, data } = useModal();

  const isModelOpen = isOpen && type == "members";
  const { server } = data as { server: ServerWithMembersWithProfiles };

  return (
    <>
      <Dialog open={isModelOpen} onOpenChange={onClose}>
        <DialogContent className="bg-white text-black overflow-hidden">
          <DialogHeader className="pt-8 px-6 flex items-center">
            <DialogTitle className="text-2xl text-center font-bold">
              Manage members
            </DialogTitle>{" "}
            <DialogDescription className="text-center text-zinc-500">
              {server?.member?.length} Members
            </DialogDescription>
          </DialogHeader>

          <ScrollArea className="mt-8 max-h-[420px] pr-6">
            {server?.member?.map((member) => (
              <div key={member.id} className="flex items-center gap-x-2 mb-6">
                <UserAvatar src={member.profile.imageUrl} />
                <div className="flex flex-col gap-y-1">
                  <div className="text-xs font-semibold flex items-center">
                    {member.profile.name}
                  </div>{" "}
                  <div className="text-xs font-semibold flex items-center">
                    {member.profile.email}
                  </div>
                </div>
              </div>
            ))}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};
