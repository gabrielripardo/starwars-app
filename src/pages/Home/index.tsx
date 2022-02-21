import Table from 'components/Table'
import { list } from 'services/api'
import { Button } from 'antd'

function Home() {
    console.log(list())

    const persons = list()

    return (
        <>
            <h1>Página Home</h1>
            <Table rows={list()} />
            <Button type="primary">Button</Button>

            {persons.map((item, index) => (
                <span key={index}>
                    <strong>{`${item.name} | `}</strong>
                </span>
            ))}
        </>
    )
}

export default Home
