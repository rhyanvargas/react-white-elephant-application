import React from "react";

export default function GameSummary() {
  const recipientGiftLink = "google.com";
  const recipientAddress = "33 ADDRESS LN BOSTON, AL 21034";
  const recipientName = "John";
  const recipientEmail = "john@email.com";

  const currentPlayerGiftName = "Bike";
  const currentPlayerGiftImage =
    "https://lh3.googleusercontent.com/fife/ABSRlIrcxCCWlaV_g0qacLiEkgT33VdrBqCNU7RbpF9N90HR3AAMc2lPN1RCqs_DnxGRjaz1mbwFk-skZ_JW1wVwKbUFjTdp4XF_Vu4fXCvHbMpRgVJDgEfs0wesS0FrOvTu8cFwlqertE1FjTlRxlIMpmqPFik1yss1LwQP-AJC8eV2OabSj9M5TI-KHq-ar54uCxl_EUgNJDFchBObpv8iOYYEtQXo-2jWA8qfjC660luHLLvTjt185vGqv8q1nsGrlEcDXoLWQGMij-ZDWRet_t9fA6XCTOyAcW659h9rjH2oZsk2VOubBzkd2Jo1-HulyO7HkW7TK6QqDwZglwTfOInFC2_oixuWWMEXLVkughXpSx6PvyMtDUZY0vXViHcYWPTuFvvBZ1i2d40u3xKvYcsd-dklvI_3QRk_bDPqZsj3odiba7zg2hYkfdfzY_V3O9kYpcMfSl5bAmYDro18BJYkYTML8d7FpDXjXNXPnfDcmIFxpVuI5b2EM_Gx8NoUBHL6qgNk6spK9QQ2twtUFUZcyx4yMVGlspvHe4_2KAKiHwKB9AIIqO94CGEP9ub19yX54_Z2EPf9uykgEOaeXyTHDfbMxnC22ERiasravVvFRUSSgQOHez7bK-iz-VtbjRIXIa6RQtzyDJMEgYptGRVc0i4Q0Et3iK7gSMpnasv4RUFWJmLxPsQ3ri25rEh3SNfK5p5LvYY3Rh0rNmLQEHYnW-S78FWptg=ft";

  return (
    <section className="summary-section flex vertical center--x">
      <div className="container summary-container vertical ">
        <div className="summary-row flex between">
          <div className="summary-column center--x">
            <h2>SEND GIFT TO {recipientName}</h2>
            <div className="summary-block summary-address">
              <address>
                <p>{recipientAddress}</p>
              </address>
              <br />
              <button className="summary-address-button">Copy Address</button>
            </div>
            <div className="summary-instructions">
              <ol>
                <li>
                  Purchase Gift{" "}
                  <a href={recipientGiftLink}>HERE (link to product)</a>
                </li>
                <li>
                  Check your email to confirm your purchase and to let John know
                  their gift is on the way!
                </li>
                <li></li>
              </ol>
            </div>
          </div>

          <div className="summary-column center--x">
            <h2>MyGIFT</h2>
            <div className="summary-block">
              <div className="summary-gift-image">
                <img src={currentPlayerGiftImage} alt={currentPlayerGiftName} />
              </div>
              <h3>{currentPlayerGiftName}</h3>
            </div>
            <div className="summary-instructions">
              <ol>
                <li>John will be sending your gift.</li>
                <li>
                  Reach out to him at{" "}
                  <a href={`mailTo:${recipientEmail}`}>{recipientEmail}</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="summary-row flex center--x">
          <button>New Game</button>
        </div>
      </div>
    </section>
  );
}
