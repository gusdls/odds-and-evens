import { useAppSelector } from "../app/hooks";
import { selectChoice, selectSuccess } from "../features/gambleSlice";

function Result() {
  const choice = useAppSelector(selectChoice);
  const success = useAppSelector(selectSuccess);
  return (
    <div className="h-full flex flex-col justify-center items-center space-y-8 sm:flex-row sm:space-x-8 sm:space-y-0 md:space-x-12 lg:space-x-20">
      <div
        className={`w-72 h-72 flex justify-center items-center rounded-full shadow-lg bg-rose-500 text-white font-extrabold text-[55px] md:w-80 md:h-80 ${
          (success ? choice === "odd" : choice === "even")
            ? "opacity-100"
            : "opacity-40"
        }`}
      >
        홀
      </div>
      <div
        className={`w-72 h-72 flex justify-center items-center rounded-full shadow-lg bg-indigo-500 text-white font-extrabold text-[55px] md:w-80 md:h-80 ${
          (success ? choice === "even" : choice === "odd")
            ? "opacity-100"
            : "opacity-40"
        }`}
      >
        짝
      </div>
    </div>
  );
}

export default Result;
