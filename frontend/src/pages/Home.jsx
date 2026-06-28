import Navbar from "../components/Navbar";
import ChatInput from "../components/ChatInput";
import SqlEditor from "../components/SqlEditor";
import ResultTable from "../components/ResultTable";
import Loading from "../components/Loading";
import useChat from "../hooks/useChat";

function Home() {
    const {
        askAI,
        loading,
        question,
        sql,
        rows,
        totalRows,
    } = useChat();

    return (
        <>
            <Navbar />

            <main className="max-w-7xl mx-auto px-6 py-8">

                <ChatInput
                    onSubmit={askAI}
                    loading={loading}
                />

                {loading && <Loading />}

                {!loading && question && (
                    <div className="mt-8 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                        <h2 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                            Your Question
                        </h2>

                        <p className="text-gray-800">{question}</p>
                    </div>
                )}

                {sql && (
                    <div className="mt-8">
                        <SqlEditor sql={sql} />
                    </div>
                )}

                {rows.length > 0 && (
                    <div className="mt-8">
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="text-xl font-bold">
                                Query Result
                            </h2>

                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                                {totalRows} Row{totalRows > 1 ? "s" : ""}
                            </span>
                        </div>

                        <ResultTable
                            rows={rows}
                            totalRows={totalRows}
                        />
                    </div>
                )}

            </main>
        </>
    );
}

export default Home;