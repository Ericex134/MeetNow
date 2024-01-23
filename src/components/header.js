import React, { useState } from "react";
import Calendar from "./images/calendar.png";
import ProfilePicture from "./images/ProfilePic.png";

function goToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}

function goToTop() {
  window.scrollTo(0, 0);
}

function Header() {
  return (
    <header className="w-full header fixed top-0 w-full bg-slate-500">
      <div className="mt-1 flex items-center h-20">
        <img
          class="h-16 w-16 ml-6"
          src={Calendar}
          alt="Logo"
          onClick={goToTop}
        />
        <div>MeetNow</div>
        <button
          onClick={goToBottom}
          className=" ml-auto mr-4 inline-flex items-center text-black font-bold py-2 px-4 rounded-2xl bg-white"
        >
          <img
            class="h-8 w-8"
            src={ProfilePicture}
            alt="Logo"
            onClick={goToTop}
          />
        </button>
      </div>
      <div
        className="mt-1"
        style={{
          height: "5px",
          width: "100%",
          background: "#ccc",
        }}
      />
    </header>
  );
}

export default Header;
