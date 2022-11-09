import WorldstateTypes from '../worldstateTypes'

interface Props {
    data: WorldstateTypes
}

const VoidFissures = (props: Props) => {

    const normalFissures = props.data.fissures.filter(fissure => fissure.isHard === false && fissure.isStorm === false)
    const hardFissures = props.data.fissures.filter(fissure => fissure.isHard === true)
    const stormFissures = props.data.fissures.filter(fissure => fissure.isStorm === true)

    const mappedNormal = normalFissures.map(fissure => (
        <tr key={fissure.id}>
            <td>{fissure.tier}</td>
            <td>{fissure.missionType}</td>
            <td>{fissure.enemy}</td>
        </tr>
    ))
    const mappedHard = hardFissures.map(fissure => (
        <tr key={fissure.id}>
            <td>{fissure.tier}</td>
            <td>{fissure.missionType}</td>
            <td>{fissure.enemy}</td>
        </tr>
    ))
    const mappedStorm = stormFissures.map(fissure => (
        <tr key={fissure.id}>
            <td>{fissure.tier}</td>
            <td>{fissure.missionType}</td>
            <td>{fissure.enemy}</td>
        </tr>
    ))

    return (
        <div className='fissures'>
            <h2>Void Fissures</h2>
            <div className='fissures-container'>
                <table className='fissures-list'>
                    <thead>
                        <tr><th colSpan={3}>Normal Fissures</th></tr>
                        <tr>
                            <th>Tier</th>
                            <th>Mission</th>
                            <th>Enemy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mappedNormal}
                    </tbody>
                </table>
                <table className='fissures-list' id='hard-fissures'>
                    <thead>
                        <tr><th colSpan={3}>Steel Path Fissures</th></tr>
                        <tr>
                            <th>Tier</th>
                            <th>Mission</th>
                            <th>Enemy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mappedHard}
                    </tbody>
                </table>
                <table className='fissures-list'>
                    <thead>
                        <tr><th colSpan={3}>Void Storms</th></tr>
                        <tr>
                            <th>Tier</th>
                            <th>Mission</th>
                            <th>Enemy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mappedStorm}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default VoidFissures