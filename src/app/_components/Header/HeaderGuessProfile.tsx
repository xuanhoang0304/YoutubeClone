import React from "react";

const HeaderGuessProfile = () => {
  return (
    <a
      href="#"
      className="flex items-center justify-center py-2 px-4 rounded-full
       border border-[rgba(255,255,255,0.2)] gap-x-2 text-[#3ea6ff]
    hover:bg-[rgba(62,166,255,0.3)] hover:border-transparent transition-colors"
    >
      <i className="fa-solid fa-user"></i>
      <p>Đăng nhập</p>
    </a>
  );
};

export default HeaderGuessProfile;
