import { Helmet } from "react-helmet";
import Banners from "./components/Banners";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  addBetAmount,
  choose,
  go,
  removeBetAmount,
  selectBetAmount,
  selectChoice,
  selectLastChange,
  selectPoint,
  setBetAmount,
} from "./features/gambleSlice";
import Modal from "./components/Modal";
import Result from "./components/Result";

function App() {
  const dispatch = useAppDispatch();
  const choice = useAppSelector(selectChoice);
  const point = useAppSelector(selectPoint);
  const betAmount = useAppSelector(selectBetAmount);
  const lastChange = useAppSelector(selectLastChange);
  return (
    <div className="min-h-screen w-full py-12 px-8 bg-stone-900 sm:px-10">
      <Helmet>
        <title>홀짝맞추기</title>
      </Helmet>
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 from-30% via-yellow-200 to-yellow-300">
          홀짝맞추기
        </h1>
        <div className="mt-4 space-y-2">
          <Banners />
        </div>
        <div className="mt-12 space-x-2">
          <button
            className={`py-3 px-6 rounded shadow-sm text-white font-extrabold text-lg ${
              choice === "odd" ? "bg-rose-500" : "bg-gray-600 hover:bg-gray-500"
            }`}
            onClick={() => dispatch(choose("odd"))}
          >
            홀
          </button>
          <button
            className={`py-3 px-6 rounded shadow-sm text-white font-extrabold text-lg ${
              choice === "even"
                ? "bg-indigo-500"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
            onClick={() => dispatch(choose("even"))}
          >
            짝
          </button>
        </div>
        <div className="mt-6 max-w-md">
          <div className="flex items-center space-x-2">
            <button
              className="w-8 h-8 flex justify-center items-center rounded-full shadow-md bg-gray-600 text-white font-extrabold text-lg active:scale-95"
              onClick={() => dispatch(removeBetAmount(5000))}
            >
              &darr;
            </button>
            <input
              type="number"
              min="0"
              max={point}
              className="w-36 border-b-2 border-yellow-300 py-1 bg-transparent text-2xl font-extrabold text-white text-center focus:outline-none"
              value={String(betAmount)}
              onChange={(e) => dispatch(setBetAmount(+e.target.value))}
            />
            <button
              className="w-8 h-8 flex justify-center items-center rounded-full shadow-md bg-gray-600 text-white font-extrabold text-lg active:scale-95"
              onClick={() => dispatch(addBetAmount(5000))}
            >
              &uarr;
            </button>
          </div>
          <button
            className="mt-4 w-full py-3 px-6 rounded shadow-sm bg-gradient-to-b from-yellow-300 from-30% via-yellow-200 to-yellow-300 text-white font-extrabold text-sm hover:opacity-80"
            onClick={() => {
              dispatch(go());
            }}
          >
            Go
          </button>
        </div>
      </div>
      <Modal>
        <Result />
      </Modal>
      <h3 className="fixed left-4 bottom-2 mt-4 text-transparent font-extrabold text-2xl bg-clip-text bg-gradient-to-b from-yellow-300 from-30% via-yellow-200 to-yellow-300">
        P: {point} {lastChange && `(${lastChange})`}
      </h3>
    </div>
  );
}

export default App;
