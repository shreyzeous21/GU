import React from "react";

type Props = {};

const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      target={"_blank"}
      className="text-zinc-500 hover:text-zinc-600 transition"
    >
      {children}
    </a>
  );
};

function Footer({}: Props) {
  return (
    <div className="flex flex-col justify-center my-4">
      <hr className="w-full border-1 border-zinc-200 dark:border-zinc-800 mb-8" />

      {/* website links */}
      <div className="flex flex-col space-y-4">
        <h1 className="text-md font-bold">Social Links</h1>

        {/* youtube */}
        <ExternalLink href="https://www.instagram.com/shrey_sadhukha/">
          Instagram
        </ExternalLink>
        {/* medium */}
        <ExternalLink href="https://codepen.io/shreyzeous21">
          Codepen.io
        </ExternalLink>
        {/* twitter */}
        <ExternalLink href="https://www.linkedin.com/in/shrey-sadhukhan-a96590201/">
          Linkedin
        </ExternalLink>
        <div className="mt-8 text-center">
          <p className="border-2 rounded-xl dark:border-white border-black p-2 bg-white dark:bg-black dark:text-white ">
            &copy; 2024 Personal Blog. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
