import { useAppDispatch, useAppSelector } from "../app/hooks";
import { hide, selectResultShown } from "../features/gambleSlice";

const Modal: React.FC<React.PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();
  const shown = useAppSelector(selectResultShown);
  return (
    <div
      className={`${
        shown ? "fixed" : "hidden"
      } inset-0 h-screen w-full bg-black/70`}
      onClick={() => dispatch(hide())}
    >
      {children}
    </div>
  );
};

export default Modal;
