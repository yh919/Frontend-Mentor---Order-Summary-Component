import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 sm:p-24">
      <div className="flex flex-col gap-8 items-center justify-center bg-slate-50 h-full w-[325px] sm:w-auto rounded-lg">
        <div className="flex flex-col gap-3 items-center justify-center">
          <Image
            src="/images/illustration-hero.svg"
            alt="header img"
            className="rounded-lg w-full"
            width={1024}
            height={100}
          />
          <h1 className="text-lg sm:text-3xl font-extrabold mt-6">
            Order Summary
          </h1>
          <p className="text-sm max-w-xs text-center text-gray-500">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like
          </p>
        </div>
        <div className="flex gap-16 items-center justify-around bg-slate-100 py-3 sm:py-4 px-5 sm:px-8 rounded-lg">
          <div className="flex gap-1.5 items-center">
            <Image
              src="/images/icon-music.svg"
              alt="header img"
              className="rounded-lg"
              width={50}
              height={50}
            />
            <div className="flex flex-col items-center">
              <h1 className="font-semibold">Annual Plan</h1>
              <p className="text-sm text-center text-gray-500">$59.99/year</p>
            </div>
          </div>
          <h2 className="text-sm font-bold text-indigo-700 mx-auto cursor-pointer hover:text-indigo-500 transition duration-500 ease-in-out">
            Change
          </h2>
        </div>
        <div>
          <button className="bg-indigo-600 text-white py-3 sm:py-3 font-bold text-sm px-12 sm:px-20 rounded-lg hover:bg-indigo-500 transition duration-500 ease-in-out">
            Proceed to Payment
          </button>
          <p className="text-md font-bold cursor-pointer text-center m-6 text-gray-500 hover:text-gray-900 transition duration-500 ease-in-out">
            Cancel Order
          </p>
        </div>{" "}
      </div>
      <div className="attribution">
        Challenge by
        <span className="mx-1">
          <a
            href="https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj"
            target="_blank"
          >
            Frontend Mentor
          </a>
        </span>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/yh919">
          Youssef Hussein
        </a>
        .
      </div>
    </main>
  );
}
