import { BsFillPatchCheckFill } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
// import { HiPencil } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import AceLogo from "../src/assets/images/Ace-coin-logo.svg";
import SimCard from "../src/assets/images/Sim.svg";
import Wifi from "../src/assets/images/Wifi.svg";
import MasterCardLogo1 from "../src/assets/images/master-card-logo-1.svg";
import MasterCardLogo2 from "../src/assets/images/master-card-logo-2.svg";
import Pen from "../src/assets/images/pen.svg";
import "./App.css";
import File from "../src/assets/images/File.svg";

const FirstColumnCard = () => (
  <div className="col-md-8 pe-lg-5">
    <div className="d-flex justify-content-between align-items-center mb-5">
      <img src={AceLogo} className="img-fluid" alt="logo" />
      <div className="timerDiv">
        <div className="timer">0</div>
        <div className="timer">1</div>
        <div className="timerDivider">:</div>
        <div className="timer">1</div>
        <div className="timer">9</div>
      </div>
    </div>
    <div className="d-flex justify-content-between mb-4">
      <div>
        <div className="input-title">Card Number</div>
        <label htmlFor="">Enter the 16-digit card number on the card</label>
      </div>
      <div>
        <button className="btn edit-btn px-0">
          <img src={Pen} alt="Edit" className="img-fluid" /> Edit
        </button>
      </div>
    </div>
    {/* start number card input */}
    <div className="card-number-input-wrapper p-md-3 p-2 gap-md-3 gap-2">
      <img src={MasterCardLogo1} alt="Master card" className="img-fluid" />
      <div className="input-wrapper gap-md-3 gap-1">
        <input
          type="text"
          maxLength={4}
          pattern="/^[0-9]/g"
          placeholder="0000"
        />
        -
        <input type="text" maxLength={4} placeholder="0000" />
        -
        <input type="text" maxLength={4} placeholder="0000" />
        -
        <input type="text" maxLength={4} placeholder="0000" />
      </div>
      <BsFillPatchCheckFill color="var(--light-blue)" />
    </div>
    {/* end card number input */}

    {/* start cvv */}
    <div className="row my-4">
      <div className="col-md-6">
        <div className="input-title">CVV Number</div>
        <label htmlFor="">Enter 3 or 4 number on the card</label>
      </div>
      <div className="col-md-6 mt-md-0 mt-3">
        <div className="cvv-input-wrapper p-1">
          <input
            type="text"
            className="form-control text-center"
            minLength={3}
            maxLength={4}
            placeholder="123"
          />
          <button className="btn">
            <CgMenuGridO fontSize="25px" color="var(--gray-color)" />
          </button>
        </div>
      </div>
    </div>
    {/* end cvv */}

    {/* start Expiry Date */}
    <div className="row ">
      <div className="col-md-6">
        <div className="input-title">Expiry Date</div>
        <label htmlFor="">Enter the expiration date of the card</label>
      </div>
      <div className="col-md-6 mt-md-0 mt-3">
        <div className="expiry-input-wrapper">
          <input
            type="text"
            className="form-control text-center"
            minLength={2}
            maxLength={2}
            placeholder="09"
          />
          /
          <input
            type="text"
            className="form-control text-center"
            minLength={2}
            maxLength={2}
            placeholder="22"
          />
        </div>
      </div>
    </div>
    {/* end Expiry Date */}

    {/* start Password */}
    <div className="row my-4">
      <div className="col-md-6">
        <div className="input-title">Password</div>
        <label htmlFor="">Enter your Dynamic password</label>
      </div>
      <div className="col-md-6 mt-md-0 mt-3">
        <div className="cvv-input-wrapper p-1">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
          <button className="btn">
            <CgMenuGridO fontSize="25px" color="var(--gray-color)" />
          </button>
        </div>
      </div>
    </div>
    {/* end Password */}
    <button className="btn pay-btn">Pay Now</button>
  </div>
);

const SecondColumnCard = () => {
  const _detailLists = [
    {
      title: "Company",
      vales: "Apple",
    },
    {
      title: "Order Number",
      vales: "1266201",
    },
    {
      title: "Product",
      vales: "MacBook Air",
    },
    {
      title: "VAT(20%)",
      vales: "$100.00",
    },
  ];
  return (
    <div className="col-md-4 mt-md-0 mt-5">
      <div className="atm-card-wrapper">
        {/* start atm card */}
        <div className="atm-card-container">
          <div className="top-dash mb-5"></div>
          <div className="atm-card">
            <div className="d-flex justify-content-between align-items-center">
              <img src={SimCard} alt="Sim" className="img-fluid" />
              <img src={Wifi} alt="Wifi" className="img-fluid" />
            </div>
            <div className="name mt-auto">Jonathan Michael</div>
            <div className="card-number mt-1 mb-4">•••• &nbsp; 3456</div>
            <div className="d-flex justify-content-between">
              <div className="card-number date">09/22</div>
              <img
                src={MasterCardLogo2}
                alt="Master card"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        {/* end atm card */}

        <div
          className="card-details d-flex flex-column"
          style={{ height: "400px" }}
        >
          <div className="d-flex flex-column gap-3 mt-auto">
            {_detailLists.map((details, i) => (
              <div
                className="d-flex justify-content-between align-items-center"
                key={i}
              >
                <div className="title">{details.title}</div>
                <div className="details-value">
                  {i === 0 && <div className="apple-icon"></div>}
                  {details.vales}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card-details-divider"></div>
        <div className="card-details">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div className="title">You have pay</div>
              <div>
                <span
                  className="details-value"
                  style={{ fontSize: "28px", fontWeight: 800 }}
                >
                  549
                </span>
                <span className="details-value">.99 </span>
                <span className="title">USD</span>
              </div>
            </div>
            <div>
              <img src={File} alt="File" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <header className="App-header">
        <div
          className="container bg-white position-relative py-5 px-md-5"
          style={{ maxWidth: "1000px" }}
        >
          <div
            className="position-absolute"
            style={{ top: "8px", right: "12px" }}
          >
            <button className="btn border-0 p-0">
              <VscChromeClose />
            </button>
          </div>
          <div className="row align-items-md-center">
            {/* start first column */}
            <FirstColumnCard />
            {/* end first column */}

            {/* start second column */}
            <SecondColumnCard />
            {/* end second column */}
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
