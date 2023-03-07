/** @format */

import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  const logout = () => {
    localStorage.removeItem("token");
  };
  return (
    <section className="section_header">
      <div className="ls_container">
        <div className="logo_div">
          <a className="logo_name" href="/">
            Translate
          </a>
        </div>
        <ul className="list_header">
          <li className="item_header">biz bilan boglanish</li>

          <li className="item_header">
            {localStorage.getItem("token") == true ? (
              <button
                type="button"
                className="btn btn-primary rounded-circle p-3 fs-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                A
              </button>
            ) : (
              <div className="d-flex">
                <Link to={"/singUp"}>Sing Up </Link>
                <p className="px-2"> / </p>
                <Link to={"/login"}> Sing In </Link>
              </div>
            )}

            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              tabindex={-1}
              id="exampleModal"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <div className="d-flex align-items-center">
                      <h2 className="rounded-circle text-light p-4 fs-2 bg-primary">
                        A
                      </h2>
                    </div>
                    <h2 className="m-1">Account</h2>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p className="fs-7">email@email.com</p>
                    <button type="button" className="btn btn-danger ">
                      Delete Account
                    </button>
                  </div>
                  <div className="modal-footer d-flex justify-content-between">
                    <button
                      onClick={logout}
                      type="button"
                      className="btn btn-danger "
                    >
                      Login Out
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary "
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
