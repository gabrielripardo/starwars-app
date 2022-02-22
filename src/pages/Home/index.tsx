import { useState, useEffect } from 'react'
import Table from 'components/Table'
import { list } from 'services/api'
import { Button } from 'antd'
import Footer from 'components/Footer'
import Header from 'components/Header'
import SearchBar from 'components/SearchBar'
import { getAll, getByName } from 'services/peoples.service'
import Person from 'types/peoples.type'
import { Pagination } from 'antd'

function Home() {
    const [persons, setPersons] = useState([])
    const [keyword, setKeyword] = useState('')
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    async function retrievePersons() {
        const data = await getByName(keyword, page)
        setPersons(data.results)
        setTotalPages(data.count)
        console.log(data)
    }

    function changePage(page: number) {
        console.log(page)
        setPage(page)
    }

    const onSearch = (value: string) => {
        console.log(value)
        setKeyword(value)
    }

    useEffect(() => {
        retrievePersons()
    }, [keyword, page])

    return (
        <div className="p-4 my-2">
            <SearchBar setKeyword={setKeyword} />
            <Table rows={persons} />
            <Pagination
                defaultCurrent={1}
                total={totalPages}
                onChange={changePage}
                showSizeChanger={false}
            />
        </div>
    )
}

export default Home
