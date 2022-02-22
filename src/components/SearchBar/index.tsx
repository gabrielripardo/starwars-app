import { Dispatch, SetStateAction } from 'react'
import { Input, Space } from 'antd'

const { Search } = Input

export default function SearchBar(props: any) {
    return (
        <Space direction="horizontal" className="flex justify-center">
            <Search
                placeholder="Search by name"
                onSearch={props.onSearch}
                size="large"
                maxLength={80}
            />
        </Space>
    )
}
