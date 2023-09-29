import Tag from "./components/Tag";
import Random from "./components/Random";
export default function App() {
  return (
          <div className="w-full  relative h-full flex flex-col   background">
                <div className="bg-white text-4xl  text-center w-11/12 max-w-[1400px] mx-auto rounded-md  py-2 mt-[20px]  ">RANDOM GIFS</div>
                <div className="flex flex-col w-full items-center gap-y-10">
                  <Random/>
                  <Tag/>
                </div>
          </div>
  );
}
