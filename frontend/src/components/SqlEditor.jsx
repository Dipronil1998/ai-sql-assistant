function SqlEditor({ sql }) {
    return (
        <div className="mt-6">
            <h2 className="font-bold mb-2">
                Generated SQL
            </h2>

            <pre className="bg-gray-900 text-green-400 rounded p-4 overflow-auto">
                {sql || "-- SQL will appear here"}
            </pre>
        </div>
    );
}

export default SqlEditor;