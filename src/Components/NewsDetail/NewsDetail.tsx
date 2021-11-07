import PublisherInfo from "./PublisherInfo";
import Publishe from "./Pulishe";

const NewsDetail =()=>{
    return(
        <div className="container mx-auto">
            <div className="h-20 border border-black"></div>
            <section className="flex mx-auto w-1300 h-900  border border-red-500">
                <div className="flex-row w-80 h-full mx-4 pt-14  border border-green-300">
                    <section className="w-80 h-60 pt-8 rounded-3xl bg-gray-50">
                        <PublisherInfo/>
                    </section>
                    <section className="w-80 h-20 mt-4 pt-3 rounded-3xl bg-gray-50">
                        <Publishe/>
                    </section>
                </div>
                <div className="flex-row w-1000 py-14 border border-red-200">
                    <span className="block w-800 h-800 mx-auto rounded-3xl transform rotate-12 bg-blue-100">
                        <section className="w-800 h-800 mx-auto rounded-3xl transform -rotate-12 bg-gray-50"></section>
                    </span>
                </div>
            </section>
            <div className="h-400 border border-gray-600"></div>
        </div>
    )
}
export default NewsDetail;