"use client";

import Button from "@/shared/ui/btn";
import { useBindStore, AdditionalInsured } from "@/shared/store/bindStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

// ─── Shared styles ────────────────────────────────────────────────────────────
const inputCls =
  "w-full bg-[#F2F5F2] text-[#141412] placeholder:text-[#141412]/50 " +
  "text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] " +
  "px-4 py-3 xl:py-3.5 2xl:py-4 outline-none " +
  "focus:ring-1 focus:ring-primary/40 transition-all duration-150 rounded-[4px]";

const sectionTitleCls =
  "text-[16px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[28px] font-normal text-[#141412]";

const errCls = " ring-1 ring-red-400 focus:ring-red-400";

// ─── Insured Information Section ──────────────────────────────────────────────
function InsuredInfoSection({ attempted }: { attempted: boolean }) {
  const { insuredInfo, setInsuredInfo } = useBindStore();
  const e = (v: string) => (attempted && !v.trim() ? errCls : "");

  return (
    <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4">
      <p className={sectionTitleCls}>Insured Information</p>

      {/* Quote number */}
      <p className="text-primary text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] font-medium">
        &lt;Quote Number&gt;
      </p>

      {/* First + Last name */}
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-3 xl:gap-4">
        <input
          className={inputCls + e(insuredInfo.clientFirstName)}
          placeholder="Client First Name"
          value={insuredInfo.clientFirstName}
          onChange={(e) => setInsuredInfo({ clientFirstName: e.target.value })}
        />
        <input
          className={inputCls + e(insuredInfo.clientLastName)}
          placeholder="Client Last Name"
          value={insuredInfo.clientLastName}
          onChange={(e) => setInsuredInfo({ clientLastName: e.target.value })}
        />
      </div>

      {/* Mailing Address 1 */}
      <input
        className={inputCls + e(insuredInfo.mailingAddress1)}
        placeholder="Mailing Address 1"
        value={insuredInfo.mailingAddress1}
        onChange={(e) => setInsuredInfo({ mailingAddress1: e.target.value })}
      />

      {/* Mailing Address 2 */}
      <input
        className={inputCls}
        placeholder="Mailing Address 2"
        value={insuredInfo.mailingAddress2}
        onChange={(e) => setInsuredInfo({ mailingAddress2: e.target.value })}
      />

      {/* City */}
      <input
        className={inputCls + e(insuredInfo.city)}
        placeholder="City"
        value={insuredInfo.city}
        onChange={(e) => setInsuredInfo({ city: e.target.value })}
      />

      {/* State + Zip */}
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-3 xl:gap-4">
        <input
          className={inputCls + e(insuredInfo.state)}
          placeholder="State"
          value={insuredInfo.state}
          onChange={(e) => setInsuredInfo({ state: e.target.value })}
        />
        <input
          className={inputCls + e(insuredInfo.zipcode)}
          placeholder="Zipcode"
          value={insuredInfo.zipcode}
          onChange={(e) => setInsuredInfo({ zipcode: e.target.value })}
        />
      </div>

      {/* Email */}
      <input
        className={inputCls + e(insuredInfo.email)}
        placeholder="Email"
        type="email"
        value={insuredInfo.email}
        onChange={(e) => setInsuredInfo({ email: e.target.value })}
      />

      {/* Phone */}
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-3 xl:gap-4">
        <input
          className={inputCls + e(insuredInfo.phoneNumber)}
          placeholder="Phone Number"
          type="tel"
          value={insuredInfo.phoneNumber}
          onChange={(e) => setInsuredInfo({ phoneNumber: e.target.value })}
        />
      </div>
    </div>
  );
}

// ─── Single Additional Insured Block ─────────────────────────────────────────
function AdditionalInsuredBlock({
  insured,
  index,
  showRemove,
  attempted,
}: {
  insured: AdditionalInsured;
  index: number;
  showRemove: boolean;
  attempted: boolean;
}) {
  const { setAdditionalInsured, removeAdditionalInsured } = useBindStore();
  const set = (data: Partial<AdditionalInsured>) =>
    setAdditionalInsured(insured.id, data);
  const e = (v: string) => (attempted && !v.trim() ? errCls : "");

  return (
    <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 mt-9 lg:mt-0">
      {/* Block header */}
      <div className="flex items-center justify-between">
        {index > 0 && (
          <p className="text-[13px] xl:text-[15px] text-[#141412]/50 font-medium">
            Additional Insured #{index + 1}
          </p>
        )}
        {showRemove && index > 0 && (
          <button
            onClick={() => removeAdditionalInsured(insured.id)}
            className="text-[11px] xl:text-[13px] text-red-400 hover:text-red-600 transition-colors"
          >
            Remove
          </button>
        )}
      </div>

      {/* Loan Number */}
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-3 xl:gap-4">
        <input
          className={inputCls + e(insured.loanNumber)}
          placeholder="Loan Number"
          value={insured.loanNumber}
          onChange={(e) => set({ loanNumber: e.target.value })}
        />
      </div>

      {/* Mortgagee Clause 1 */}
      <input
        className={inputCls + e(insured.mortgageeClause1)}
        placeholder="Mortgagee Clause 1"
        value={insured.mortgageeClause1}
        onChange={(e) => set({ mortgageeClause1: e.target.value })}
      />

      {/* Mortgagee Clause 2 */}
      <input
        className={inputCls}
        placeholder="Mortgagee Clause 2"
        value={insured.mortgageeClause2}
        onChange={(e) => set({ mortgageeClause2: e.target.value })}
      />

      {/* Mailing Address 1 */}
      <input
        className={inputCls + e(insured.mailingAddress1)}
        placeholder="Mailing Address 1"
        value={insured.mailingAddress1}
        onChange={(e) => set({ mailingAddress1: e.target.value })}
      />

      {/* Mailing Address 2 */}
      <input
        className={inputCls}
        placeholder="Mailing Address 2"
        value={insured.mailingAddress2}
        onChange={(e) => set({ mailingAddress2: e.target.value })}
      />

      {/* City */}
      <input
        className={inputCls + e(insured.city)}
        placeholder="City"
        value={insured.city}
        onChange={(e) => set({ city: e.target.value })}
      />

      {/* State + Zip */}
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-3 xl:gap-4">
        <input
          className={inputCls + e(insured.state)}
          placeholder="State"
          value={insured.state}
          onChange={(e) => set({ state: e.target.value })}
        />
        <input
          className={inputCls + e(insured.zipcode)}
          placeholder="Zipcode"
          value={insured.zipcode}
          onChange={(e) => set({ zipcode: e.target.value })}
        />
      </div>

      {/* Email */}
      <input
        className={inputCls + e(insured.email)}
        placeholder="Email"
        type="email"
        value={insured.email}
        onChange={(e) => set({ email: e.target.value })}
      />

      {/* Phone */}
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-3 xl:gap-4">
        <input
          className={inputCls + e(insured.phoneNumber)}
          placeholder="Phone Number"
          type="tel"
          value={insured.phoneNumber}
          onChange={(e) => set({ phoneNumber: e.target.value })}
        />
      </div>
    </div>
  );
}

// ─── Additional Insured Section ───────────────────────────────────────────────
function AdditionalInsuredSection({ attempted }: { attempted: boolean }) {
  const { additionalInsureds } = useBindStore();

  return (
    <div className="flex flex-col gap-1 lg:gap-5 xl:gap-6">
      <p className={sectionTitleCls}>Additional Insured</p>

      {additionalInsureds.map((insured, index) => (
        <AdditionalInsuredBlock
          key={insured.id}
          insured={insured}
          index={index}
          showRemove={additionalInsureds.length > 1}
          attempted={attempted}
        />
      ))}
    </div>
  );
}

// ─── Effective Day Section ───────────────────────────────────────────────────
function EffectiveDaySection({ attempted }: { attempted: boolean }) {
  const { insuredInfo, setInsuredInfo } = useBindStore();
  const e = (v: string) => (attempted && !v.trim() ? errCls : "");

  return (
    <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4">
      <p className={sectionTitleCls}>Effective Day</p>
      <input
        className={inputCls + e(insuredInfo.policyEffectiveDate)}
        placeholder="Policy Effective Date mm/dd/yyyy"
        value={insuredInfo.policyEffectiveDate}
        onChange={(e) => setInsuredInfo({ policyEffectiveDate: e.target.value })}
      />
    </div>
  );
}

// ─── Certification Section ────────────────────────────────────────────────────
function CertificationSection({ attempted }: { attempted: boolean }) {
  const { certified, setCertified } = useBindStore();

  return (
    <div className="flex flex-col gap-4">
      <p className={sectionTitleCls}>
        Certification, Coverage Selection &amp; Authorization
      </p>

      <label
        className={
          "flex gap-3 items-start cursor-pointer rounded" +
          (attempted && !certified
            ? " outline outline-1 outline-red-400 p-1"
            : "")
        }
      >
        <input
          type="checkbox"
          className="mt-1 accent-primary shrink-0 w-4 h-4"
          checked={certified}
          onChange={(e) => setCertified(e.target.checked)}
        />
        <div className="flex flex-col gap-3 text-[#141412] text-[11px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] leading-relaxed">
          <p>
            I certify that the information provided in this application is true,
            complete, and accurate to the best of my knowledge, and I confirm
            that I have the authority to request and bind insurance coverage for
            the property listed.
          </p>
          <p>
            I acknowledge that I have selected the dwelling coverage limit and
            loss of rents coverage amount, and I understand that determining the
            appropriate coverage limits is my responsibility. I further
            understand that neither the insurance company nor the insurance
            agency has guaranteed or represented that the limits selected are
            sufficient to fully repair, rebuild, or replace the property or
            cover all potential loss exposures.
          </p>
          <p>
            I understand that any claim payment will be subject to the terms,
            conditions, exclusions, and limits of the policy.
          </p>
          <p>
            By selecting "Bind Policy," I acknowledge and agree that this
            constitutes my electronic signature and authorization to bind
            coverage subject to underwriting approval.
          </p>
        </div>
      </label>
    </div>
  );
}

// ─── Main BindForm ────────────────────────────────────────────────────────────
const BindForm = () => {
  const router = useRouter();
  const { certified, insuredInfo, additionalInsureds } = useBindStore();
  const [attempted, setAttempted] = useState(false);

  const isFormValid = () => {
    const i = insuredInfo;
    if (
      !i.clientFirstName.trim() ||
      !i.clientLastName.trim() ||
      !i.mailingAddress1.trim() ||
      !i.city.trim() ||
      !i.state.trim() ||
      !i.zipcode.trim() ||
      !i.email.trim() ||
      !i.phoneNumber.trim() ||
      !i.policyEffectiveDate.trim()
    ) {
      return false;
    }
    for (const ai of additionalInsureds) {
      if (
        !ai.loanNumber.trim() ||
        !ai.mortgageeClause1.trim() ||
        !ai.mailingAddress1.trim() ||
        !ai.city.trim() ||
        !ai.state.trim() ||
        !ai.zipcode.trim() ||
        !ai.email.trim() ||
        !ai.phoneNumber.trim()
      ) {
        return false;
      }
    }
    return certified;
  };

  const handleBind = () => {
    setAttempted(true);
    if (isFormValid()) {
      router.push("/payment");
    }
  };

  return (
    <div className="flex flex-col gap-9 xl:gap-10">
      <InsuredInfoSection attempted={attempted} />

      <EffectiveDaySection attempted={attempted} />

      <AdditionalInsuredSection attempted={attempted} />

      <CertificationSection attempted={attempted} />

      {/* Actions */}
      <div className="flex items-center justify-between gap-5">
        <Button
          title="BACK"
          className="w-1/2 lg:w-fit border border-primary text-primary bg-transparent"
          onClick={() => router.back()}
        />
        <Button
          title="BIND MY POLICY"
          className={[
            "text-white transition-all duration-200 w-1/2 lg:w-fit ",
            certified
              ? "bg-primary cursor-pointer"
              : "bg-primary/40 cursor-not-allowed",
          ].join(" ")}
          onClick={handleBind}
        />
      </div>
    </div>
  );
};

export default BindForm;
