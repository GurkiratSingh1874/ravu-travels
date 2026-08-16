import { TextareaHTMLAttributes } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function TextArea(props: Props) {
  return (
    <textarea
      {...props}
      className="
      w-full
      rounded-2xl
      border
      border-slate-200
      bg-white
      px-5
      py-4
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