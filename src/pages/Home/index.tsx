import { useState, useEffect } from 'react'
import Table from 'components/Table'
import { list } from 'services/api'
import { Button } from 'antd'
import Footer from 'components/Footer'
import Header from 'components/Header'
import SearchBar from 'components/SearchBar'
import { getAll } from 'services/peoples.service'
import Person from 'types/peoples.type'

function Home() {
    const [persons, setPersons] = useState([])

    async function retrievePersons() {
        const results = await getAll()
        setPersons(results)
        console.log(results)
    }

    useEffect(() => {
        retrievePersons()
    }, [])

    return (
        <div className="p-4 my-2">
            <SearchBar />
            <Table rows={persons} />
        </div>
    )
}

export default Home
