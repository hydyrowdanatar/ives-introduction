import { Metadata } from "next";
import Payment from "./Paymentcsr";

export const metadata: Metadata = {
  title: "Payment | Ives",
  // description:
  //   "Complete your Mynd Managed Advantage policy — no payment required today.",
};

export default function PaymentPage() {
  return <Payment />;
}
