import Table from 'components/Table'
import { list } from 'services/api'
import { Button } from 'antd'
import Footer from 'components/Footer'
import Header from 'components/Header'

function Home() {
    return (
        <>
            <Header />
            <Table rows={list()} />

            <Footer />
        </>
    )
}

export default Home
