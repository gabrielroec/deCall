"use client";

import { Plus } from "lucide-react";
import { ActionTooltip } from "./action-tooltip";
import { UserButton } from "@clerk/nextjs";

export const NavigationAction = () => {
  return (
    <div>
      <UserButton />
      <ActionTooltip side="right" align="center" label="Adicione um servidor">
        <button className="group flex items-center">
          <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500">
            <Plus
              className="group-hover:text-white transition text-emerald-500"
              size={25}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
};
