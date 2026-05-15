import { Metadata } from "next";
import Bindpage from "./BindPage";

export const metadata: Metadata = {
  title: "Bind Policy",
  description:
    "Finalize your Mynd Managed Advantage landlord insurance policy.",
};

export default function BindPage() {
  return <Bindpage />;
}
