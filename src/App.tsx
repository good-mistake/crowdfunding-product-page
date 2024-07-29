import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "./images/logo-mastercraft.svg";
import { ReactComponent as Bookmark } from "./images/icon-bookmark.svg";
import { ReactComponent as Closemodal } from "./images/icon-close-modal.svg";
import { ReactComponent as Success } from "./images/icon-check.svg";
import { ReactComponent as Hamburger } from "./images/icon-hamburger.svg";
import { ReactComponent as CloseMenu } from "./images/icon-close-menu.svg";
function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [radioValue, setRadioValue] = useState<string>("option1");
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [currentModal, setCurrentModal] = useState<string>("first");
  const [number, setNumber] = useState<number>(0);
  const [navbar, setNavbar] = useState<boolean>(false);
  const [navModal, setNavModal] = useState<boolean>(false);
  const openModal = () => setIsModalOpen(true);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.target.value);
  };
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (number > 0) {
      switchModal("second");
    } else {
      alert("Please enter a valid pledge amount.");
    }
  };
  const switchModal = (modalType: string) => {
    setCurrentModal(modalType);
    setIsModalOpen(true);
  };
  const toggleNavbar = () => {
    setNavbar((prev) => !prev);
    setNavModal((prev) => !prev);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentModal("first");
    setNumber(0);
    setNavModal(false);
    setNavbar(false);
  };
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container">
      {isModalOpen
        ? currentModal === "first" && (
            <>
              <div
                className={`modalOverlay ${isModalOpen ? "open" : ""}`}
                onClick={closeModal}
              ></div>
              <div className={`modalContainer ${isModalOpen ? "open" : ""}`}>
                <div className="modalHeader">
                  <h3>Back this project</h3>
                  <div onClick={closeModal} className="closeBtn">
                    <Closemodal />
                  </div>
                </div>
                <p>
                  Want to support us in bringing Mastercraft Bamboo Monitor
                  Riser out in the world?
                </p>
                <form className="modalContent">
                  <div
                    className={`${
                      radioValue === "option1" ? "checked" : ""
                    } formLabel`}
                  >
                    <label>
                      <div className="description">
                        <input
                          type="radio"
                          value="option1"
                          checked={radioValue === "option1"}
                          onChange={handleRadioChange}
                          className="formRadio"
                        />
                        <span className="checkmark"></span>
                        <h3>Pledge with no reward</h3>
                        <p>
                          Choose to support us without a reward if you simply
                          believe in our project. As a backer, you will be
                          signed up to receive product updates via email.
                        </p>
                      </div>
                    </label>
                    {radioValue === "option1" ? (
                      <div className="pledgeContainer">
                        <label htmlFor="pledge">Enter your pledge</label>
                        <div>
                          <input
                            type="number"
                            id="pledge"
                            onChange={(e) => setNumber(Number(e.target.value))}
                          />
                          <span className="dollar">$</span>
                          <button
                            className="continue"
                            onClick={handleButtonClick}
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div
                    className={`${
                      radioValue === "option2" ? "checked" : ""
                    } formLabel`}
                  >
                    <label>
                      <div className="description">
                        {" "}
                        <input
                          type="radio"
                          value="option2"
                          checked={radioValue === "option2"}
                          onChange={handleRadioChange}
                          className="formRadio"
                        />
                        <span className="checkmark"></span>
                        <div className="descriptionHeader">
                          <div>
                            <h3>Bamboo Stand</h3>
                            <div className="more">Pledge $25 or more</div>
                          </div>
                          {radioValue === "option2"
                            ? windowWidth > 768 && (
                                <div className="itemsLef">
                                  101 <span>left</span>
                                </div>
                              )
                            : ""}
                        </div>
                        <p>
                          You get an ergonomic stand made of natural bamboo.
                          You've helped us launch our promotional campaign, and
                          you’ll be added to a special Backer member list.
                        </p>
                        {radioValue === "option2" && windowWidth < 768 && (
                          <div className="itemsLef">
                            101 <span>left</span>
                          </div>
                        )}
                      </div>
                    </label>
                    {radioValue === "option2" ? (
                      <div className="pledgeContainer">
                        <label htmlFor="pledge">Enter your pledge</label>
                        <div>
                          <input
                            type="number"
                            id="pledge"
                            onChange={(e) => setNumber(Number(e.target.value))}
                          />
                          <span className="dollar">$</span>
                          <button
                            className="continue"
                            onClick={handleButtonClick}
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div
                    className={`${
                      radioValue === "option3" ? "checked" : ""
                    } formLabel`}
                  >
                    <label>
                      <div className="description">
                        {" "}
                        <input
                          type="radio"
                          value="option3"
                          checked={radioValue === "option3"}
                          onChange={handleRadioChange}
                          className="formRadio"
                        />
                        <span className="checkmark"></span>
                        <div className="descriptionHeader">
                          <div>
                            <h3>Black Edition Stand</h3>
                            <div className="more">Pledge $75 or more</div>
                          </div>
                          {radioValue === "option3"
                            ? windowWidth > 768 && (
                                <div className="itemsLef">
                                  64 <span>left</span>
                                </div>
                              )
                            : ""}
                        </div>
                        <p>
                          You get a Black Special Edition computer stand and a
                          personal thank you. You’ll be added to our Backer
                          member list. Shipping is included.
                        </p>{" "}
                        {radioValue === "option3" && windowWidth < 768 && (
                          <div className="itemsLef">
                            64 <span>left</span>
                          </div>
                        )}
                      </div>
                    </label>
                    {radioValue === "option3" ? (
                      <div className="pledgeContainer">
                        <label htmlFor="pledge">Enter your pledge</label>
                        <div>
                          <input
                            type="number"
                            id="pledge"
                            onChange={(e) => setNumber(Number(e.target.value))}
                          />
                          <span className="dollar">$</span>
                          <button
                            className="continue"
                            onClick={handleButtonClick}
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div
                    className={`${
                      radioValue === "option4" ? "checked" : ""
                    } formLabel`}
                  >
                    <label className={` disabled`}>
                      <div className="description">
                        {" "}
                        <input
                          type="radio"
                          value="option4"
                          checked={radioValue === "option4"}
                          onChange={handleRadioChange}
                          className="form-radio"
                          disabled
                        />
                        <span className="checkmark"></span>
                        <div className="descriptionHeader">
                          <div>
                            <h3>Mahogany Special Edition</h3>
                            <div className="more">Pledge $200 or more</div>
                          </div>
                          {radioValue === "option4" ? (
                            <div>
                              101 <span>left</span>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <p>
                          You get two Special Edition Mahogany stands, a Backer
                          T-Shirt, and a personal thank you. You’ll be added to
                          our Backer member list. Shipping is included.
                        </p>
                      </div>
                    </label>
                    {radioValue === "option4" ? (
                      <div className="pledgeContainer">
                        <label htmlFor="pledge">Enter your pledge</label>
                        <div>
                          <input type="number" id="pledge" />
                          <span className="dollar">$</span>
                          <button className="continue">Continue</button>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </form>
              </div>
            </>
          )
        : ""}
      {currentModal === "second" && (
        <>
          <div
            className={`modalOverlay ${isModalOpen ? "open" : ""}`}
            onClick={closeModal}
          ></div>
          <div className={`successContainer ${isModalOpen ? "open" : ""}`}>
            <div>
              <Success />
            </div>
            <h3>Thanks for your support!</h3>
            <p>
              Your pledge brings us one step closer to sharing Mastercraft
              Bamboo Monitor Riser worldwide. You will get an email once our
              campaign is completed.
            </p>
            <button onClick={closeModal}>Got it!</button>
          </div>
        </>
      )}
      <header>
        <div>
          {windowWidth < 550 ? (
            <>
              {!navbar && (
                <>
                  <h1>crowdfund</h1>
                  <div className={`hamburger`} onClick={toggleNavbar}>
                    <Hamburger />
                  </div>
                </>
              )}
              <nav className={`${navbar ? "openNav" : "closeNav"} navBar`}>
                {navModal && (
                  <div className={` navMobile`}>
                    <div
                      className={`modalOverlay ${navModal ? "open" : ""}`}
                      onClick={closeModal}
                    ></div>
                    <div
                      className={`${
                        navbar ? "openNav" : "closeNav"
                      } navModalContainer`}
                    >
                      <div className="navModalHeader">
                        <h1>crowdfund</h1>
                        <div className={`hamburger`} onClick={toggleNavbar}>
                          <CloseMenu />
                        </div>
                      </div>
                      <ul>
                        <li>About</li>
                        <li>Discover</li>
                        <li>Get Started</li>
                      </ul>
                    </div>
                  </div>
                )}
              </nav>
            </>
          ) : (
            <>
              <h1>crowdfund</h1>
              <nav className="navBar">
                <ul>
                  <li>About</li>
                  <li>Discover</li>
                  <li>Get Started</li>
                </ul>
              </nav>
            </>
          )}
        </div>
      </header>
      <main>
        <article className="intro">
          <div className="logo">
            <Logo />
          </div>
          <h2>Mastercraft Bamboo Monitor Riser</h2>
          <p>
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div className="btnContainer">
            <button onClick={openModal}>Back this project</button>
            <button>
              <span>
                <Bookmark />
              </span>
              <span className="hideText">Bookmark</span>
            </button>
          </div>
        </article>
        <article className="numbers">
          <ul>
            <li>
              <span>$89,914</span>of $100,000 backed
            </li>
            <li>
              <span>5,007</span>total backers
            </li>
            <li>
              <span>56</span>days left
            </li>
          </ul>
          <div className="line">
            <div></div>
          </div>
        </article>
        <article className="about">
          <h3>About this project</h3>
          <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p className="feature">
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
          <section>
            <div className="aboutHeader">
              <h3>Bamboo Stand</h3>
              <div>Pledge $25 or more</div>
            </div>
            <p>
              You get an ergonomic stand made of natural bamboo. You've helped
              us launch our promotional campaign, and you’ll be added to a
              special Backer member list.
            </p>
            <div className="aboutFooter">
              <h3>
                101 <span>left</span>
              </h3>
              <button onClick={openModal}>Select Reward</button>
            </div>
          </section>
          <section>
            <div className="aboutHeader">
              <h3>Black Edition Stand</h3>
              <div>Pledge $75 or more</div>
            </div>
            <p>
              You get a Black Special Edition computer stand and a personal
              thank you. You’ll be added to our Backer member list. Shipping is
              included.
            </p>
            <div className="aboutFooter">
              <h3>
                64 <span>left</span>
              </h3>
              <button onClick={openModal}>Select Reward</button>
            </div>
          </section>
          <section className="disabled">
            <div className="aboutHeader">
              <h3>Mahogany Special Edition</h3>
              <div>Pledge $200 or more</div>
            </div>
            <p>
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You’ll be added to our Backer member list.
              Shipping is included.
            </p>
            <div className="aboutFooter">
              <h3>
                0 <span>left</span>
              </h3>
              <button>Out of Stock</button>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}

export default App;
