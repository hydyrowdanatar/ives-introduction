// app/client-property/page.tsx  ← thin server wrapper
import type { Metadata } from "next";
import ClientPropertyContent from "./ClientPropertyContent";

export const metadata: Metadata = {
  title: "Client Property | Ives",
  description:
    "Enter your rental property details to get insurance coverage options.",
};

export default function ClientPropertyPage() {
  return <ClientPropertyContent />;
}
