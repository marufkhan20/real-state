import { AiFillHome } from "react-icons/ai";
import Button from "../ui/Button";
import Play from "../ui/Play";

const Slider = () => {
  return (
    <section className="bg-[#F2F6F7] min-h-[88vh] py-10 flex items-center">
      <div className="container flex items-center justify-between gap-10">
        <div>
          <p className="flex items-center gap-1 font-semibold text-base">
            <AiFillHome className="text-lg text-primary" />
            <span className="font-semibold text-base text-secondary">
              Real Estate Agency
            </span>
          </p>
          <h2 className="font-bold text-[65px] leading-[65px] my-5">
            Find Your Dream <br />
            House By Us
          </h2>
          <div className="border-l border-black">
            <p className="pl-7 text-base leading-[29px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Pariatur modi ad eligendi soluta nulla illum.
            </p>
          </div>
          <div className="mt-9 flex items-center gap-4">
            <Button>Make An Enquiry</Button>
            <Play />
          </div>
        </div>
        <div className="flex items-end">
          <img
            src="/images/slider-1.png"
            alt="slider"
            // width={724}
            // height={540}
          />
        </div>
      </div>
    </section>
  );
};

export default Slider;
