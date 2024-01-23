import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

type Props = {};

const Navbar = (props: Props) => {
  // states
  const [mounted, setMounted] = useState<boolean>(false);
  const { resolvedTheme, setTheme } = useTheme();

  //   instances
  const router = useRouter();

  // hooks
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex justify-between py-6 items-center">
      {/* title */}
      <Link href="/">
        <h1
          className="text-xl font-bold  dark:border-radius: 65px;
background: #322f2f;
box-shadow:  -19px 19px 37px #141313,
             19px -19px 37px #504b4b; p-2 rounded-xl hover:shadow-md transition duration-300 ease-in-out"
        >
          Personal Dev
        </h1>
      </Link>

      <button
        aria-label="Toogle Dark Mode"
        type="button"
        className="w-9 h-9 bg-zinc-200 rounded-lg dark:bg-zinc-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {mounted && (
          <>
            {resolvedTheme === "dark" ? (
              <>
                <MoonIcon className="w-5 h-5" />
              </>
            ) : (
              <>
                <SunIcon className="w-5 h-5" />
              </>
            )}
          </>
        )}
      </button>
    </div>
  );
};

export default Navbar;
