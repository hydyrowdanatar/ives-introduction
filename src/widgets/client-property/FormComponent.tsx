"use client";

// src/widgets/client-property/FormComponent.tsx
import { useFormStore } from "@/shared/store/formStore";
import Button from "@/shared/ui/btn";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

// ─── Shared input styles ────────────────────────────────────────────────────
const inputCls =
  "w-full bg-[#F2F5F2] text-[#141412] placeholder:text-[#141412]/50 " +
  "text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[22px] " +
  "p-[10px] outline-none focus:ring-1 focus:ring-primary/40 " +
  "transition-all duration-150 rounded-[8px]";

const selectWrapCls = "relative";
const selectCls = inputCls + " appearance-none pr-10 cursor-pointer w-full";

const errCls = " ring-1 ring-red-400 focus:ring-red-400";

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
function AboutYouTab({ attempted }: { attempted: boolean }) {
  const { aboutYou, setAboutYou } = useFormStore();
  const e = (v: string) => (attempted && !v.trim() ? errCls : "");

  return (
    <div className="flex flex-col gap-3 xl:gap-4">
      <div className="flex flex-col lg:flex-row gap-2 xl:gap-4">
        <input
          className={inputCls + e(aboutYou.firstName)}
          placeholder="First Name"
          value={aboutYou.firstName}
          onChange={(e) => setAboutYou({ firstName: e.target.value })}
        />
        <input
          className={inputCls + e(aboutYou.lastName)}
          placeholder="Last Name"
          value={aboutYou.lastName}
          onChange={(e) => setAboutYou({ lastName: e.target.value })}
        />
      </div>
      <input
        className={inputCls + e(aboutYou.email)}
        placeholder="Email"
        type="email"
        value={aboutYou.email}
        onChange={(e) => setAboutYou({ email: e.target.value })}
      />
      <input
        className={inputCls + e(aboutYou.phoneNumber)}
        placeholder="Phone Number"
        type="tel"
        value={aboutYou.phoneNumber}
        onChange={(e) => setAboutYou({ phoneNumber: e.target.value })}
      />
    </div>
  );
}

// ─── Tab 2 – Property Details ────────────────────────────────────────────────
function PropertyDetailsTab({ attempted }: { attempted: boolean }) {
  const { propertyDetails, setPropertyDetails } = useFormStore();
  const e = (v: string) => (attempted && !v.trim() ? errCls : "");

  return (
    <div className="flex flex-col gap-3 xl:gap-4">
      <input
        className={inputCls + e(propertyDetails.streetAddress)}
        placeholder="Street Address"
        value={propertyDetails.streetAddress}
        onChange={(e) => setPropertyDetails({ streetAddress: e.target.value })}
      />
      <input
        className={inputCls + e(propertyDetails.city)}
        placeholder="City"
        value={propertyDetails.city}
        onChange={(e) => setPropertyDetails({ city: e.target.value })}
      />
      <div className="flex flex-col lg:flex-row gap-2 xl:gap-4">
        <input
          className={inputCls + e(propertyDetails.state)}
          placeholder="State"
          value={propertyDetails.state}
          onChange={(e) => setPropertyDetails({ state: e.target.value })}
        />
        <input
          className={inputCls + e(propertyDetails.zipcode)}
          placeholder="Zipcode"
          value={propertyDetails.zipcode}
          onChange={(e) => setPropertyDetails({ zipcode: e.target.value })}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-2 xl:gap-4">
        <input
          className={inputCls + e(propertyDetails.squareFootage)}
          placeholder="Square Footage"
          value={propertyDetails.squareFootage}
          onChange={(e) =>
            setPropertyDetails({ squareFootage: e.target.value })
          }
        />
        <input
          className={inputCls + e(propertyDetails.yearBuilt)}
          placeholder="Year Built"
          type="number"
          value={propertyDetails.yearBuilt}
          onChange={(e) => setPropertyDetails({ yearBuilt: e.target.value })}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-2 xl:gap-4">
        <div className={selectWrapCls + " flex-1"}>
          <select
            className={selectCls + e(propertyDetails.propertyType)}
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
          className={inputCls + " flex-1" + e(propertyDetails.numberOfUnits)}
          placeholder="Number of Units"
          type="number"
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
function CoverageTab({ attempted }: { attempted: boolean }) {
  const { coverage, setCoverage } = useFormStore();
  const e = (v: string) => (attempted && !v.trim() ? errCls : "");

  return (
    <div className="flex flex-col gap-3 xl:gap-4">
      <div className="flex flex-col lg:flex-row gap-2 xl:gap-4">
        <div className={selectWrapCls + " flex-1"}>
          <select
            className={selectCls + e(coverage.occupancy)}
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
            className={selectCls + e(coverage.knownLossesLast3Years)}
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
      <div
        className={
          "flex items-center bg-[#F2F5F2]" +
          (attempted && !coverage.propertyRebuildCost.trim()
            ? " ring-1 ring-red-400"
            : "")
        }
      >
        <span className="pl-4 text-[#141412]/50 text-[13px] xl:text-[15px] select-none">
          $
        </span>
        <input
          className={inputCls + " flex-1"}
          placeholder="Property Rebuild Cost"
          type="number"
          value={coverage.propertyRebuildCost}
          onChange={(e) => setCoverage({ propertyRebuildCost: e.target.value })}
        />
        <span className="pr-4 text-[#141412]/50 text-[12px] xl:text-[13px] select-none whitespace-nowrap">
          Price/Sqft
        </span>
      </div>

      {/* Loss of Use */}
      <div
        className={
          "flex items-center bg-[#F2F5F2]" +
          (attempted && !coverage.lossOfUseMonthlyRents.trim()
            ? " ring-1 ring-red-400"
            : "")
        }
      >
        <span className="pl-4 text-[#141412]/50 text-[13px] xl:text-[15px] select-none">
          $
        </span>
        <input
          className={inputCls + " flex-1"}
          placeholder="Loss of Use/Monthly Rents"
          type="number"
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
        <label
          className={
            "flex gap-3 items-start cursor-pointer rounded" +
            (attempted && !coverage.acknowledged
              ? " outline outline-1 outline-red-400 p-1"
              : "")
          }
        >
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
  const { currentTab, nextTab, prevTab, aboutYou, propertyDetails, coverage } =
    useFormStore();
  const router = useRouter();
  const [attempted, setAttempted] = useState(false);

  const isLastTab = currentTab === 2;

  const isTabValid = () => {
    if (currentTab === 0) {
      return !!(
        aboutYou.firstName.trim() &&
        aboutYou.lastName.trim() &&
        aboutYou.email.trim() &&
        aboutYou.phoneNumber.trim()
      );
    }
    if (currentTab === 1) {
      return !!(
        propertyDetails.streetAddress.trim() &&
        propertyDetails.city.trim() &&
        propertyDetails.state.trim() &&
        propertyDetails.zipcode.trim() &&
        propertyDetails.squareFootage.trim() &&
        propertyDetails.yearBuilt.trim() &&
        propertyDetails.propertyType.trim() &&
        propertyDetails.numberOfUnits.trim()
      );
    }
    if (currentTab === 2) {
      return !!(
        coverage.occupancy.trim() &&
        coverage.knownLossesLast3Years.trim() &&
        coverage.propertyRebuildCost.trim() &&
        coverage.lossOfUseMonthlyRents.trim() &&
        coverage.acknowledged
      );
    }
    return true;
  };

  const handleNext = () => {
    if (!isTabValid()) {
      setAttempted(true);
      return;
    }
    setAttempted(false);
    if (isLastTab) {
      router.push("/quote");
    } else {
      nextTab();
    }
  };

  const handlePrev = () => {
    setAttempted(false);
    prevTab();
  };

  return (
    <div className="w-full lg:w-[407px] xl:w-[513px] 2xl:w-[605px] 3xl:w-[790px] pb-5">
      {/* Progress bar */}
      <ProgressBar step={currentTab} />

      {/* Tab title */}
      <p className="text-[16px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[30px] font-medium text-[#141412] mb-5 xl:mb-6">
        {TAB_LABELS[currentTab]}
      </p>

      {/* Tab content */}
      <div className="">
        {currentTab === 0 && <AboutYouTab attempted={attempted} />}
        {currentTab === 1 && <PropertyDetailsTab attempted={attempted} />}
        {currentTab === 2 && <CoverageTab attempted={attempted} />}
      </div>

      {/* Navigation */}
      <div className="w-full flex justify-between items-center mt-8 gap-5">
        <Button
          title="BACK"
          className="border border-primary text-primary hover:bg-secondary hover:border-secondary"
          onClick={
            currentTab === 0 ? () => router.push("/intro") : handlePrev
          }
        // disabled={currentTab === 0}
        />
        {isLastTab ? (
          <Button
            title={"GET MY QUOTES"}
            className="bg-primary text-white hover:bg-secondary hover:text-primary"
            onClick={handleNext}
          />
        ) : (
          <Button
            title={"NEXT"}
            className="bg-primary text-white hover:bg-secondary hover:text-primary"
            onClick={handleNext}
          />
        )}
      </div>
    </div>
  );
};

export default FormComponent;
