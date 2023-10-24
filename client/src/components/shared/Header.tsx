import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="py-8 bg-white box-shadow">
      <div className="container flex items-center gap-5 justify-between">
        <Link href="/">
          <h3 className="text-2xl">Logo Here</h3>
        </Link>
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <Link
                className="text-lg font-semibold text-secondary transition-all hover:text-primary"
                href="#"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-lg font-semibold text-secondary transition-all hover:text-primary"
                href="#"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-lg font-semibold text-secondary transition-all hover:text-primary"
                href="#"
              >
                Property
              </Link>
            </li>
            <li>
              <Link
                className="text-lg font-semibold text-secondary transition-all hover:text-primary"
                href="#"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                className="text-lg font-semibold text-secondary transition-all hover:text-primary"
                href="#"
              >
                Pages
              </Link>
            </li>
            <li>
              <Link
                className="text-lg font-semibold text-secondary transition-all hover:text-primary"
                href="#"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <div className="w-[52px] h-[52px] bg-white box-shadow flex items-center justify-center cursor-pointer transition-all hover:bg-primary text-secondary hover:text-white">
            <BiSearch className="text-xl" />
          </div>
          <div className="w-[52px] h-[52px] bg-white box-shadow flex items-center justify-center cursor-pointer transition-all hover:bg-primary text-secondary hover:text-white">
            <FaRegUser className="text-xl" />
          </div>
          <div className="w-[52px] h-[52px] bg-white box-shadow flex items-center justify-center cursor-pointer transition-all hover:bg-primary text-secondary hover:text-white">
            <AiOutlineShoppingCart className="text-xl" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
