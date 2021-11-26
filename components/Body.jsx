
import Thumbnail from "./Thumbnail"

function Body({ results }) {
    
    return (
        <div className="px-5 my-10 sm:grid sm:grid-cols-2 md:grid-cols-3
        lg:grid-cols-4 3xl:flex flex-wrap justify-center
        ">
            {results && results.map((result) => (
                <Thumbnail key={result.id} result={result} />
            ))}
        </div>
    )
}

export default Body
