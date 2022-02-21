import { Input, Space } from 'antd'

const { Search } = Input

const onSearch = (value: string) => console.log(value)

export default function SearchBar() {
    return (
        <Space direction="vertical">
            <Search
                placeholder="Search by name"
                onSearch={onSearch}
                style={{ width: 400 }}
            />
        </Space>
    )
}
