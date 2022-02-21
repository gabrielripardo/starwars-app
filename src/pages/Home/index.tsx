import Table from 'components/Table'
import { list } from 'services/api'
import { Button } from 'antd'
import Footer from 'components/Footer'

function Home() {
    return (
        <>
            <h1>Página Home</h1>
            <Table rows={list()} />

            <Footer />
        </>
    )
}

export default Home
