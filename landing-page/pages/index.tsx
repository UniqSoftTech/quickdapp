import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  function onGetStarted() {
    router.push("/get-started");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <div className="">
        <div className="flex flex-row gap-4">
          <p className="text-5xl opacity-30 text-blue-400 font-mono">
            Welcome to
          </p>
          <p className="text-5xl text-yellow-400 font-mono animate-pulse font-bold">
            QuickDapp
          </p>
        </div>

        <button
          onClick={onGetStarted}
          className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden font-medium text-yellow-600 transition duration-300 ease-out border-2 border-yellow-500 rounded-lg shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-yellow-500 group-hover:translate-x-0 ease">
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
  );
}
