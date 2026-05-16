import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import {
  AboutYouData,
  CoverageData,
  PropertyDetailsData,
} from "@/shared/store/formStore";

const PRIMARY = "#00785e";
const PRIMARY_LIGHT = "#e6f5f1";
const TEXT_DARK = "#141412";
const TEXT_MUTED = "#555555";
const BORDER = "#cccccc";
const ROW_ALT = "#f7faf9";

const s = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9,
    color: TEXT_DARK,
    backgroundColor: "#ffffff",
    paddingBottom: 36,
  },
  // ── Header ──────────────────────────────────────────────────────
  header: {
    backgroundColor: PRIMARY,
    paddingHorizontal: 32,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerBrand: {
    color: "#ffffff",
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 2,
  },
  headerSub: {
    color: "#ffffff",
    fontSize: 9,
    opacity: 0.8,
  },
  headerRight: {
    alignItems: "flex-end",
  },
  headerDate: {
    color: "#ffffff",
    fontSize: 8,
    opacity: 0.75,
    marginTop: 3,
  },
  // ── Section container ────────────────────────────────────────────
  body: {
    paddingHorizontal: 32,
    paddingTop: 18,
    gap: 18,
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: PRIMARY,
    borderBottomWidth: 1,
    borderBottomColor: PRIMARY,
    paddingBottom: 4,
    marginBottom: 8,
  },
  // ── Info grid ────────────────────────────────────────────────────
  infoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  infoCell: {
    width: "48%",
    flexDirection: "column",
    gap: 2,
  },
  infoCellFull: {
    width: "100%",
    flexDirection: "column",
    gap: 2,
  },
  infoLabel: {
    fontSize: 7.5,
    color: TEXT_MUTED,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
  },
  infoValue: {
    fontSize: 9,
    color: TEXT_DARK,
  },
  // ── Quote table ───────────────────────────────────────────────────
  quoteTableHeader: {
    flexDirection: "row",
    backgroundColor: PRIMARY,
    borderRadius: 4,
    overflow: "hidden",
  },
  quoteTableHeaderCell: {
    flex: 1,
    paddingVertical: 6,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  quoteTableHeaderLabel: {
    color: "#ffffff",
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
  },
  quoteTableHeaderFeature: {
    flex: 2,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  quoteTableHeaderFeatureLabel: {
    color: "#ffffff",
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
  },
  quoteRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
  },
  quoteRowAlt: {
    backgroundColor: ROW_ALT,
  },
  quoteRowFeatureCell: {
    flex: 2,
    paddingVertical: 6,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  quoteRowFeatureText: {
    fontSize: 8.5,
    color: TEXT_DARK,
  },
  quoteRowValueCell: {
    flex: 1,
    paddingVertical: 6,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  quoteRowValueText: {
    fontSize: 8.5,
    color: TEXT_DARK,
    textAlign: "center",
  },
  quoteRowValueTextMuted: {
    fontSize: 8.5,
    color: "#aaaaaa",
    textAlign: "center",
  },
  quotePremiumRow: {
    flexDirection: "row",
    backgroundColor: PRIMARY_LIGHT,
    borderTopWidth: 2,
    borderTopColor: PRIMARY,
    borderRadius: 0,
  },
  quotePremiumFeatureCell: {
    flex: 2,
    paddingVertical: 6,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  quotePremiumLabel: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: PRIMARY,
  },
  quotePremiumValueCell: {
    flex: 1,
    paddingVertical: 6,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  quotePremiumValue: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: PRIMARY,
    textAlign: "center",
  },
  // ── Deductible note ───────────────────────────────────────────────
  deductibleBox: {
    backgroundColor: PRIMARY_LIGHT,
    borderLeftWidth: 3,
    borderLeftColor: PRIMARY,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 2,
  },
  deductibleLabel: {
    fontSize: 8,
    color: TEXT_MUTED,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
  },
  deductibleValue: {
    fontSize: 10,
    color: PRIMARY,
    fontFamily: "Helvetica-Bold",
    marginTop: 2,
  },
  // ── Footer ────────────────────────────────────────────────────────
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: PRIMARY,
    paddingHorizontal: 30,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: {
    color: "#ffffff",
    fontSize: 7.5,
    opacity: 0.85,
  },
});

// ── Coverage row definitions ─────────────────────────────────────────────────

interface CoverageRow {
  label: string;
  basic: (c: CoverageData) => string;
  myndManaged: (c: CoverageData) => string;
  basicIncluded: boolean;
  myndIncluded: boolean;
}

const COVERAGE_ROWS: CoverageRow[] = [
  {
    label: "Rental Rebuild Coverage",
    basic: (c) => c.propertyRebuildCost || "—",
    myndManaged: (c) => c.propertyRebuildCost || "—",
    basicIncluded: true,
    myndIncluded: true,
  },
  {
    label: "Loss of Rents",
    basic: (c) => c.lossOfUseMonthlyRents || "—",
    myndManaged: (c) => c.lossOfUseMonthlyRents || "—",
    basicIncluded: true,
    myndIncluded: true,
  },
  {
    label: "Contents",
    basic: () => "Not Included",
    myndManaged: () => "$5,000",
    basicIncluded: false,
    myndIncluded: true,
  },
  {
    label: "Ordinance and Law",
    basic: () => "Not Included",
    myndManaged: () => "Full Coverage",
    basicIncluded: false,
    myndIncluded: true,
  },
  {
    label: "Water Claims",
    basic: () => "Up to rebuild cost",
    myndManaged: () => "Up to rebuild cost",
    basicIncluded: true,
    myndIncluded: true,
  },
  {
    label: "Sewers/Drains Backup",
    basic: () => "$5,000",
    myndManaged: () => "$50,000",
    basicIncluded: true,
    myndIncluded: true,
  },
  {
    label: "Equipment Breakdown",
    basic: () => "Not Included",
    myndManaged: () => "$50,000",
    basicIncluded: false,
    myndIncluded: true,
  },
  {
    label: "Vacancy Allowance",
    basic: () => "30 Days",
    myndManaged: () => "Unlimited",
    basicIncluded: true,
    myndIncluded: true,
  },
  {
    label: "Burglary/Theft/Vandalism",
    basic: () => "Sublimit",
    myndManaged: () => "Included",
    basicIncluded: true,
    myndIncluded: true,
  },
  {
    label: "Landlord Liability",
    basic: () => "$500,000 / $1,000,000",
    myndManaged: () => "$1,000,000 / $3,000,000",
    basicIncluded: true,
    myndIncluded: true,
  },
  {
    label: "Habitability Lawsuit Coverage",
    basic: () => "Not Included",
    myndManaged: () => "Included",
    basicIncluded: false,
    myndIncluded: true,
  },
  {
    label: "Animal Lawsuit Coverage",
    basic: () => "$10,000",
    myndManaged: () => "$100,000",
    basicIncluded: true,
    myndIncluded: true,
  },
  {
    label: "Fire Arms Lawsuit Coverage",
    basic: () => "Not Included",
    myndManaged: () => "Included",
    basicIncluded: false,
    myndIncluded: true,
  },
  {
    label: "Assault & Battery Lawsuit Coverage",
    basic: () => "Not Included",
    myndManaged: () => "Included",
    basicIncluded: false,
    myndIncluded: true,
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(): string {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function titleCase(str: string): string {
  if (!str) return "—";
  return str.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

// ── Props ─────────────────────────────────────────────────────────────────────

export interface ProposalDocumentProps {
  aboutYou: AboutYouData;
  propertyDetails: PropertyDetailsData;
  coverage: CoverageData;
  deductible: string;
}

// ── Document ──────────────────────────────────────────────────────────────────

const ProposalDocument = ({
  aboutYou,
  propertyDetails,
  coverage,
  deductible,
}: ProposalDocumentProps) => {
  const clientName =
    [aboutYou.firstName, aboutYou.lastName].filter(Boolean).join(" ") || "—";

  return (
    <Document
      title="Insurance Proposal"
      author="Ives Insurance"
      subject="Property Insurance Proposal"
    >
      <Page size="A4" style={s.page}>
        {/* ── Header ────────────────────────────────────────────── */}
        <View style={s.header}>
          <View>
            <Text style={s.headerBrand}>IVES</Text>
            <Text style={s.headerSub}>Property Insurance</Text>
          </View>
          <View style={s.headerRight}>
            <Text style={s.headerSub}>Insurance Proposal</Text>
            <Text style={s.headerDate}>Prepared: {formatDate()}</Text>
          </View>
        </View>

        {/* ── Body ──────────────────────────────────────────────── */}
        <View style={s.body}>
          {/* Client Information */}
          <View>
            <Text style={s.sectionTitle}>Client Information</Text>
            <View style={s.infoGrid}>
              <View style={s.infoCell}>
                <Text style={s.infoLabel}>Full Name</Text>
                <Text style={s.infoValue}>{clientName}</Text>
              </View>
              <View style={s.infoCell}>
                <Text style={s.infoLabel}>Email</Text>
                <Text style={s.infoValue}>{aboutYou.email || "—"}</Text>
              </View>
              <View style={s.infoCell}>
                <Text style={s.infoLabel}>Phone</Text>
                <Text style={s.infoValue}>{aboutYou.phoneNumber || "—"}</Text>
              </View>
            </View>
          </View>

          {/* Property Details */}
          <View>
            <Text style={s.sectionTitle}>Property Details</Text>
            <View style={s.infoGrid}>
              <View style={s.infoCellFull}>
                <Text style={s.infoLabel}>Address</Text>
                <Text style={s.infoValue}>
                  {[
                    propertyDetails.streetAddress,
                    propertyDetails.city,
                    propertyDetails.state,
                    propertyDetails.zipcode,
                  ]
                    .filter(Boolean)
                    .join(", ") || "—"}
                </Text>
              </View>
              <View style={s.infoCell}>
                <Text style={s.infoLabel}>Property Type</Text>
                <Text style={s.infoValue}>
                  {titleCase(propertyDetails.propertyType)}
                </Text>
              </View>
              <View style={s.infoCell}>
                <Text style={s.infoLabel}>Square Footage</Text>
                <Text style={s.infoValue}>
                  {propertyDetails.squareFootage
                    ? `${propertyDetails.squareFootage} sq ft`
                    : "—"}
                </Text>
              </View>
              <View style={s.infoCell}>
                <Text style={s.infoLabel}>Year Built</Text>
                <Text style={s.infoValue}>
                  {propertyDetails.yearBuilt || "—"}
                </Text>
              </View>
              <View style={s.infoCell}>
                <Text style={s.infoLabel}>Number of Units</Text>
                <Text style={s.infoValue}>
                  {propertyDetails.numberOfUnits || "—"}
                </Text>
              </View>
            </View>
          </View>

          {/* Coverage Requirements */}
          <View>
            <Text style={s.sectionTitle}>Coverage Requirements</Text>
            <View style={s.infoGrid}>
              <View style={s.infoCell}>
                <Text style={s.infoLabel}>Occupancy</Text>
                <Text style={s.infoValue}>{titleCase(coverage.occupancy)}</Text>
              </View>
              <View style={s.infoCell}>
                <Text style={s.infoLabel}>Known Losses (Last 3 Years)</Text>
                <Text style={s.infoValue}>
                  {coverage.knownLossesLast3Years || "—"}
                </Text>
              </View>
              <View style={s.infoCell}>
                <Text style={s.infoLabel}>Property Rebuild Cost</Text>
                <Text style={s.infoValue}>
                  {coverage.propertyRebuildCost || "—"}
                </Text>
              </View>
              <View style={s.infoCell}>
                <Text style={s.infoLabel}>Loss of Use / Monthly Rents</Text>
                <Text style={s.infoValue}>
                  {coverage.lossOfUseMonthlyRents || "—"}
                </Text>
              </View>
            </View>
          </View>

          {/* Deductible */}
          {deductible && (
            <View style={s.deductibleBox}>
              <Text style={s.deductibleLabel}>Selected Deductible</Text>
              <Text style={s.deductibleValue}>{deductible}</Text>
            </View>
          )}

          {/* Quote Comparison */}
          <View>
            <Text style={s.sectionTitle}>Quote Comparison</Text>

            {/* Table header */}
            <View style={s.quoteTableHeader}>
              <View style={s.quoteTableHeaderFeature}>
                <Text style={s.quoteTableHeaderFeatureLabel}>Coverage</Text>
              </View>
              <View style={s.quoteTableHeaderCell}>
                <Text style={s.quoteTableHeaderLabel}>Basic</Text>
              </View>
              <View style={s.quoteTableHeaderCell}>
                <Text style={s.quoteTableHeaderLabel}>Mynd Managed</Text>
              </View>
            </View>

            {/* Coverage rows */}
            {COVERAGE_ROWS.map((row, i) => (
              <View
                key={row.label}
                style={[s.quoteRow, i % 2 === 1 ? s.quoteRowAlt : {}]}
              >
                <View style={s.quoteRowFeatureCell}>
                  <Text style={s.quoteRowFeatureText}>{row.label}</Text>
                </View>
                <View style={s.quoteRowValueCell}>
                  <Text
                    style={
                      row.basicIncluded
                        ? s.quoteRowValueText
                        : s.quoteRowValueTextMuted
                    }
                  >
                    {row.basic(coverage)}
                  </Text>
                </View>
                <View style={s.quoteRowValueCell}>
                  <Text
                    style={
                      row.myndIncluded
                        ? s.quoteRowValueText
                        : s.quoteRowValueTextMuted
                    }
                  >
                    {row.myndManaged(coverage)}
                  </Text>
                </View>
              </View>
            ))}

            {/* Annual premium row */}
            <View style={s.quotePremiumRow}>
              <View style={s.quotePremiumFeatureCell}>
                <Text style={s.quotePremiumLabel}>Annual Premium</Text>
              </View>
              <View style={s.quotePremiumValueCell}>
                <Text style={s.quotePremiumValue}>$10,000</Text>
              </View>
              <View style={s.quotePremiumValueCell}>
                <Text style={s.quotePremiumValue}>$100,000</Text>
              </View>
            </View>
          </View>
        </View>

        {/* ── Footer ────────────────────────────────────────────── */}
        <View style={s.footer} fixed>
          <Text style={s.footerText}>
            Ives Insurance — Confidential Proposal
          </Text>
          <Text style={s.footerText}>{formatDate()}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default ProposalDocument;
