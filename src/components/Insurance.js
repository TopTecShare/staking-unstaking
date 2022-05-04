import React from "react";
import { Link } from "react-router-dom";
import "./insurance.scss";

const Insurance = () => {
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-mobile">
              <form className="box">
                <div className="field mt-5 mb-5 self-title">
                  <Link to="/personal">
                    <button className="title-btn">
                      <span className="icon">
                        <i className="fas fa-arrow-left"></i>
                      </span>
                    </button>
                  </Link>
                  <h1 className="self-name">WHOLE LIFE INSURANCE</h1>
                  <Link to="/">
                    <button className="title-btn">
                      <span className="icon">
                        <i className="fas fa-times"></i>
                      </span>
                    </button>
                  </Link>
                </div>
                <div className="field mt-5 amount">
                  <h3 className="amount-name">Coverage amount</h3>
                </div>
                <div className="field mt-5 count-amountn">
                  <button className="amount-btn">
                    <span className="icon">
                      <i className="fa-solid fa-minus"></i>
                    </span>
                  </button>
                  <div className="amounts">
                    <input
                      type="number"
                      className="amounts-number"
                      placeholder="$1,000,000"
                    ></input>
                  </div>
                  <button className="amount-btn">
                    <span className="icon">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                </div>

                <div className="field mt-5 select-crytos">
                  <div className="field mt-5 amount">
                    <h3 className="amount-name">SELECT CRYPTO TO STAKE</h3>
                  </div>
                  <div className="field mt-5 select-cryto">
                    <div className="select-crypto-lines">
                      <div className="select-crypto-line mt-5">
                        <img
                          src="./cryptoicons/bitcoin.png"
                          className="crypto-img"
                          alt=""
                        ></img>
                        <span className="crypto-name">BTC</span>
                        <input
                          type="radio"
                          name="crypto"
                          className="crypto-check"
                        ></input>
                      </div>
                      <div className="select-crypto-line mt-5">
                        <img
                          src="./cryptoicons/ethereum.png"
                          className="crypto-img"
                          alt=""
                        ></img>
                        <span className="crypto-name">ETH</span>
                        <input
                          type="radio"
                          name="crypto"
                          className="crypto-check"
                        ></input>
                      </div>
                    </div>
                    <div className="select-crypto-lines">
                      <div className="select-crypto-line mt-5">
                        <img
                          src="./cryptoicons/solana.jpg"
                          className="crypto-img"
                          alt=""
                        ></img>
                        <span className="crypto-name">SOL</span>
                        <input
                          type="radio"
                          name="crypto"
                          className="crypto-check"
                        ></input>
                      </div>
                      <div className="select-crypto-line mt-5">
                        <img
                          src="./cryptoicons/binance.png"
                          className="crypto-img"
                          alt=""
                        ></img>
                        <span className="crypto-name">BNB</span>
                        <input
                          type="radio"
                          name="crypto"
                          className="crypto-check"
                        ></input>
                      </div>
                    </div>
                    <div className="select-crypto-lines">
                      <div className="select-crypto-line mt-5">
                        <img
                          src="./cryptoicons/bitcoincash.png"
                          className="crypto-img"
                          alt=""
                        ></img>
                        <span className="crypto-name">BCH</span>
                        <input
                          type="radio"
                          name="crypto"
                          className="crypto-check"
                        ></input>
                      </div>
                      <div className="select-crypto-line mt-5">
                        <img
                          src="./cryptoicons/cardano.png"
                          className="crypto-img"
                          alt=""
                        ></img>
                        <span className="crypto-name">ADA</span>
                        <input
                          type="radio"
                          name="crypto"
                          className="crypto-check"
                        ></input>
                      </div>
                    </div>
                    <div className="select-crypto-lines">
                      <div className="select-crypto-line mt-5">
                        <img
                          src="./cryptoicons/xrp.png"
                          className="crypto-img"
                          alt=""
                        ></img>
                        <span className="crypto-name">XRP</span>
                        <input
                          type="radio"
                          name="crypto"
                          className="crypto-check"
                        ></input>
                      </div>
                      <div className="select-crypto-line mt-5">
                        <img
                          src="./cryptoicons/luna.png"
                          className="crypto-img"
                          alt=""
                        ></img>
                        <span className="crypto-name-luna">LUNA</span>
                        <input
                          type="radio"
                          name="crypto"
                          className="crypto-check"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field mt-5">
                  <Link to="/transfer">
                    <button className="button is-link is-large is-fullwidth">
                      GET QUOTE
                    </button>
                  </Link>
                </div>
                <li className="foot-more">
                  <Link className="get-link" to="/">
                    Learn More {">"}
                  </Link>
                </li>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insurance;
