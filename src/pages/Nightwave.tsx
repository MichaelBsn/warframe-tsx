import WorldstateTypes from '../worldstateTypes'

interface Props {
    data: WorldstateTypes
}

const Nightwave = (props: Props) => {

    const challenges = props.data.nightwave.activeChallenges
    const mappedChallenges = challenges.map(challenge => (
        <tr key={challenge.id}>
            <td>{challenge.title}</td>
            <td>{challenge.desc}</td>
        </tr>
    ))

    return (
        <div className='nightwave'>
            <h2>Nightwave</h2>
            <table>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    {mappedChallenges}
                </tbody>
            </table>
        </div>
    )
}

export default Nightwave