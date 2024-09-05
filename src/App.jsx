import ImageWidget from "./UI/ImageWidget";
import InfoWidget from "./UI/InfoWidget";

import "./App.css";

export default function App(){
  return(
    <div className="h-full flex gap-16 px-[2%] pt-[5%]">
      <section className="border border-stone-50 w-[50%] h-[82%] rounded-3xl bg-black-500">

      </section>
      <div className="flex flex-col h-[85%] w-[50%] justify-between">
        <InfoWidget />
        <hr className="h-1 my-4 mx-auto bg-black-600 border-0 rounded-3xl w-[80%] horizontal-line"></hr>
        <ImageWidget />
        <hr className="h-1 mt-4 mx-auto bg-black-600 border-0 rounded-3xl w-[80%] horizontal-line"></hr>
      </div>
    </div>
  );
}