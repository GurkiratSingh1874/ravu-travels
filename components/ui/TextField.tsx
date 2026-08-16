import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function TextField(props: Props) {
  return (
    <input
      {...props}
      className="
      w-full
      rounded-2xl
      border
      border-slate-200
      bg-white
      px-5
      py-4
      text-lg
      shadow-sm
      outline-none
      transition
      duration-300
      focus:border-amber-500
      focus:ring-4
      focus:ring-amber-200
      "
    />
  );
}