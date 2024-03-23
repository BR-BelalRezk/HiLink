import { NAV_LINKS } from "./constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Header() {
  return (
    <header className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href={"/"}>
        <Image src={"/hilink-logo.svg"} alt="logo" width={75} height={30} />
      </Link>
      <nav>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((item) => (
            <li
              key={item.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="lg:flexCenter hidden">
        <Button
          text="Login"
          type="button"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        src={"/menu.svg"}
        alt="menu"
        width={30}
        height={30}
        className="inline-block cursor-pointer lg:hidden"
      />
    </header>
  );
}
