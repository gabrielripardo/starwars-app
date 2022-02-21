import Table from 'components/Table'
import { list } from 'services/api'
import { Button } from 'antd'
import Footer from 'components/Footer'
import Header from 'components/Header'
import SearchBar from 'components/SearchBar'

function Home() {
    return (
        <div className="p-4 my-2">
            <SearchBar />
            <Table rows={list()} />
        </div>
    )
}

export default Home
