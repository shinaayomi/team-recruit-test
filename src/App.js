import logo from "./logo.svg";
import "./App.css";
import AceLogo from "../src/assets/images/Ace-coin-logo.svg";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { HiPencil } from "react-icons/hi";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <div className="container">
        <div className="row">
          {/* start first column */}
          <div className="col-md">
            <div className="d-flex justify-content-between align-items-center">
              <img src={AceLogo} className="img-fluid" alt="logo" />
              <div className="timerDiv">
                <div className="timer">0</div>
                <div className="timer">1</div>
                <div className="timerDivider">:</div>
                <div className="timer">1</div>
                <div className="timer">9</div>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <div className="input-title">Card Number</div>
                <label htmlFor="">
                  Enter the 16-digit card number on the card
                </label>
              </div>
              <div>
                <button className="btn edit-btn">
                  <HiPencil /> Edit
                </button>
              </div>
            </div>
            {/* start number card input */}
            <div className="card-number-input-wrapper">
              <img
                src="https://res.cloudinary.com/dcjqodsyg/image/upload/v1684281084/Group_12656_ba7p5c.svg"
                alt=""
                className="img-fluid"
                width={30}
              />
              <div className="input-wrapper">
                <input type="text" maxLength={4} placeholder="0000" />
                -
                <input type="text" maxLength={4} placeholder="0000" />
              </div>
              <BsFillPatchCheckFill color="var(--light-blue)" />
            </div>
            {/* end card number input */}
          </div>
          {/* end first column */}

          <div className="col-md"></div>
        </div>
      </div>
    </>
  );
}

export default App;
