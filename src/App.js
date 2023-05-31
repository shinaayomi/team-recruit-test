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
import { useEffect, useState } from "react";

const FirstColumnCard = (props) => {
  // const [days, setDays] = useState(0);
  // const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "June 31, 2023 15:37:25";

  const timeRunner = () => {
    let countTime = Date.parse(deadline) - Date.now();

    // setDays(Math.floor(countTime / (1000 * 60 * 60 * 24)));
    // setHours(Math.floor((countTime / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((countTime / 1000 / 60) % 60));
    setSeconds(Math.floor((countTime / 1000) % 60));
  };

  useEffect(() => {
    let stopTime = setInterval(() => {
      timeRunner(deadline);
    }, 1000);
    return () => clearInterval(stopTime);
  }, []);

  function moveToNextField(event, nextFieldId) {
    const input = event.target;
    const maxLength = input.getAttribute("maxlength");
    const currentLength = input.value.length;

    if (currentLength >= maxLength) {
      const nextField = document.getElementById(nextFieldId);
      nextField.focus();
    }
  }

  // function onlyNumbers(event) {
  //   const charCode = event.which ? event.which : event.keyCode;
  //   if (charCode > 31 && (charCode < 48 || charCode > 57)) {
  //     event.preventDefault();
  //     return false;
  //   }
  //   return true;
  // }

  return (
    <div className="col-md-8 pe-lg-5">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <img src={AceLogo} className="img-fluid" alt="logo" />
        <div className="timerDiv">
          <div className="timer">
            {minutes > 9 ? minutes.toLocaleString().substring(0, 1) : "0"}
          </div>
          <div className="timer">
            {minutes > 9
              ? minutes.toLocaleString().charAt(1)
              : minutes.toLocaleString().charAt(0)}
          </div>
          <div className="timerDivider">:</div>
          <div className="timer">
            {seconds > 9 ? seconds.toString().charAt(0) : "0"}
          </div>
          <div className="timer">
            {seconds > 9
              ? seconds.toString().charAt(1)
              : seconds.toString().charAt(0)}
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between mb-4">
        <div>
          <div className="input-title">Card Number</div>
          <label htmlFor="">Enter the 16-digit card number on the card</label>
        </div>
        <div>
          <button
            className="btn edit-btn px-0"
            type="button"
            onClick={props.editBtn}
          >
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
            id="firstNum"
            maxLength={4}
            size={4}
            value={props.firstNumberValue}
            onChange={props.FirstNum}
            placeholder="0000"
            onKeyUp={(event) => moveToNextField(event, "secondNum")}
            disabled={props.disabled}
            required
          />
          -
          <input
            type="text"
            id="secondNum"
            maxLength={4}
            size={4}
            value={props.secondNumberValue}
            onChange={props.SecondNum}
            placeholder="0000"
            onKeyUp={(event) => moveToNextField(event, "thirdNum")}
            disabled={props.disabled}
            required
          />
          -
          <input
            type="text"
            id="thirdNum"
            maxLength={4}
            size={4}
            value={props.thirdNumberValue}
            onChange={props.ThirdNum}
            placeholder="0000"
            onKeyUp={(event) => moveToNextField(event, "forthNum")}
            disabled={props.disabled}
            required
          />
          -
          <input
            type="text"
            id="forthNum"
            maxLength={4}
            size={4}
            value={props.forthNumberValue}
            onChange={props.ForthNum}
            placeholder="0000"
            disabled={props.disabled}
            required
          />
        </div>
        <BsFillPatchCheckFill color="var(--light-blue)" />
      </div>
      {/* end card number input */}

      {/* start cvv */}
      <div className="row my-4">
        <div className="col-md-6">
          <div className="input-title">CVV Number</div>
          <label htmlFor="">Enter 3 or 4 digit number on the card</label>
        </div>
        <div className="col-md-6 mt-md-0 mt-3">
          <div className="cvv-input-wrapper p-1">
            <input
              type="text"
              className="form-control text-center"
              minLength={3}
              maxLength={4}
              value={props.cvvValue}
              onChange={props.changeCvv}
              placeholder="123"
              disabled={props.disabled}
              required
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
              id="expired-month"
              minLength={2}
              maxLength={2}
              placeholder="09"
              value={props.monthValue}
              onChange={props.expiredMonth}
              onKeyUp={(event) => moveToNextField(event, "expired-year")}
              disabled={props.disabled}
              required
            />
            <div className="fw-bold">/</div>
            <input
              type="text"
              className="form-control text-center"
              id="expired-year"
              minLength={2}
              maxLength={2}
              placeholder="22"
              value={props.yearValue}
              onChange={props.expiredYear}
              disabled={props.disabled}
              required
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
              value={props.passwordValue}
              onChange={props.changePassword}
              disabled={props.disabled}
              required
            />
            <button className="btn">
              <CgMenuGridO fontSize="25px" color="var(--gray-color)" />
            </button>
          </div>
        </div>
      </div>
      {/* end Password */}
      <button className="btn pay-btn" type="button" onClick={props.payBtn}>
        Pay Now
      </button>
    </div>
  );
};

const SecondColumnCard = (props) => {
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
            <div className="card-number mt-1 mb-4">
              •••• &nbsp; {props.forthNums}
            </div>
            <div className="d-flex justify-content-between">
              <div className="card-number date">
                {props.expiredMonth}/{props.expiredYear}
              </div>
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
  const [firstNumValue, setFirstNumValue] = useState("2412");
  const [secondNumValue, setSecondNumValue] = useState("3456");
  const [thirdNumValue, setThirdNumValue] = useState("3456");
  const [forthNumValue, setForthNumValue] = useState("3456");
  const [cvvValue, setCvvValue] = useState("327");
  const [monthExpired, setMonthExpired] = useState("09");
  const [yearExpired, setYearExpired] = useState("22");
  const [passwordInput, setPasswordInput] = useState("");
  const [disabledInput, setDisabledInput] = useState(true);

  const handleFirstNum = (e) => {
    const inputValue = e.target.value;
    setFirstNumValue(inputValue);
    setFirstNumValue(inputValue.replace(/\D/g, ""));
  };

  const handleSecondNumInput = (e) => {
    const inputValue = e.target.value;
    setSecondNumValue(inputValue);
    const numericValue = inputValue.replace(/\D/g, "");
    setSecondNumValue(numericValue);
  };

  const handleThirdNumInput = (e) => {
    const inputValue = e.target.value;
    setThirdNumValue(inputValue);
    const numericValue = inputValue.replace(/\D/g, "");
    setThirdNumValue(numericValue);
  };

  const handleForthNumInput = (e) => {
    const inputValue = e.target.value;
    setForthNumValue(inputValue);
    const numericValue = inputValue.replace(/\D/g, "");
    setForthNumValue(numericValue);
  };

  const handleCvvInput = (e) => {
    const inputValue = e.target.value;
    setCvvValue(inputValue);
    const numericValue = inputValue.replace(/\D/g, "");
    setCvvValue(numericValue);
  };

  const handleExpiredMonthInput = (e) => {
    const inputValue = e.target.value;
    setMonthExpired(inputValue);
    const numericValue = inputValue.replace(/\D/g, "");
    setMonthExpired(numericValue);
  };

  const handleExpiredYearInput = (e) => {
    const inputValue = e.target.value;
    setYearExpired(inputValue);
    const numericValue = inputValue.replace(/\D/g, "");
    setYearExpired(numericValue);
  };

  const handlePassword = (e) => {
    setPasswordInput(e.target.value);
  };

  return (
    <>
      <header className="App-header py-md-4">
        <div
          className="container bg-white position-relative py-5 px-md-5"
          style={{ maxWidth: "1050px" }}
        >
          <form action="">
            <div
              className="position-absolute"
              style={{ top: "8px", right: "12px" }}
            >
              <button className="btn border-0 p-0" type="button">
                <VscChromeClose />
              </button>
            </div>
            <div className="row align-items-md-center">
              {/* start first column */}
              <FirstColumnCard
                firstNumberValue={firstNumValue}
                FirstNum={handleFirstNum}
                secondNumberValue={secondNumValue}
                SecondNum={handleSecondNumInput}
                thirdNumberValue={thirdNumValue}
                ThirdNum={handleThirdNumInput}
                forthNumberValue={forthNumValue}
                ForthNum={handleForthNumInput}
                cvvValue={cvvValue}
                changeCvv={handleCvvInput}
                monthValue={monthExpired}
                expiredMonth={handleExpiredMonthInput}
                yearValue={yearExpired}
                expiredYear={handleExpiredYearInput}
                passwordValue={passwordInput}
                changePassword={handlePassword}
                disabled={disabledInput}
                editBtn={() => setDisabledInput(!disabledInput)}
                payBtn={() => setDisabledInput(true)}
              />
              {/* end first column */}

              {/* start second column */}
              <SecondColumnCard
                forthNums={forthNumValue}
                expiredMonth={monthExpired}
                expiredYear={yearExpired}
              />
              {/* end second column */}
            </div>
          </form>
        </div>
      </header>
    </>
  );
}

export default App;
