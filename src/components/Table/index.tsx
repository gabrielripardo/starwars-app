import { Table, Tag, Space } from 'antd'

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age'
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
    }
]

export type Person = {
    name: string
}

export type TableProps = {
    rows: Array<Person>
}

export default function TableCustom({ rows }: TableProps) {
    const dataSource = rows.map((item: Person, index: number) => {
        return {
            key: index,
            name: item.name,
            age: 32,
            address: '10 Downing Street'
        }
    })

    return (
        <>
            <h1>Lista</h1>
            <Table dataSource={dataSource} columns={columns} />
            <button>Previous</button>
            <button>Next</button>
        </>
    )
}
