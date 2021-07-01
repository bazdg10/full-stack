import React from 'react';

import '../Input/Input.css';

const Dealer = ({ setDealerData, sendDealerData, dealerData }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="No. of Fishes for the round please..."
      value={dealerData}
      onChange={({ target: { value } }) => setDealerData(value)}
      onKeyPress={event => event.key === 'Enter' ? sendDealerData(event) : null}
    />
    <button className="sendButton" onClick={e => sendDealerData(e)}>Send</button>
  </form>
)

export default Dealer;