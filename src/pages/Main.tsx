import WorldstateTypes from '../worldstateTypes'

interface Props {
    data: WorldstateTypes
}

const Main = (props: Props) => {
    return (
        <div>
            <h2>Main</h2>
            <table>

                <thead>
                    <tr>
                        <th colSpan={2}>Planet Cycles</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Plains of Cetus (Earth):</td>
                        <td>{props.data.cetusCycle.state?.toUpperCase()}</td>
                    </tr>
                    <tr>
                        <td>Orb Vallis (Venus):</td>
                        <td>{props.data.vallisCycle.state?.toUpperCase()}</td>
                    </tr>
                    <tr>
                        <td>Cambion Drift (Deimos):</td>
                        <td>{props.data.cambionCycle.active?.toUpperCase()}</td>
                    </tr>
                    <tr>
                        <td>Zariman:</td>
                        <td>{props.data.zarimanCycle.state?.toUpperCase()}</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <thead><tr><th>Arbitration</th></tr></thead>
                <tbody>
                    <tr>
                        <th>Enemy</th>
                        <th>Node</th>
                        <th>Type</th>
                    </tr>
                    <tr>
                        <td>{props.data.arbitration.enemy}</td>
                        <td>{props.data.arbitration.node}</td>
                        <td>{props.data.arbitration.type}</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <thead><tr><th colSpan={2}>Archon Hunt</th></tr></thead>
                <tbody>
                    <tr>
                        <td>Boss:</td>
                        <td>{props.data.archonHunt.boss}</td>
                    </tr>
                    <tr>
                        <td>Mission 1:</td>
                        <td>{props.data.archonHunt.missions[0].type} - {props.data.archonHunt.missions[0].node}</td>
                    </tr>
                    <tr>
                        <td>Mission 2:</td>
                        <td>{props.data.archonHunt.missions[1].type} - {props.data.archonHunt.missions[1].node}</td>
                    </tr>
                    <tr>
                        <td>Mission 3:</td>
                        <td>{props.data.archonHunt.missions[2].type} - {props.data.archonHunt.missions[2].node}</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th colSpan={4}>Sortie</th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td colSpan={4}>({props.data.sortie.faction} - {props.data.sortie.boss})</td>
                    </tr>
                    <tr>
                        <th>Missions</th>
                        <td>{props.data.sortie.variants[0].node}</td>
                        <td>{props.data.sortie.variants[0].missionType}</td>
                        <td>{props.data.sortie.variants[0].modifier}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>{props.data.sortie.variants[1].node}</td>
                        <td>{props.data.sortie.variants[1].missionType}</td>
                        <td>{props.data.sortie.variants[1].modifier}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>{props.data.sortie.variants[2].node}</td>
                        <td>{props.data.sortie.variants[2].missionType}</td>
                        <td>{props.data.sortie.variants[2].modifier}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Main