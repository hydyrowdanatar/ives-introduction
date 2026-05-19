"use client";

import { useFormStore } from "@/shared/store/formStore";
import Button from "@/shared/ui/btn";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const inputCls =
  "w-full bg-[#F2F5F2] text-[#141412] placeholder:text-[#141412]/50 " +
  "text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[22px] " +
  "p-[10px] outline-none focus:ring-1 focus:ring-primary/40 " +
  "transition-all duration-150 rounded-[8px]";

const selectWrapCls = "relative";
const selectCls = inputCls + " appearance-none pr-10 cursor-pointer w-full";
const errCls = " ring-1 ring-red-400 focus:ring-red-400";

type FieldErrors = Partial<Record<string, string>>;

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

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="text-red-400 text-[11px] -mt-1">{msg}</p>;
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
function PropertyDetailsTab({
  attempted,
  errors,
}: {
  attempted: boolean;
  errors: FieldErrors;
}) {
  const { propertyDetails, setPropertyDetails } = useFormStore();
  const e = (v: string) => (attempted && !v.trim() ? errCls : "");
  const eField = (field: string) =>
    attempted && errors[field] ? errCls : "";

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
        <div className="flex flex-col gap-1 flex-1">
          <input
            className={inputCls + eField("squareFootage")}
            placeholder="Square Footage"
            value={propertyDetails.squareFootage}
            onChange={(e) => setPropertyDetails({ squareFootage: e.target.value })}
          />
          {attempted && <FieldError msg={errors.squareFootage} />}
        </div>
        <input
          className={inputCls + " flex-1" + e(propertyDetails.yearBuilt)}
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
            onChange={(e) => setPropertyDetails({ propertyType: e.target.value })}
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
        <div className="flex flex-col gap-1 flex-1">
          <input
            className={inputCls + eField("numberOfUnits")}
            placeholder="Number of Units"
            type="number"
            value={propertyDetails.numberOfUnits}
            onChange={(e) => setPropertyDetails({ numberOfUnits: e.target.value })}
          />
          {attempted && <FieldError msg={errors.numberOfUnits} />}
        </div>
      </div>
    </div>
  );
}

// ─── Tab 3 – Coverage ─────────────────────────────────────────────────────────
function CoverageTab({
  attempted,
  errors,
}: {
  attempted: boolean;
  errors: FieldErrors;
}) {
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
            onChange={(e) => setCoverage({ knownLossesLast3Years: e.target.value })}
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
      <div className="flex flex-col gap-1">
        <div
          className={
            "flex items-center bg-[#F2F5F2]" +
            (attempted && errors.propertyRebuildCost ? " ring-1 ring-red-400" : "")
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
        {attempted && <FieldError msg={errors.propertyRebuildCost} />}
      </div>

      {/* Loss of Use */}
      <div className="flex flex-col gap-1">
        <div
          className={
            "flex items-center bg-[#F2F5F2]" +
            (attempted && errors.lossOfUseMonthlyRents ? " ring-1 ring-red-400" : "")
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
            onChange={(e) => setCoverage({ lossOfUseMonthlyRents: e.target.value })}
          />
        </div>
        {attempted && <FieldError msg={errors.lossOfUseMonthlyRents} />}
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
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const isLastTab = currentTab === 2;

  const getTabErrors = (): FieldErrors => {
    const sqft = Number(propertyDetails.squareFootage);
    const units = Number(propertyDetails.numberOfUnits);
    const dwelling = parseFloat(coverage.propertyRebuildCost);
    const rent = parseFloat(coverage.lossOfUseMonthlyRents);

    if (currentTab === 1) {
      return {
        squareFootage: !propertyDetails.squareFootage.trim()
          ? "Required"
          : isNaN(sqft) || sqft < 100 || sqft > 15000
          ? "Must be between 100 and 15,000"
          : undefined,
        numberOfUnits: !propertyDetails.numberOfUnits.trim()
          ? "Required"
          : isNaN(units) || units < 1 || units > 8
          ? "Must be between 1 and 8"
          : undefined,
      };
    }

    if (currentTab === 2) {
      const pricePerSqft = sqft > 0 && !isNaN(sqft) ? dwelling / sqft : 0;
      return {
        propertyRebuildCost: !coverage.propertyRebuildCost.trim()
          ? "Required"
          : isNaN(dwelling) || dwelling <= 0
          ? "Enter a valid amount"
          : pricePerSqft > 700
          ? "Exceeds maximum $700/sq ft"
          : undefined,
        lossOfUseMonthlyRents: !coverage.lossOfUseMonthlyRents.trim()
          ? "Required"
          : isNaN(rent) || rent <= 0
          ? "Enter a valid amount"
          : undefined,
      };
    }

    return {};
  };

  const isTabValid = (errors: FieldErrors): boolean => {
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
        propertyDetails.yearBuilt.trim() &&
        propertyDetails.propertyType.trim() &&
        !errors.squareFootage &&
        !errors.numberOfUnits
      );
    }
    if (currentTab === 2) {
      return !!(
        coverage.occupancy.trim() &&
        coverage.knownLossesLast3Years.trim() &&
        coverage.acknowledged &&
        !errors.propertyRebuildCost &&
        !errors.lossOfUseMonthlyRents
      );
    }
    return true;
  };

  const handleNext = async () => {
    setFormError(null);
    const errors = getTabErrors();
    if (!isTabValid(errors)) {
      setAttempted(true);
      return;
    }

    if (isLastTab) {
      setSubmitting(true);
      try {
        const params = new URLSearchParams({
          zipcode: propertyDetails.zipcode,
          sqft: propertyDetails.squareFootage,
          dwelling: coverage.propertyRebuildCost,
        });
        const res = await fetch(`/api/validate-property?${params}`);
        const data = await res.json();
        if (data.error) {
          setAttempted(true);
          setFormError(data.error);
          setSubmitting(false);
          return;
        }
      } catch {
        setFormError("Validation failed. Please try again.");
        setSubmitting(false);
        return;
      }
      setSubmitting(false);
      router.push("/quote");
      return;
    }

    setAttempted(false);
    nextTab();
  };

  const handlePrev = () => {
    setAttempted(false);
    setFormError(null);
    prevTab();
  };

  const tabErrors = getTabErrors();

  return (
    <div className="w-full lg:w-[407px] xl:w-[513px] 2xl:w-[605px] 3xl:w-[790px] pb-5">
      <ProgressBar step={currentTab} />

      <p className="text-[16px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[30px] font-medium text-[#141412] mb-5 xl:mb-6">
        {TAB_LABELS[currentTab]}
      </p>

      <div>
        {currentTab === 0 && <AboutYouTab attempted={attempted} />}
        {currentTab === 1 && (
          <PropertyDetailsTab attempted={attempted} errors={tabErrors} />
        )}
        {currentTab === 2 && (
          <CoverageTab attempted={attempted} errors={tabErrors} />
        )}
      </div>

      {formError && (
        <p className="mt-3 text-red-400 text-[12px]">{formError}</p>
      )}

      <div className="w-full flex justify-between items-center mt-8 gap-5">
        <Button
          title="BACK"
          className="border border-primary text-primary hover:bg-secondary hover:border-secondary"
          onClick={currentTab === 0 ? () => router.push("/intro") : handlePrev}
        />
        <Button
          title={isLastTab ? (submitting ? "Checking..." : "GET MY QUOTES") : "NEXT"}
          className="bg-primary text-white hover:bg-secondary hover:text-primary"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default FormComponent;
