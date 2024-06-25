import { Server, Member, Profile } from "@prisma/client";

export type ServerWithMembersWithProfiles = Server & {
  member: (Member & { profile: Profile })[];
};
