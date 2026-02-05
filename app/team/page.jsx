import { getPageData } from "@/lib/pageData";

import OurLeaders from "@/Compoents/Team/OurLeaders";
import OurTeamHero from "@/Compoents/Team/OurTeamHero";
import OurVisionaries from "@/Compoents/Team/OurVisionaries";
import Team from "@/Compoents/Team/Team";

export default async function TeamPage() {
  const pageData = await getPageData("team");

  if (!pageData) return null;

  const content = pageData.content;

  return (
    <>
      <OurTeamHero data={content.teamHero} />
      <OurLeaders data={content.leaders} />
      <OurVisionaries data={content.visionaries} />
      <Team data={content.teamDev} />
      <Team data={content.teamSales} />
    </>
  );
}
