import React from "react";
import Model from "../Components/Model";
import EventsBlog from "../Components/EventsBlog";

export default function GetEvents() {

  return (
    <div>
      <nav className="flex  items-center justify-between md:px-24  px-4  shadow  ">
        <img src="/icon.png" alt="" className="h-16 sm:h-24 " />
        <Model />
      </nav>
      <div>
        <EventsBlog />
      </div>
    </div>
  );
}
