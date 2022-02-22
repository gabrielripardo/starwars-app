import { useState, useEffect } from 'react'
import Table from 'components/Table'
import SearchBar from 'components/SearchBar'
import { getByName } from 'services/peoples.service'
import { Pagination } from 'antd'

function Home() {
    const [persons, setPersons] = useState([])
    const [keyword, setKeyword] = useState('')
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const retrievePersons = async () => {
        const data = await getByName(keyword, page)
        setPersons(data.results)
        setTotalPages(data.count)
        console.log(data)
    }

    const changePage = async (page: number) => {
        console.log(page)
        setPage(page)
    }

    const onSearch = (value: string) => {
        console.log(value)
        setKeyword(value)
        setPage(1)
    }

    useEffect(() => {
        retrievePersons()
    }, [keyword, page])

    return (
        <div className="p-4 my-2">
            <SearchBar onSearch={onSearch} />
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
