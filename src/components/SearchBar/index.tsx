import { Dispatch, SetStateAction } from 'react'
import { Input, Space } from 'antd'

interface IProps {
    setKeyword: Dispatch<SetStateAction<string>>
}

const { Search } = Input

export default function SearchBar({ setKeyword }: IProps) {
    const onSearch = (value: string) => {
        console.log(value)
        setKeyword(value)
    }
    return (
        <Space direction="horizontal" className="flex justify-center">
            <Search
                placeholder="Search by name"
                onSearch={onSearch}
                size="large"
                maxLength={80}
            />
        </Space>
    )
}
