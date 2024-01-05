import Head from "next/head";
import Image from "next/image";

import { Button } from "@/src/components/core/mui-tailwind";

/* ASSETS */
import NotFound from "@/public/images/icons/404-illustration.png";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <section className="h-screen">
      <Head>
        <title>Page not found</title>
      </Head>

      <div className="container flex items-center justify-center h-full">
        <div className="text-center">
          <Image
            src={NotFound}
            className="w-96 h-96 mx-auto"
            alt="Page Not Found"
          />
          <h1 className="text-5xl font-sfpro-bold text-black">
            Oops! Page not found
          </h1>
          <p className="text-2xl font-mabry-medium text-black mt-4">
            Sorry, the page you&apos;re looking for doesn&apos;t exist. If you
            think something is
            <br />
            broken, go to the homepage.
          </p>
          <Link href={"/"}>
            <Button className="bg-black shadow-none hover:shadow-none font-normal text-base font-mabry-regular tracking-wide text-white normal-case hover:bg-opacity-80 mt-5">
              Go to homepage
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;