"use client";

import { CldUploadWidget } from "next-cloudinary";

type Props = {
  onUpload: (url: string) => void;
};

export default function ImageUpload({ onUpload }: Props) {
  return (
    <CldUploadWidget
      uploadPreset="ravu_travels"
      onSuccess={(result) => {
        if (
          result?.info &&
          typeof result.info === "object" &&
          "secure_url" in result.info
        ) {
          onUpload(result.info.secure_url as string);
        }
      }}
    >
      {({ open }) => (
        <button
          type="button"
          onClick={() => open()}
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          Upload Images
        </button>
      )}
    </CldUploadWidget>
  );
}