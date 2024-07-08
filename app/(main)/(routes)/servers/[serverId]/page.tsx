import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";

const ServerIdPage = async () => {
  const profile = await initialProfile();
  const server = await db.server.findFirst({
    where: {
      member: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  return <div className="">{server!.name}</div>;
};
export default ServerIdPage;
