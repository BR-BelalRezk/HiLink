import Image from "next/image";

type Props = {
  variant:
    | "btn_dark_green"
    | "btn_green"
    | "btn_white_text"
    | "btn_white"
    | "btn_dark_green_outline";
  icon?: string;
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  full?: boolean;
};
export default function Button({ text, type, icon, variant, full }: Props) {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full && "w-full"
      }`}
    >
      {icon && <Image src={icon} alt={text} width={25} height={25} />}
      <p className="bold-16 whitespace-nowrap cursor-pointer">{text}</p>
    </button>
  );
}
