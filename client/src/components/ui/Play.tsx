import { FaPlay } from "react-icons/fa";

const Play = () => {
  return (
    <div className="w-[60px] h-[60px] rounded-full bg-white cursor-pointer flex items-center justify-center shadow-sm border">
      <FaPlay className="text-primary text-base" />
    </div>
  );
};

export default Play;
