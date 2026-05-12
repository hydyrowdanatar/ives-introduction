// import LandingPage from "./(landing)/LandingPage";

// export default function Home() {
//   return <LandingPage />;
// }

import { redirect } from "next/navigation";

export default function Home() {
  redirect("/intro");
}
