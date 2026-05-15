const FAQ = () => {
  return (
    <div className="w-full">
      <div className="w-[86%] mx-auto py-[70px] xl:py-[93px] 2xl:py-[110px] 3xl:py-[140px] flex flex-col gap-[45px]">
        <h1 className="text-[24px] lg:text-[30px] xl:text-[38px] 2xl:text-[44px] 3xl:text-[60px] leading-[37px] lg:leading-[44px] xl:leading-[55px] 2xl:leading-[65px] 3xl:leading-[55px] font-semibold">
          Frequently Asked Questions
        </h1>

        {questions.map((q, i) => {
          return (
            <div key={`key-${i}`} className="flex flex-col gap-4">
              <h3 className="text-[16px] xl:text-[18px] 2xl:text-[22px] 3xl:text-[25px] font-medium">
                {q.question}
              </h3>
              <p className="text-[13px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[22px]">
                {q.answer}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;

const questions = [
  {
    question: "Why the policy is so much better than other carriers?",
    answer:
      "Ives Insurance Services has taken the time to sit down with Stessa and create a proprietary insurance program just for Stessa customers that has logical coverage & competitive rates. Our policy contains comprehensive coverage on a replacement cost basis up to the policy limits, includes the liability coverage that many policies do not and provides logical property coverage that keeps pricing competitive. We provide the coverage needed to give you a life without worry. We do not distract you with bells and whistles of coverage you do not need and do not add additional exclusions or limits to the policy. We are confident that we are providing a very comprehensive program and our proposal we hope shows that clearly!",
  },
  {
    question: "What makes this policy different?",
    answer:
      "We have been in business for 60+ years and write insurance across the US with a focus on the real estate programs and habitational industry. We know and understand this market. We have leveraged our unparalleled relationships with underwriters to create an exclusive program designed with the proper protection for MYND and its clients as the top priority. We understand and work directly with clients during the claims process and we are always here to lend a helping hand whenever needed. We are a full service brokerage and can become a part of your real estate portfolio team, and we are here for you as you grow!",
  },
  {
    question:
      "What coverage examples of liability sets the Mynd program apart?",
    answer:
      "There are no exclusions on habitability lawsuits, dangerous dog bite coverage, and assault and battery coverage. This is very unique! The property coverage includes Mold extraction coverage, terrorism property damage, and the policy goes up to dwelling limit on water damage claims. We provide the option of including wind hail coverage, or for other investors who have a higher risk tolerance, the option to self insure and save money on a per property basis. On top of that we provide $25,000 for water back up coverage which typically is limited to 5,000 on a landlord policy. *please note more coverages can be seen on proposal*",
  },
  {
    question: "What are common exclusions in the policy?",
    answer:
      "Common exclusions in even the most comprehensive landlord policies include: earthquake and flood (which we can quote you on separate policies), Sinkholes or landslides that damage the property, Water damage caused from seepage through foundation, or wear and tear claims because the property has not been properly updated.",
  },
  {
    question: "What are the deductible options?",
    answer:
      "Different deductible amounts on dwelling vs wind/hail – we have 5 deductibles for our investors to choose from $2500/$5000/$10,000/25,000/$50,000. They can be chosen on a per home basis. Depending on the location of the property there are different wind/hail deductible options that can range from the standard fixed deductible to 1-5% deductible options.",
  },
  {
    question: "What is my liability deductible?",
    answer:
      "If you are sued for a covered claim, you do not have to pay a deductible for your insurance coverage to trigger defense coverage.",
  },
  {
    question: "Can Ives Insurance Manage all of my insurance needs?",
    answer:
      "Yes, we are a full service insurance brokerage. However, ONLY properties managed by MYND can be added to the master policy currently being offered. If property is transferred to another property management company another policy will need to be obtained within 30 days. Also, if you have any other properties, now is the time to sign up for management service with MYND, the best property management company around! However, Ives can also provide competitive quotes for your rental properties, personal home, businesses, auto, and more. Due to being a client of MYND there are additional discounts available on these policies! Please contact us directly to inquire: mynd@ivesins.com or call Ives Insurance at 619-794-2710",
  },
  {
    question: "Does the investor have to use Ives Insurance Services?",
    answer:
      "No. They can choose any insurance carrier of their choice. However, in the event the investor opts out of Ives insurance coverage, Mynd will not be responsible for making payments or monitoring billing.",
  },
  {
    question: "What happens if I am served a lawsuit?",
    answer:
      "Being served a lawsuit is frightening, whether you know it is coming or not. You will forward the lawsuit over to our insurance team and we will take it from there. Your policy will step in immediately and start the investigation process. Once coverage is determined*, they will contact all parties necessary, including the plaintiffs' attorney, and get to work on getting the claim closed. You can have peace of MYND knowing that you have a full team behind you ready to defend. *Based on coverage outlined in policy forms, exclusions apply.",
  },
  {
    question: "Will I have coverage during times of vacancy?",
    answer:
      "Focus on finding the perfect tenant, not your insurance. Rest easy knowing there is no need to rewrite your policy if your property is vacant or under renovation or be concerned if coverage still applies. Most policies only provide coverage for 30-60 days during vacancy or renovation, however our program provides coverage for an unlimited number of days. Vacancy insurance policies can be expensive, luckily you have coverage built in.",
  },
  {
    question: "What is terrorism coverage and why do I need it?",
    answer:
      "It's an unfortunate fact that we have had terrorist acts so close to home. Terrorism coverage provides coverage for damage to property due to the explosion, fire, or smoke of a terrorist attack. After September 11, 2001, this type of coverage was vague. The Terrorism Insurance Act now requires you to accept or reject coverage. Many do not realize that in order to include the coverage, they must accept coverage and pay extra - otherwise you may have rejected it and not realized it. This coverage is built into the program automatically with no additional charge.",
  },
  {
    question: "What is ordinance and law coverage A, B, & C?",
    answer:
      "In the event your property is fully or partially destroyed by a covered loss, ordinance or law coverage will help to cover the costs of updating your house to ensure it meets current building codes. Construction can be halted until the entire building & rebuild plans have incorporated current building laws. With the MYND insurance program, coverage A will be up to dwelling limit for coverage to loss of the undamaged portion of the building, Coverage B & C each up to 10% of additional coverage for demolition costs & increased costs of construction.",
  },
  {
    question:
      "Why does my policy show a separate limit for Water Backup coverage?",
    answer:
      "Water backup coverage is different from standard water damage coverage and is often excluded or heavily limited in many landlord insurance policies. Water backup refers to situations where water or sewage backs up through drains, sewer lines, or sump pumps, such as a clogged sewer line or failed sump pump. These events can cause significant damage and often require extensive cleanup and testing. Because these claims can be costly, many policies limit this coverage to $5,000–$7,500. Under this program, water backup coverage is provided with an increased limit of $25,000, helping provide stronger protection if this type of loss occurs.",
  },
  {
    question:
      "Why do I need $1,000,000 of liability coverage when my property management company only requires $300,000?",
    answer:
      "Most policies have liability limits ranging from $300,000 to $500,000. During desperate times, slip and fall and uninhabitable lawsuits increase. These can be very costly. It is suggested that the amount of liability you have on all your insurance policies provides enough coverage to protect the total value of your assets. We know that may be more than $1,000,000 in value so therefore additional liability can be purchased as well! Just ask!",
  },
  {
    question: "Is Windstorm included in this policy?",
    answer:
      "Yes! In the unlikely event that you would not want this coverage, we are able to exclude wind/hail coverage when requested. Wind/hail coverage can be costly in states with higher exposure to storms. If you do not have a lender that requires this coverage, and wish to self-insure wind/hail losses, we can remove this coverage per request, however we suggest that it remain on the policy.",
  },
  {
    question:
      "I thought all water damage was covered by insurance. Why do I see separate water backup coverage, and could my policy limit water damage?",
    answer:
      "Water damage coverage can be confusing because there are different types of water-related claims addressed in insurance policies. Traditional landlord insurance typically covers sudden and accidental water damage, such as a burst pipe, leaking water heater, or an overflowing dishwasher. However, due to the changing insurance market, some newer landlord policies now limit the amount of coverage available for water damage, since these claims are among the most common and costly losses for rental properties. It is important to understand that water damage coverage is different from water backup coverage, which specifically applies to water or sewage backing up through drains, sewer lines, or sump pumps and is usually provided with a separate limit. With the policies we offer, sudden and accidental water damage is covered up to the dwelling/rebuild limit of the property, providing stronger protection if a major incident occurs. Many popular landlord policies in the marketplace include sub-limits on water damage, which could leave property owners responsible for significant out-of-pocket costs if a pipe bursts or an appliance causes flooding in the home, making it very important for landlords to understand how water damage is handled in their policy.",
  },
  {
    question: "Why is liability coverage so important?",
    answer:
      "Being a landlord can be financially profitable, but it does come with some risks. Liability is arguably the most important insurance coverage on a policy. The reason is that for Property coverage you can estimate a cost to rebuild based on construction costs in the event of a total loss. Landlord liability insurance protects landlords against claims of habitability, tenant damage, or bodily injury or property damage arising from a 3rd party such as a tenant, a tenant's guest, a contractor, or even someone that isn't doing business with you at all. Although there are situations where you may be sued and feel you have not been negligent but without the right defense and proper liability coverage you could be left with a big attorney bill to pay out of your own pocket.",
  },
  {
    question: "What is loss of rents/loss of use?",
    answer:
      "If a covered claim occurs and it requires your tenant to be out of the property while it is being repaired or rebuilt, that means you are losing rent! In order to make sure you are still receiving cash flow during a time of loss, this coverage makes sure you are being paid each month while the home is being repaired.",
  },
  {
    question: "What are vacancy clauses and why should they be avoided?",
    answer:
      "Every insurance policy has a vacancy clause, the amount of time is what differs from policy to policy. It states that if a claim occurs after a certain amount of time there will be restricted or no coverage. This is extremely important for a rental property because if you are doing renovations or are in between tenants you could be paying for a policy that would not cover certain perils because of the timing. When there is a vacancy clause present, it is suggested to get a vacant policy or a separate renovation policy on top of the policy you currently have for the property, which can be pricey.",
  },
  {
    question: "What is wind/hail coverage?",
    answer:
      "Wind and hail coverage are among the primary perils in property insurance coverage. Extreme versions of the coverage would be to cover damage caused by a hurricane, tornado or a snow storm. In 19 states wind insurance is a separate policy or has to be intentionally added to an insurance policy. If it is added you will have a separate deductible which is typically a percentage of your dwelling limit ranging from 1%-5%.",
  },
  {
    question: "What is a deductible?",
    answer:
      "A deductible is an amount of money that you choose to pay prior to the insurance carrier covering an insurance claim for you. The higher the deductible, the lower the insurance premium.",
  },
  {
    question: "What is a flood policy? Its optional unless its not.....",
    answer:
      "Flood is not a covered peril on an insurance policy and is different than water damage. Flood insurance covers an excess of water on land that is normally dry, affecting two or more acres of land or two or more properties. An easy way to think about it is any outside water coming into your rental property and causing damage would be considered a flood. This coverage can be purchased through a separate policy and if the home is located in a flood zone it can be required by your lender.",
  },
  {
    question: "What is earthquake coverage?",
    answer:
      "It's optional. Earthquake is not covered by a landlord policy unless endorsed on it or a separate policy is purchased. About 200,000 earthquakes occur each year, most are small and do not cause much damage. However some are catastrophic. Earthquake insurance covers damage to your rental property, appliances you are providing for tenants and loss of rents after an earthquake. It may be good to check where your property is located in comparison to fault lines!",
  },
  {
    question: "What is the deal with earthquake and flood coverage?",
    answer:
      "Earthquake and Flood (outside waters coming into the property) coverage are two perils of insurance that are not covered on a typical landlord policy. If you are in an area where there is high risk for earthquake or flood insurance a lender may require you to purchase it. Whether it is required or not, it is also highly recommended. The last thing you want is your home to wash away in a flood or an earthquake to crumble the rental property and you to be without coverage!",
  },
  {
    question:
      "Why does a property manager ask to be listed as an additional insured?",
    answer:
      "It is typically required by the property management's corporate insurance policy & their management agreements. Despite the way it sounds, it is actually a huge benefit to both the property management company and the landlord. The importance of this from an owner's standpoint is when they add their property management company to the landlord policy it helps make the claims or the litigation process run smooth. It provides a unified defense in a lawsuit! There are some insurance carriers who will not offer the option but whether it is required or not it is highly recommended to add the PM.",
  },
  {
    question:
      "What is the big deal about exclusions if all policies have them?",
    answer:
      "Many people assume that all insurance policies are the same and it is quite the opposite. Every insurance policy terms and conditions are different and so are their exclusions. In the habitability world more and more exclusions are starting to appear on liability policies for major claims. For example, one of the top liability lawsuits that occur across the US is habitability lawsuits. Many policies are starting to add this into their liability exclusions. Dangerous animal exclusions/complete animal exclusions are fairly common in landlord policies now. It is important to make sure you understand what you are paying or not paying for on your insurance policy. A less expensive policy may seem enticing, however, it may include exclusions, that if served a lawsuit, you wish you had coverage for on the policy.",
  },
  {
    question:
      "Why are specific lawsuits such as Habitability, Dog Bite, and Assault and Battery singled out on the quote proposal?",
    answer:
      "All policies are not created equal. The lengthy policy forms outlining all of the legal inclusions and exclusions of an insurance policy make a huge difference and can vastly vary from policy to policy. The top lawsuits that landlords face in the United States are habitability issues, dog bites, and assault or battery on-premises. Even if you do not allow your tenants to have dogs, you are still exposed to this risk through 'service-animals' and even guests animals. Although these are three of the top liability lawsuits that you would assume you have insurance coverage for, it is becoming very common that all 3 are completely excluded from landlord policies! Ives has made sure this program provides a quality policy that provides you a peace of Mynd knowing you have comprehensive coverage coupled with competitive rates.",
  },
];
