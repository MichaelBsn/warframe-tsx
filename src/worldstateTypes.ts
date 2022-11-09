export default interface PlanetCycleTypes {
    state?: string;
    active?: string;
}

export default interface WorldstateTypes {
    cambionCycle: PlanetCycleTypes;
    cetusCycle: PlanetCycleTypes;
    vallisCycle: PlanetCycleTypes;
    zarimanCycle: PlanetCycleTypes;
    archonHunt: {
        boss: string;
        missions: {
            node: string;
            type: string
        }[]
    }
    sortie: {
        faction: string;
        boss: string;
        variants: {
            missionType: string;
            modifier: string;
            node: string;
        }[]
    }
    arbitration: {
        enemy: string
        type: string
        node: string
    }
    fissures: {
        id: string;
        isHard: boolean;
        isStorm: boolean;
        tier: string;
        missionType: string;
        enemy: string;
    }[];
    nightwave: {
        activeChallenges: {
            id: string;
            title: string;
            desc: string;
        }[];
    }
}