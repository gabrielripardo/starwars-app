export type TableProps = {
    rows: Array<string>
}

export default function Table({ rows }: TableProps) {
    return (
        <>
            <h1>Lista</h1>
            <button>Previous</button>
            <button>Next</button>
        </>
    )
}
