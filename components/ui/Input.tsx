import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: Props) {
  return (
    <input
      {...props}
      className="w-full rounded-md border border-gray-300 p-2 outline-none focus:border-black"
    />
  );
}