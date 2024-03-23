import Image from "next/image";
import { PEOPLE_URL } from "./constants";

type Props = {
  bgImg: string;
  title: string;
  subTitle: string;
  pj: string;
};

const CampSite = ({ bgImg, title, subTitle, pj }: Props) => (
  <div
    className={`h-full w-full min-w-[1100px] bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl ${bgImg}`}
  >
    <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-5">
        <div className="rounded-full bg-green-50 p-5">
          <Image
            src={"/folded-map.svg"}
            alt="folded-map"
            width={30}
            height={30}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subTitle}</p>
        </div>
      </div>
      <div className="flexCenter gap-5">
        <span className="flex -space-x-5 overflow-hidden">
          {PEOPLE_URL.map((item) => (
            <Image
              src={item}
              key={item}
              alt="people"
              width={50}
              height={50}
              className="inline-block h-10 w-10 rounded-full"
            />
          ))}
        </span>
        <p className="bold-16 md:bold-20 text-white">{pj}</p>
      </div>
    </div>
  </div>
);

export default function Camp() {
  return (
    <section className=" 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[240px] w-full items-center justify-start gap-10 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          bgImg="bg-bg-img-1"
          title="Putuk Truno camp"
          subTitle="Prigen, Pasuruan"
          pj="50+ Joined"
        />
        <CampSite
          bgImg="bg-bg-img-2"
          title="Mountain View Camp"
          subTitle="Somewhere in the Wilderness"
          pj="50+ Joined"
        />
      </div>
      <div className="flexEnd mt-10 px-5 lg:-mt-60 lg:mr-5">
        <div className="bg-green-50 p-10 lg:max-w-[500px] xl:max-w-[735px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            {"That's"} why we are here for those of you who want to start an
            adventure
          </p>
          <Image
            src={"/quote.svg"}
            alt="camp-2"
            width={185}
            height={220}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
}
