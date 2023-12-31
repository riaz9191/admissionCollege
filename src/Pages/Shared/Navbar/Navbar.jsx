import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../../../components/Container";
import { BiMenu, BiXCircle } from "react-icons/bi";
import { BiLogIn } from "react-icons/bi";
import logo from "/college.png";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleClose = () => setOpen(false);

  const Links = [
    { name: "Home", link: "/" },
    { name: "Colleges", link: "/college" },
    { name: "Admission", link: "/admission" },
    { name: "My College", link: "/my-college" },
  ];

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Successfully Logout!");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="shadow-sm w-full border-b-[1px] bg-white">
      <Container>
        <div className="lg:flex items-center justify-between py-1 lg:px-10 px-6 w-full">
          <div className="font-bold text-xl md:text-2xl cursor-pointer flex items-center py-2">
            <Link to="/" className="flex items-end gap-1 text-orange-600">
              <img src={logo} width={50} alt="" />
              <p>
                College<span className="text-blue-400">Gate</span>
              </p>
            </Link>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-5 cursor-pointer lg:hidden bg-white"
          >
            {open ? <BiXCircle /> : <BiMenu />}
          </div>

          <ul
            className={`lg:flex lg:items-center md:pl-24 pb-6 lg:pb-0 absolute lg:static bg-white lg:z-auto z-10 left-0 w-full lg:w-auto lg:pl-0 pl-12 transition-all duration-500 ease-in ${
              open ? "md:-left-6 opacity-100" : "left-[-490px]"
            } lg:opacity-100 opacity-0`}
          >
            {Links.map((link, index) => (
              <li
                key={index}
                className="lg:mr-6 text-lg my-6 lg:my-0 nav bg-white group"
              >
                <NavLink
                  to={link.link}
                  className="hover:text-orange-600 duration-500 font-semibold"
                  onClick={handleClose}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            <li
              className="lg:ml-2 mt-8 lg:mt-0 rounded lg:flex items-center gap-2"
              onClick={handleClose}
            >
              {user && (
                <Link
                  to="/profile"
                  className=" flex flex-col lg:items-center mb-3 lg:mb-0"
                >
                  <div>
                    <img
                      src={user.photoURL}
                      alt=""
                      className="w-10 rounded-full"
                    />
                  </div>
                  <h3 className="text-xs">{user.displayName}</h3>
                </Link>
              )}
              {user ? (
                <BiLogIn
                  className="text-xl lg:text-2xl cursor-pointer hover:text-orange-600"
                  title="Logout"
                  onClick={handleLogout}
                />
              ) : (
                <Link to="/login" onClick={handleClose}>
                  <button className="bg-transparent hover:bg-orange-600 text-orange-600 font-semibold hover:text-white py-2 px-4 border border-orange-600 hover:border-transparent duration-1000 hover:duration-1000 rounded-xl lg:ml-4 md:ml-0 ml-0">
                    Login
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
