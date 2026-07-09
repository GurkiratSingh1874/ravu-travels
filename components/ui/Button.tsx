import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: Props) {
  return (
    <button
      {...props}
      className="rounded-md bg-black px-5 py-2 text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
    />
  );
}