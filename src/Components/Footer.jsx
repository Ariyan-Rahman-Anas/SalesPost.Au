import { Link } from "react-router-dom";
const Footer = () => {
    const todayDay = new Date()
    const currentYear = todayDay.getFullYear()

    return (
      <div className="bg-black text-gray-400 pt-14 px-2 ">
        <div className="grid grid-cols-2 md:grid-cols-6 ">
          <div>
            <h1 className="text-white font-semibold  ">Tips & help</h1>
            <div className="footer-items text-sm mt-3 ">
              <ul>
                <li className="hover:underline hover:text-gray-200 w-fit ">
                  <Link>About SalesPost</Link>
                </li>
                <li className="hover:underline hover:text-gray-200 w-fit ">
                  <Link>Help</Link>
                </li>
                <li className="hover:underline hover:text-gray-200 w-fit ">
                  <Link>Careers</Link>
                </li>
                <li className="hover:underline hover:text-gray-200 w-fit">
                  <Link>Register</Link>
                </li>
                <li className="hover:underline hover:text-gray-200 w-fit ">
                  <Link>Contact Us</Link>
                </li>
                <li className="hover:underline hover:text-gray-200 w-fit ">
                  <Link>The Market Herald Brands</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="text-white font-semibold  ">Legal</h1>
            <div className="footer-items text-sm mt-3 ">
              <ul>
                <li className="hover:underline hover:text-gray-200 w-fit ">
                  <Link>Terms of Use </Link>
                </li>
                <li className="hover:underline hover:text-gray-200 w-fit ">
                  <Link>Privacy Policy</Link>
                </li>
                <li className="hover:underline hover:text-gray-200 w-fit ">
                  <Link>Posting Policy</Link>
                </li>
                <li className="hover:underline hover:text-gray-200 w-fit">
                  <Link>Cookie Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="text-white font-semibold  ">For Business</h1>
            <div className="footer-items text-sm mt-3 ">
              <ul>
                <li className="hover:underline hover:text-gray-200 w-fit ">
                  <Link>Recruiters & Employers</Link>
                </li>
                <li className="hover:underline hover:text-gray-200 w-fit ">
                  <Link>Display Ads</Link>
                </li>
                <li className="hover:underline hover:text-gray-200 w-fit ">
                  <Link>Car Dealer Packages</Link>
                </li>
                <li className="hover:underline hover:text-gray-200 w-fit">
                  <Link>Press Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="text-white font-semibold  ">Explore</h1>
            <div className="footer-items text-sm mt-3 ">
              <ul>
                <li className="hover:underline hover:text-gray-200 w-fit ">
                  <Link>About SalesPost</Link>
                </li>
                <li className="hover:underline hover:text-gray-200 w-fit ">
                  <Link>Help</Link>
                </li>
                <li className="hover:underline hover:text-gray-200 w-fit ">
                  <Link>Careers</Link>
                </li>
                <li className="hover:underline hover:text-gray-200 w-fit">
                  <Link>Register</Link>
                </li>
                <li className="hover:underline hover:text-gray-200 w-fit ">
                  <Link>Contact Us</Link>
                </li>
                <li className="hover:underline hover:text-gray-200 w-fit ">
                  <Link>The Market Herald Brands</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="text-white font-semibold  ">SalesPost Cars</h1>
            <div className="footer-items text-sm mt-3 ">
              <ul>
                <li className="hover:underline hover:text-gray-200 w-fit ">
                  <Link>About SalesPost</Link>
                </li>
                <li className="hover:underline hover:text-gray-200 w-fit ">
                  <Link>Help</Link>
                </li>
                <li className="hover:underline hover:text-gray-200 w-fit ">
                  <Link>Careers</Link>
                </li>
                <li className="hover:underline hover:text-gray-200 w-fit">
                  <Link>Register</Link>
                </li>
                <li className="hover:underline hover:text-gray-200 w-fit ">
                  <Link>Contact Us</Link>
                </li>
                <li className="hover:underline hover:text-gray-200 w-fit ">
                  <Link>The Market Herald Brands</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="text-white font-semibold  ">Top Categories</h1>
            <div className="footer-items text-sm mt-3 ">
              <ul>
                <li className="hover:underline hover:text-gray-200 w-fit ">
                  <Link>About SalesPost</Link>
                </li>
                <li className="hover:underline hover:text-gray-200 w-fit ">
                  <Link>Help</Link>
                </li>
                <li className="hover:underline hover:text-gray-200 w-fit ">
                  <Link>Careers</Link>
                </li>
                <li className="hover:underline hover:text-gray-200 w-fit">
                  <Link>Register</Link>
                </li>
                <li className="hover:underline hover:text-gray-200 w-fit ">
                  <Link>Contact Us</Link>
                </li>
                <li className="hover:underline hover:text-gray-200 w-fit ">
                  <Link>The Market Herald Brands</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="pt-4 pb-1 text-white text-center">
          {`Copy-Right ${currentYear} || All rights reserved by `}{" "}
          <a className="text-[#658cff] font-semibold "
            href="https://ariyanrahmananas.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ariyan Rahman Anas
          </a>{" "}
        </p>
      </div>
    );
};

export default Footer;