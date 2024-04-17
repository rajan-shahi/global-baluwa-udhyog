import React from "react";

export default function Footer() {
  return (
    <div className="  flex justify-center items-center bg-primary-500">
      <footer className="text-gray-500 md:px-0 px-4  py-5  md:w-10/12 w-full">
        <div className="gap-6 justify-between md:flex">
          <div className=" md:pr-32">
            <div className=" flex flex-col gap-4 max-w-xs">
              <h1 className=" text-gray-100 font-medium text-2xl">
                GLOBAL BALUWA UDHYOG
              </h1>
              <div className=" flex flex-col gap-2">
                {" "}
                <span className="   text-gray-300 hover:text-gray-400 ">
                  <span className="text-gray-100  text-[19px]  ">
                    <span> Call Us :- </span>
                  </span>
                  +977 9860022606
                </span>
                <span className="   text-gray-300 hover:text-gray-400 ">
                  <span className="text-gray-100  text-[19px]  ">
                    <span> Email Address :-</span>
                  </span>
                  globalbaluwa@gmail.com
                </span>
                <span className="   text-gray-300 hover:text-gray-400  ">
                  <span className=" text-gray-100   text-[19px]">
                    Location :-{" "}
                  </span>
                  Hetauda , Makwanpur
                </span>
              </div>
            </div>
          </div>
          <div className=" flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
            {footerNavs.map((item, idx) => (
              <ul className="space-y-4 " key={idx}>
                <h4 className="text-gray-100 font-medium md:text-2xl text-xl">
                  {item.label}
                </h4>
                {item.items.map((el, idx) => (
                  <li key={idx} className="">
                    <a
                      href={el.href}
                      className="  md:text-[18px]  text-[17px] text-gray-300 hover:text-gray-400 duration-200"
                    >
                      {el.name}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-8 py-6 border-t border-gray-400  items-center justify-between sm:flex">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.cloudsnepalweb.com/"
            className="mt-4 sm:mt-0 text-gray-100 hover:text-gray-300"
          >
            develop and design by{" "}
            <span className=" text-gray-400 underline ">
              Clouds Nepal Web Pvt.Ltd
            </span>{" "}
            &copy; 2024
          </a>
          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-4">
              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a
                  rel="noreferrer"
                
                  href="/"
                >
                  <svg
                    className="w-6 h-6  text-gray-300 hover:text-gray-500 duration-150"
                    fill="currentColor"
                    viewBox="0 0 48 48"
                  >
                    <g clip-path="url(#clip0_17_63)">
                      <path d="M24 4.322c6.413 0 7.172.028 9.694.14 2.343.104 3.61.497 4.453.825 1.116.432 1.922.957 2.756 1.791.844.844 1.36 1.64 1.79 2.756.329.844.723 2.12.826 4.454.112 2.53.14 3.29.14 9.693 0 6.413-.028 7.172-.14 9.694-.103 2.344-.497 3.61-.825 4.453-.431 1.116-.957 1.922-1.79 2.756-.845.844-1.642 1.36-2.757 1.791-.844.328-2.119.722-4.453.825-2.532.112-3.29.14-9.694.14-6.413 0-7.172-.028-9.694-.14-2.343-.103-3.61-.497-4.453-.825-1.115-.431-1.922-.956-2.756-1.79-.844-.844-1.36-1.641-1.79-2.757-.329-.844-.723-2.119-.826-4.453-.112-2.531-.14-3.29-.14-9.694 0-6.412.028-7.172.14-9.694.103-2.343.497-3.609.825-4.453.431-1.115.957-1.921 1.79-2.756.845-.844 1.642-1.36 2.757-1.79.844-.329 2.119-.722 4.453-.825 2.522-.113 3.281-.141 9.694-.141zM24 0c-6.516 0-7.331.028-9.89.14-2.55.113-4.304.526-5.822 1.116-1.585.619-2.926 1.435-4.257 2.775-1.34 1.332-2.156 2.672-2.775 4.247C.666 9.806.253 11.55.141 14.1.028 16.669 0 17.484 0 24s.028 7.331.14 9.89c.113 2.55.526 4.304 1.116 5.822.619 1.585 1.435 2.925 2.775 4.257a11.732 11.732 0 004.247 2.765c1.528.591 3.272 1.003 5.822 1.116 2.56.112 3.375.14 9.89.14 6.516 0 7.332-.028 9.891-.14 2.55-.113 4.303-.525 5.822-1.116a11.732 11.732 0 004.247-2.765 11.732 11.732 0 002.766-4.247c.59-1.528 1.003-3.272 1.115-5.822.113-2.56.14-3.375.14-9.89 0-6.516-.027-7.332-.14-9.891-.112-2.55-.525-4.303-1.115-5.822-.591-1.594-1.407-2.935-2.747-4.266a11.732 11.732 0 00-4.247-2.765C38.194.675 36.45.262 33.9.15 31.331.028 30.516 0 24 0z" />
                      <path d="M24 11.672c-6.806 0-12.328 5.522-12.328 12.328 0 6.806 5.522 12.328 12.328 12.328 6.806 0 12.328-5.522 12.328-12.328 0-6.806-5.522-12.328-12.328-12.328zm0 20.325a7.998 7.998 0 010-15.994 7.998 7.998 0 010 15.994zM39.694 11.184a2.879 2.879 0 11-2.878-2.878 2.885 2.885 0 012.878 2.878z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_63">
                        <path d="M0 0h48v48H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>

              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a
                  rel="noreferrer"
            
                  href="/"
                >
                  <svg
                    class="svg-icon w-6 h-6  text-gray-300 hover:text-gray-500 duration-150"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="none"
                      d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <style jsx>{`
          .svg-icon path,
          .svg-icon polygon,
          .svg-icon rect {
            fill: currentColor;
          }
        `}</style>
      </footer>
    </div>
  );
}

const footerNavs = [
  {
    label: "Quick Links",
    items: [
      {
        href: "/gallery",
        name: "Our Gallery",
      },
      {
        href: "/contact",
        name: "Contact Us",
      },
      {
        href: "/about",
        name: "About Us",
      },
    ],
  },
  {
    label: " Our Services",
    items: [
      {
        href: "/dentalEmergency",
        name: "Architectural Design",
      },
      {
        href: "/scalingPolishing",
        name: "Electrical System ",
      },
      {
        href: "/rootCanal",
        name: "Resconstruction Services",
      },
    ],
  },
  {
    label: "24/7 Hours Supports",
    items: [
      {
        name: "Email :- infoglobalbaluwa@gmail.com",
      },
      {
        name: "Call Us :- 9844375834 , 9860022606",
      },
      {
        name: "WhatsApp :- +977 9860022606 , 9844375834",
      },
    ],
  },
];
