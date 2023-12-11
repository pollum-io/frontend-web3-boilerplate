// metadata.js
import { siteConfig } from "@/constant/config";
import { BigNumberish } from "ethers";

export const metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: `/favicon/site.webmanifest`,
};


const safeNumber = (value: BigNumberish | null) => {
  const num = Number(value);
  return isNaN(num) ? 0 : num;
};