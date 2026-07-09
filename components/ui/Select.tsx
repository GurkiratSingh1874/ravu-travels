import React from "react";

type Props = React.SelectHTMLAttributes<HTMLSelectElement>;

export default function Select(props: Props) {
  return (
    <select
      {...props}
      className="w-full rounded-md border border-gray-300 p-2"
    />
  );
}