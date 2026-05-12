"use client";

// src/widgets/client-property/FormComponent.tsx
import { useFormStore } from "@/shared/store/formStore";
import PortfolioAsking from "@/widgets/client-property/PortfolioAsking";
import Button from "@/shared/ui/btn";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

// ─── Shared input styles ────────────────────────────────────────────────────
const inputCls =
  "w-full bg-[#F2F5F2] text-[#141412] placeholder:text-[#141412]/50 " +
  "text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[22px] " +
  "px-4 py-3 xl:py-3.5 2xl:py-4 outline-none focus:ring-1 focus:ring-primary/40 " +
  "transition-all duration-150";

const selectWrapCls = "relative";
const selectCls = inputCls + " appearance-none pr-10 cursor-pointer w-full";

// ─── Progress bar ────────────────────────────────────────────────────────────
function ProgressBar({ step }: { step: 0 | 1 | 2 }) {
  const pct = step === 0 ? 33 : step === 1 ? 66 : 100;
  return (
    <div className="w-full h-[3px] bg-[#F2F5F2] mb-6 xl:mb-8">
      <div
        className="h-full bg-primary transition-all duration-500"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

// ─── Tab 1 – About You ───────────────────────────────────────────────────────
function AboutYouTab() {
  const { aboutYou, setAboutYou } = useFormStore();
  return (
    <div className="flex flex-col gap-3 xl:gap-4">
      <div className="flex gap-3 xl:gap-4">
        <input
          className={inputCls}
          placeholder="First Name"
          value={aboutYou.firstName}
          onChange={(e) => setAboutYou({ firstName: e.target.value })}
        />
        <input
          className={inputCls}
          placeholder="Last Name"
          value={aboutYou.lastName}
          onChange={(e) => setAboutYou({ lastName: e.target.value })}
        />
      </div>
      <input
        className={inputCls}
        placeholder="Email"
        type="email"
        value={aboutYou.email}
        onChange={(e) => setAboutYou({ email: e.target.value })}
      />
      <input
        className={inputCls}
        placeholder="Phone Number"
        type="tel"
        value={aboutYou.phoneNumber}
        onChange={(e) => setAboutYou({ phoneNumber: e.target.value })}
      />
    </div>
  );
}

// ─── Tab 2 – Property Details ────────────────────────────────────────────────
function PropertyDetailsTab() {
  const { propertyDetails, setPropertyDetails } = useFormStore();
  return (
    <div className="flex flex-col gap-3 xl:gap-4">
      <input
        className={inputCls}
        placeholder="Street Address"
        value={propertyDetails.streetAddress}
        onChange={(e) => setPropertyDetails({ streetAddress: e.target.value })}
      />
      <input
        className={inputCls}
        placeholder="City"
        value={propertyDetails.city}
        onChange={(e) => setPropertyDetails({ city: e.target.value })}
      />
      <div className="flex gap-3 xl:gap-4">
        <input
          className={inputCls}
          placeholder="State"
          value={propertyDetails.state}
          onChange={(e) => setPropertyDetails({ state: e.target.value })}
        />
        <input
          className={inputCls}
          placeholder="Zipcode"
          value={propertyDetails.zipcode}
          onChange={(e) => setPropertyDetails({ zipcode: e.target.value })}
        />
      </div>
      <div className="flex gap-3 xl:gap-4">
        <input
          className={inputCls}
          placeholder="Square Footage"
          value={propertyDetails.squareFootage}
          onChange={(e) =>
            setPropertyDetails({ squareFootage: e.target.value })
          }
        />
        <input
          className={inputCls}
          placeholder="Year Built"
          value={propertyDetails.yearBuilt}
          onChange={(e) => setPropertyDetails({ yearBuilt: e.target.value })}
        />
      </div>
      <div className="flex gap-3 xl:gap-4">
        <div className={selectWrapCls + " flex-1"}>
          <select
            className={selectCls}
            value={propertyDetails.propertyType}
            onChange={(e) =>
              setPropertyDetails({ propertyType: e.target.value })
            }
          >
            <option value="" disabled>
              Property Type
            </option>
            <option value="single_family">Single Family</option>
            <option value="multi_family">Multi-Family</option>
            <option value="condo">Condo</option>
            <option value="commercial">Commercial</option>
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#141412]/50 pointer-events-none"
            size={16}
          />
        </div>
        <input
          className={inputCls + " flex-1"}
          placeholder="Number of Units"
          value={propertyDetails.numberOfUnits}
          onChange={(e) =>
            setPropertyDetails({ numberOfUnits: e.target.value })
          }
        />
      </div>
    </div>
  );
}

// ─── Tab 3 – Coverage ─────────────────────────────────────────────────────────
function CoverageTab() {
  const { coverage, setCoverage } = useFormStore();
  return (
    <div className="flex flex-col gap-3 xl:gap-4">
      <div className="flex gap-3 xl:gap-4">
        <div className={selectWrapCls + " flex-1"}>
          <select
            className={selectCls}
            value={coverage.occupancy}
            onChange={(e) => setCoverage({ occupancy: e.target.value })}
          >
            <option value="" disabled>
              Occupancy
            </option>
            <option value="owner">Owner Occupied</option>
            <option value="tenant">Tenant Occupied</option>
            <option value="vacant">Vacant</option>
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#141412]/50 pointer-events-none"
            size={16}
          />
        </div>
        <div className={selectWrapCls + " flex-1"}>
          <select
            className={selectCls}
            value={coverage.knownLossesLast3Years}
            onChange={(e) =>
              setCoverage({ knownLossesLast3Years: e.target.value })
            }
          >
            <option value="" disabled>
              Known Losses in Last 3 Years
            </option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3+">3+</option>
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#141412]/50 pointer-events-none"
            size={16}
          />
        </div>
      </div>

      {/* Property Rebuild Cost */}
      <div className="flex items-center bg-[#F2F5F2]">
        <span className="pl-4 text-[#141412]/50 text-[13px] xl:text-[15px] select-none">
          $
        </span>
        <input
          className={inputCls + " flex-1"}
          placeholder="Property Rebuild Cost"
          value={coverage.propertyRebuildCost}
          onChange={(e) => setCoverage({ propertyRebuildCost: e.target.value })}
        />
        <span className="pr-4 text-[#141412]/50 text-[12px] xl:text-[13px] select-none whitespace-nowrap">
          Price/Sqft
        </span>
      </div>

      {/* Loss of Use */}
      <div className="flex items-center bg-[#F2F5F2]">
        <span className="pl-4 text-[#141412]/50 text-[13px] xl:text-[15px] select-none">
          $
        </span>
        <input
          className={inputCls + " flex-1"}
          placeholder="Loss of Use/Monthly Rents"
          value={coverage.lossOfUseMonthlyRents}
          onChange={(e) =>
            setCoverage({ lossOfUseMonthlyRents: e.target.value })
          }
        />
      </div>

      {/* Disclaimer */}
      <div className="mt-1">
        <p className="text-[11px] xl:text-[13px] 2xl:text-[14px] text-[#141412] font-semibold mb-2">
          Policy Disclaimer &amp; Acknowledgement
        </p>
        <label className="flex gap-3 items-start cursor-pointer">
          <input
            type="checkbox"
            className="mt-0.5 accent-primary shrink-0"
            checked={coverage.acknowledged}
            onChange={(e) => setCoverage({ acknowledged: e.target.checked })}
          />
          <span className="text-[10px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] text-[#141412]/80 leading-relaxed">
            I understand that I am responsible for selecting the replacement
            cost coverage limit for my property. I acknowledge that the
            insurance company and agency are not recommending or guaranteeing
            that this amount will be sufficient to rebuild the property.
            <br />
            <br />I understand that this amount represents the maximum limit of
            insurance available, and any claim payment will be subject to the
            terms, conditions, and limits outlined in the policy.
          </span>
        </label>
      </div>
    </div>
  );
}

// ─── Main FormComponent ───────────────────────────────────────────────────────
const TAB_LABELS = ["About You", "Property Details", "Coverage"];

const FormComponent = () => {
  const { currentTab, nextTab, prevTab } = useFormStore();
  const router = useRouter();

  const isLastTab = currentTab === 2;

  return (
    <div className="w-[407px] xl:w-[513px] 2xl:w-[605px] 3xl:w-[790px]">
      {/* Progress bar */}
      <ProgressBar step={currentTab} />

      {/* Tab title */}
      <p className="text-[16px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[30px] font-medium text-[#141412] mb-5 xl:mb-6">
        {TAB_LABELS[currentTab]}
      </p>

      {/* Tab content */}
      <div className="">
        {currentTab === 0 && <AboutYouTab />}
        {currentTab === 1 && <PropertyDetailsTab />}
        {currentTab === 2 && <CoverageTab />}
      </div>

      {/* Navigation */}
      <div className="w-full flex justify-between items-center mt-8">
        <Button
          title="BACK"
          className="border border-primary text-primary hover:bg-secondary hover:border-secondary"
          onClick={prevTab}
          disabled={currentTab === 0}
        />
        {isLastTab ? (
          <Button
            title={"GET MY QUOTES"}
            className="bg-primary text-white hover:bg-secondary hover:text-primary"
            onClick={() => router.push("/quote")}
          />
        ) : (
          <Button
            title={"NEXT"}
            className="bg-primary text-white hover:bg-secondary hover:text-primary"
            onClick={nextTab}
          />
        )}
        {/* <Button
          title={isLastTab ? "GET MY QUOTES" : "NEXT"}
          className="bg-primary text-white"
          onClick={nextTab}
        /> */}
      </div>
    </div>
  );
};

export default FormComponent;
