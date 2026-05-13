import { Metadata } from "next";
import QuoteSelectingPage from "./QuoteSelectingPage";

export const metadata: Metadata = {
  title: "Your Quotes",
  description:
    "Compare three landlord coverage packages and choose the best fit for your property.",
};

export default function ClientPropertyPage() {
  return <QuoteSelectingPage />;
}
