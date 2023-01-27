import { NextPage } from 'next'
import { api } from '../utils/api'

const IndexPage: NextPage = () => {
    const check = api.check.useQuery()

    if (!check.data) return <p>Loading...</p>

    return (
        <div>
            <h1>Zodive</h1>

            <p>{check.data}</p>
        </div>
    )
}

export default IndexPage
