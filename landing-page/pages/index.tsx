import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  function onGetStarted() {
    router.push("/get-started");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-blue-800 via-transparent to-black opacity-50 pointer-events-none"></div>

      <div className="animate-pulse relative z-[1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[280px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 after:from-sky-900 after:via-[#0141ff] after:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[560px]" />
      <div className="">
        <div className="flex flex-row gap-4">
          <p className="text-5xl opacity-30 text-blue-400 font-mono">
            Welcome to
          </p>
          <p className="text-5xl text-yellow-400 font-mono animate-pulse font-bold">
            QuickDapp
          </p>
        </div>

        <div className="mt-10">
          <button
            onClick={onGetStarted}
            className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden font-medium text-yellow-600 transition duration-300 ease-out border-2 border-yellow-500 rounded-lg shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease bg-transparent">
              ⚡
            </span>

            <span className="absolute flex items-center text-base font-semibold justify-center w-full h-full text-yellow-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              ⚡ Get started
            </span>

            <span className="relative text-base font-semibold invisible">
              ⚡ Get started
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
