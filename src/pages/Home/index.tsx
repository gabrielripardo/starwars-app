import Table from 'components/Table'
import { list } from 'services/api'

function Home() {
    console.log(list())
    return (
        <>
            <h1>Página Home</h1>
            {/* <Table /> */}
        </>
    )
}

export default Home
