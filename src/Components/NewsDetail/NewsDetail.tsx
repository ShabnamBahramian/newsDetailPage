//import Detail from "./Detail";
import DownLoadLink from "./DownLoadLink";
import NewsComment from "./NewsComment";
import PublisherInfo from "./PublisherInfo";
import Publishe from "./Pulishe";

const NewsDetail = () => {
  return (
    <div className="container mx-auto">
      <div className="h-20 border border-black"></div>
      <section className="flex mx-auto w-1300">
        <div className="flex-row w-80 h-full mx-4 pt-20">
          <section className="w-80 h-60 pt-4 rounded-3xl bg-gray-50">
            <PublisherInfo />
          </section>
          <section className="w-80 h-20 mt-4 pt-3 rounded-3xl bg-gray-50">
            <Publishe />
          </section>
          <section className="w-80 h-10 mt-4 pt-2 rounded-3xl bg-gray-50">
            <DownLoadLink/>
          </section>
        </div>
        <div className="flex-row w-1000 py-14">
          <span className="block w-800 min-h-950 mx-auto rounded-3xl transform rotate-6 bg-blue-100">
            <section className="flex w-800 h-8 mx-auto mr-10 px-10 transform -rotate-6">
              <div className="flex-row w-20 h-10 pt-2 text-center bg-gray-50 text-sm border border-gray-200"> اخبار</div>
              <div className="flex-row w-20 h-10 pt-2 text-center bg-gray-50 text-sm border border-gray-200">نظرات</div>
              <div className="flex-row w-28 h-10 pt-2 text-center bg-gray-50 text-sm border border-gray-200"> آرشیو نظرات</div>
            </section>
            <section className="w-800  min-h-900 mx-auto transform -rotate-6 rounded-3xl  bg-gray-50">
                 {/* <Detail/>  */}
                <NewsComment/> 
            </section>
          </span>
        </div>
      </section>
      <div className="h-400 border border-gray-600"></div>
    </div>
  );
};
export default NewsDetail;
