"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { OTP_SLOTS } from "@/constants/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Verify() {
  const router = useRouter();
  const handleOTP = (otp: string) => {
    if (otp.length === OTP_SLOTS) {
      router.push("/sign-up/personality-type");
    }
  };
  return (
    <>
      <h1 className="text-dark-600 text-4xl text-center font-bold mb-2">
        Verification
      </h1>
      <p className="text-dark-500 max-w-[273px] text-center mx-auto font-light mb-7">
        Enter the 6-digit code we sent to
      </p>
      <p className="text-dark-600 text-xl max-w-[273px] text-center mx-auto font-semibold mb-12">
        ayodeji.oguntade@gmail.com
      </p>
      <div className="size-32 bg-primary/50 rounded-full flex flex-col justify-center mx-auto mb-10">
        <Image
          src="/images/icons/lock-icon.svg"
          alt="lock icon"
          width={54}
          height={54}
          className="m-auto"
        />
      </div>
      <InputOTP maxLength={OTP_SLOTS} onChange={handleOTP}>
        <InputOTPGroup className="mx-auto">
          {Array.from({ length: OTP_SLOTS }).map((_, i) => (
            <InputOTPSlot key={i} index={i} />
          ))}
        </InputOTPGroup>
      </InputOTP>
    </>
  );
}
