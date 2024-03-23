import Image from "next/image";
import Link from "next/link";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "./constants";
import { ReactNode } from "react";

export default function Footer() {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href={"/"} className="mb-10">
            <Image
              src={"/hilink-logo.svg"}
              alt="hilink logo"
              width={75}
              height={30}
            />
          </Link>
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((item) => (
              <FooterColumn key={item.title} title={item.title}>
                <ul className="regular-14 flex flex-col gap-5 text-gray-30">
                  {item.links.map((link) => (
                    <li key={link}>
                      <Link href={"/"}>{link}</Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((item) => (
                  <Link
                    href={"/"}
                    key={item.label}
                    className="flex gap-5 md:flex-col lg:flex-row"
                  >
                    <p className=" whitespace-nowrap">{item.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {item.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-5 text-gray-30">
                  {SOCIALS.links.map((item) => (
                    <li key={item}>
                      <Link href={"/"}>
                        <Image src={item} alt="logo" width={25} height={25} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          2024 Hilink | All rights reserved
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4> {children}
    </div>
  );
}
