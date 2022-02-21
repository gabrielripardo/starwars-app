import { Table } from 'antd'

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Height',
        dataIndex: 'height',
        key: 'height'
    },
    {
        title: 'Mass',
        dataIndex: 'mass',
        key: 'mass'
    },
    {
        title: 'Skin Color',
        dataIndex: 'skin_color',
        key: 'skin_color'
    }
]

export type Person = {
    name: string
    height: string
    mass: string
    skin_color: string
}

export type TableProps = {
    rows: Array<Person>
}

export default function TableCustom({ rows }: TableProps) {
    const dataSource = rows.map((item: Person, index: number) => {
        return {
            key: index,
            name: item.name,
            height: item.height,
            mass: item.mass,
            skin_color: item.skin_color
        }
    })

    return (
        <>
            <h1>Lista</h1>
            <Table dataSource={dataSource} columns={columns} />
        </>
    )
}
