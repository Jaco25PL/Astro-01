
export function LaunchesButton() {


    return(
        <>
            <button 
                className="px-6 py-4 text-gray-300 bg-gray-800 hover:text-gray-50 hover:bg-gray-600 rounded-lg font-bold transition duration-300"
                type="button" 
            >
                {hasMoreData ? "Load more" : "No more"}
            </button>
        </>
    )

}