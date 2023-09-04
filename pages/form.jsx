import React from "react";

const form = () => {
  return (
    <div>
      {" "}
      <div id="headDiv">
        <ul>
          <li id="supps">
            <h2 id="topHead">UNESCO Digital Learning Week 2023</h2>
          </li>
          <li id="supps">
            <img src="imgs/kwaraTech.png" id="kwaraTechLogo" />
          </li>
        </ul>
      </div>
      <div id="_fistSection">
        <br />
        <form action="backend/processor.php" method="post">
          <h1>STEAM AI SUMMIT FOR EDUCATORS</h1>
          <h3>Registration form</h3>
          <h2>Please fill-in your details carefully!</h2>

          <label id="laa">
            Surname:
            <br />
            <input
              type="text"
              name="LName"
              required
              placeholder="enter your family name here..."
            />
          </label>
          <br />
          <label id="laa">
            First name:
            <br />
            <input
              type="text"
              name="FName"
              required
              placeholder="enter your personal name here..."
            />
          </label>
          <br />
          <label id="laa">
            Email:
            <br />
            <input
              type="email"
              name="email"
              required
              placeholder="please enter an active email here..."
            />
          </label>
          <br />
          <label id="laa">
            Active Phone Number (<i>your WhatsApp number preferred</i>):
            <br />
            <input
              type="number"
              name="pNumber"
              required
              placeholder="your personal phone number"
            />
          </label>
          <br />
          <label id="laa">
            Address:
            <br />
            <input
              type="text"
              name="address"
              required
              placeholder="enter your contact address..."
            />
          </label>
          <br />
          <label id="laa">
            School Name:
            <br />
            <input
              type="text"
              name="schoolName"
              required
              placeholder="Enter the name of the School you are serving..."
            />
          </label>
          <br />

          <label id="laa">
            School Address:
            <br />
            <input
              type="text"
              name="schoolAddress"
              required
              placeholder="Enter the address of the School..."
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default form;
