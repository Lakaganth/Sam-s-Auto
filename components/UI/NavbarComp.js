import React, { useState } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import Link from "next/link";
import { motion } from "framer-motion";
import SamLogo from "../../public/static/images/icons/samlogo.svg";

const NavbarComp = () => {
  const [mobileWidth, setMobileWidth] = useState(false);
  const [openDraw, setOpenDraw] = useState(false);

  React.useEffect(() => {
    handleScroll();
    // window.addEventListener("resize", handleScroll);
  }, []);

  const handleScroll = (e) => {
    const windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      setMobileWidth(true);
    } else {
      setMobileWidth(false);
    }
  };

  const handleMenuOpen = () => {
    setOpenDraw(!openDraw);
  };

  return (
    <>
      {mobileWidth ? (
        <MobileMenu>
          <svg
            onClick={handleMenuOpen}
            width="68"
            height="42"
            viewBox="0 0 68 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="4" rx="2" fill="white" />
            <rect y="10" width="48" height="4" rx="2" fill="white" />

            <rect y="20" width="48" height="4" rx="2" fill="white" />
          </svg>
          {openDraw ? (
            <MobileDrawer>
              <div className="close">
                <svg
                  onClick={() => setOpenDraw(false)}
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.130859"
                    y="48.2132"
                    width="68"
                    height="8"
                    rx="4"
                    transform="rotate(-45 0.130859 48.2132)"
                    fill="white"
                  />
                  <rect
                    x="5.65723"
                    width="68"
                    height="8"
                    rx="4"
                    transform="rotate(45 5.65723 0)"
                    fill="white"
                  />
                </svg>
              </div>
              <Link href="/">
                <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  Home
                </motion.a>
              </Link>
              <Link href="/about">
                <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  About
                </motion.a>
              </Link>
              <Link href="/services">
                <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  Services
                </motion.a>
              </Link>
              <Link href="/contact">
                <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  Contact
                </motion.a>
              </Link>{" "}
            </MobileDrawer>
          ) : null}
        </MobileMenu>
      ) : (
        <NavigationComp>
          <Link href="/">
            {/* <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}> */}
            <img src={SamLogo} alt="SAMLOGO" />
            {/* </motion.a> */}
          </Link>
          <Link href="/">
            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Home
            </motion.a>
          </Link>
          <Link href="/about">
            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              About
            </motion.a>
          </Link>
          <Link href="/services">
            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Services
            </motion.a>
          </Link>
          <Link href="/contact">
            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Contact
            </motion.a>
          </Link>{" "}
        </NavigationComp>
      )}
    </>
  );
};

export default NavbarComp;

const NavigationComp = styled.div`
  width: 80%;
  height:90px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  color: white;
  justify-content: center;
  align-content: center;
  padding-top: 4vh;
  z-index: 100;
  a {
    color: white;
    text-decoration: none;
    font-family: "Quicksand", sans-serif;
    font-size: 1.5rem;
    line-height: 132%;
    text-align: center;
    letter-spacing: 0.27em;
    justify-self: center;
    align-self: center;
    /* transition: all 0.2s ease-in-out; */
    cursor: pointer;
  }
  /* a:hover {
    color: #fcb801;
    transform: translateY(-1vh);
    letter-spacing: 0.35em;
  } */

  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
 /* display:none; */
  `}
  ${media.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
grid-gap:20px;
  `}

    /* screen width is between 768px (medium) and 1170px (large) */
  ${media.between("medium", "large")`
    grid-gap:40px;
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
  
  `}
`;

const MobileMenu = styled.div`
  width: 100vw;
  height: 60px;
  background-color: #151515;
  overflow: hidden;
  svg {
    position: absolute;
    top: 3vh;
    right: 2vw;
  }
  /* screen width is less than 450px (small) */
  ${media.lessThan("small")`
    height: 100px;
  `}
    /* screen width is between 450px and 768px (small to medium) */
  ${media.between("small", "medium")`
  height: 140px;
  `}
  

`;

const MobileDrawer = styled.div`
  height: 100vh;
  width: 100vw;
  background: gray;
  z-index: 200;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
  a {
    color: white;
    text-decoration: none;
    font-family: "Quicksand", sans-serif;
    font-size: 2rem;
    line-height: 132%;
    text-align: center;
    letter-spacing: 0.27em;
    justify-self: center;
    align-self: center;
    /* transition: all 0.2s ease-in-out; */
    cursor: pointer;
  }
  .close {
    /* margin-right: 30px; */
  }
`;
