"use client";

import React from "react";
import Cookies from "js-cookie";

export default function CookieManager() {
  const setCookie = () => {
    Cookies.set("userToken", "abc123", { expires: 7 });
    console.log("Cookie set:", Cookies.get("userToken"));
    alert("Cookie ถูกสร้างแล้ว!");
  };

  const getCookie = () => {
    const token = Cookies.get("userToken");
    console.log("Get cookie:", token);
    alert(token ? `Cookie: ${token}` : "ไม่พบ Cookie");
  };

  const removeCookie = () => {
    Cookies.remove("userToken");
    console.log("Cookie removed");
    alert("Cookie ถูกลบแล้ว!");
  };

  return (
    <div className="flex flex-col gap-4 p-4 border rounded-lg w-64">
      <button
        onClick={setCookie}
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Set Cookie
      </button>

      <button
        onClick={getCookie}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Get Cookie
      </button>

      <button
        onClick={removeCookie}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Remove Cookie
      </button>
    </div>
  );
}
