export default function DataTable({ columns = [], data = [] }) {
    return (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
                <tr>
                    {columns.map((col) => (
                        <th key={col.key} style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: 8 }}>{col.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, idx) => (
                    <tr key={idx}>
                        {columns.map((col) => (
                            <td key={col.key} style={{ borderBottom: '1px solid #f0f0f0', padding: 8 }}>{col.render ? col.render(row[col.key], row) : row[col.key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
