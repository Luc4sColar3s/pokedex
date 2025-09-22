import { CircleNotchIcon } from "@phosphor-icons/react";
import React from "react";

export default function Loading() {
  return (
    <div>
      <CircleNotchIcon size={25} className="text-[#ff0000] animate-spin" />
    </div>
  );
}
