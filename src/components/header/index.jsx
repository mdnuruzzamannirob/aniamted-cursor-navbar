/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { forwardRef } from "react";
import Magnetic from "./magnetic";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Nav from "./nav";
import "./index.css";

const Header = forwardRef(function index(props, ref) {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);
  return (
    <>
      <div className="header">
        <Magnetic>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={`burger ${isActive && "burgerActive"}`}
          >
            <div ref={ref} className="bounds"></div>
          </div>
        </Magnetic>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
});

export default Header;
