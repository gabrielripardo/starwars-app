import { useState, useEffect } from 'react'
import Table from 'components/Table'
import { list } from 'services/api'
import { Button } from 'antd'
import Footer from 'components/Footer'
import Header from 'components/Header'
import SearchBar from 'components/SearchBar'
import { getAll, getByName } from 'services/peoples.service'
import Person from 'types/peoples.type'

function Home() {
    const [persons, setPersons] = useState([])
    const [keyword, setKeyword] = useState('')

    async function retrievePersons() {
        const results = await getAll()
        setPersons(results)
        console.log(results)
    }

    async function retrievePersonsSearch() {
        const results = await getByName(keyword)
        setPersons(results)
        console.log(results)
    }

    useEffect(() => {
        if (keyword != '') retrievePersonsSearch()
        else retrievePersons()
    }, [keyword])

    return (
        <div className="p-4 my-2">
            <SearchBar setKeyword={setKeyword} />
            <Table rows={persons} />
        </div>
    )
}

export default Home
