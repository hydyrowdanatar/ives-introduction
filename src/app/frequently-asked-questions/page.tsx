import { Metadata } from "next";
import FAQ from "./FAQ";

export const meta: Metadata = {
  title: "Frequently Asked Questions | Ives",
};

export default function FrequentlyAskedQuestionsPage() {
  return <FAQ />;
}
