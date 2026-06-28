function ResultTable({ rows }) {
    if (!rows.length) return null;

    const headers = Object.keys(rows[0]);

    return (
        <div className="mt-8 overflow-auto">
            <h2 className="font-bold mb-3">
                Results ({rows.length})
            </h2>

            <table className="min-w-full border">
                <thead>
                    <tr>
                        {headers.map((h) => (
                            <th
                                key={h}
                                className="border bg-gray-100 px-4 py-2"
                            >
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            {headers.map((h) => (
                                <td
                                    key={h}
                                    className="border px-4 py-2"
                                >
                                    {row[h]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ResultTable;