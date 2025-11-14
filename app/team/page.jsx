import ourTeamData from "@/Compoents/Team/ourTeamData.json"

import OurLeaders from "@/Compoents/Team/OurLeaders";
import OurTeamHero from "@/Compoents/Team/OurTeamHero";
import OurVisionaries from "@/Compoents/Team/OurVisionaries";
import Team from "@/Compoents/Team/Team";


export default function OurTeam() {
    const { teamHero, leaders, visionaries, teamDev ,teamSales } = ourTeamData;

    return (
        <>
            <OurTeamHero data={teamHero} />
            <OurLeaders data={leaders} />
            <OurVisionaries data={visionaries} />
            <Team data={teamDev} />
            <Team data={teamSales} />
        </>


    );
}
