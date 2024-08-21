import Image from "next/image";
import React from "react";

const HeaderProfile = () => {
  return (
    <div className="flex items-center gap-x-6 px-2">
      <figure className="size-6">
        <svg
          width="20"
          height="14"
          viewBox="0 0 20 14"
          className="size-full object-cover"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 8H9V11H7V8H4V6H7V3H9V6H12V8ZM15 1H1V13H15V6.61L19 8.44V3.56L15 5.39V1ZM16 0V3.83L20 2V10L16 8.17V14H0V0H16Z"
            fill="white"
          />
        </svg>
      </figure>
      <figure className="size-6">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="size-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0V4H16V0H12ZM15 3H13V1H15V3ZM12 6V10H16V6H12ZM15 9H13V7H15V9ZM6 0V4H10V0H6ZM9 3H7V1H9V3ZM6 6V10H10V6H6ZM9 9H7V7H9V9ZM12 12V16H16V12H12ZM15 15H13V13H15V15ZM6 12V16H10V12H6ZM9 15H7V13H9V15ZM0 0V4H4V0H0ZM3 3H1V1H3V3ZM0 6V10H4V6H0ZM3 9H1V7H3V9ZM0 12V16H4V12H0ZM3 15H1V13H3V15Z"
            fill="white"
          />
        </svg>
      </figure>
      <figure className="size-6">
        <svg
          width="16"
          height="21"
          viewBox="0 0 16 21"
          className="size-full object-cover"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 19H10C10 20.1 9.1 21 8 21C6.9 21 6 20.1 6 19ZM16 16.35V18H0V16.35L2 14.47V9.32001C2 6.40001 3.56 4.10001 6 3.34001V2.96001C6 1.54001 7.49 0.460006 8.99 1.20001C9.64 1.52001 10 2.23001 10 2.96001V3.35001C12.44 4.10001 14 6.41001 14 9.33001V14.48L16 16.35ZM15 16.77L13 14.89V9.42001C13 6.95001 11.81 5.06001 9.87 4.32001C8.61 3.79001 7.23 3.82001 6.03 4.35001C4.15 5.11001 3 6.99001 3 9.42001V14.89L1 16.77V17H15V16.77Z"
            fill="white"
          />
        </svg>
      </figure>
      <figure className="size-8 rounded-full mx-[6px]">
        <Image
          alt="userAvt"
          src="https://images.unsplash.com/photo-1723653263152-f20aae931b99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
          width={32}
          height={32}
          className="size-full object-cover rounded-full"
        ></Image>
      </figure>
    </div>
  );
};

export default HeaderProfile;
