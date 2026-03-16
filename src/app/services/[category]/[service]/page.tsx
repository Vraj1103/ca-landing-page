import Link from "next/link";
import { notFound } from "next/navigation";
import servicesData from "@/data/services.json";
import GstRegistrationContent from "@/components/service-content/GstRegistrationContent";
import MsmeUdyamContent from "@/components/service-content/MsmeUdyamContent";
import PfRegistrationContent from "@/components/service-content/PfRegistrationContent";
import EsicRegistrationContent from "@/components/service-content/EsicRegistrationContent";
import ProfessionalTaxContent from "@/components/service-content/ProfessionalTaxContent";
import FssaiRegistrationContent from "@/components/service-content/FssaiRegistrationContent";
import ReraRegistrationContent from "@/components/service-content/ReraRegistrationContent";
import ShopActRegistrationContent from "@/components/service-content/ShopActRegistrationContent";
import IecRegistrationContent from "@/components/service-content/IecRegistrationContent";
import TrademarkRegistrationContent from "@/components/service-content/TrademarkRegistrationContent";
import PrivateLimitedContent from "@/components/service-content/PrivateLimitedContent";
import OpcContent from "@/components/service-content/OpcContent";
import LlpContent from "@/components/service-content/LlpContent";
import PartnershipFirmContent from "@/components/service-content/PartnershipFirmContent";
import Section8Content from "@/components/service-content/Section8Content";
import SoleProprietorshipContent from "@/components/service-content/SoleProprietorshipContent";
import StatutoryAuditContent from "@/components/service-content/StatutoryAuditContent";
import TaxAuditContent from "@/components/service-content/TaxAuditContent";
import StockAuditContent from "@/components/service-content/StockAuditContent";
import LlpAuditContent from "@/components/service-content/LlpAuditContent";
import GstAuditContent from "@/components/service-content/GstAuditContent";
import ItrFilingContent from "@/components/service-content/ItrFilingContent";
import IncomeTaxNoticeContent from "@/components/service-content/IncomeTaxNoticeContent";
import TdsReturnContent from "@/components/service-content/TdsReturnContent";
import IncomeTaxConsultancyContent from "@/components/service-content/IncomeTaxConsultancyContent";
import GstReturnFilingContent from "@/components/service-content/GstReturnFilingContent";
import GstRefundContent from "@/components/service-content/GstRefundContent";
import GstCancellationContent from "@/components/service-content/GstCancellationContent";
import GstConsultancyContent from "@/components/service-content/GstConsultancyContent";
import NriResidentialStatusContent from "@/components/service-content/NriResidentialStatusContent";
import NriItrContent from "@/components/service-content/NriItrContent";
import RepatriationContent from "@/components/service-content/RepatriationContent";
import LowerTdsContent from "@/components/service-content/LowerTdsContent";

type ServiceItem = { slug: string; name: string };
type ServiceCategory = { id: string; title: string; services: ServiceItem[] };

const categories = servicesData as ServiceCategory[];

function getCategory(categoryId: string): ServiceCategory | undefined {
  return categories.find((c) => c.id === categoryId);
}

function getService(categoryId: string, serviceSlug: string): { category: ServiceCategory; name: string } | null {
  const category = getCategory(categoryId);
  if (!category) return null;
  const service = category.services.find((s) => s.slug === serviceSlug);
  if (!service) return null;
  return { category, name: service.name };
}

export async function generateStaticParams() {
  const params: { category: string; service: string }[] = [];
  categories.forEach((cat) => {
    cat.services.forEach((s) => {
      params.push({ category: cat.id, service: s.slug });
    });
  });
  return params;
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ category: string; service: string }>;
}) {
  const { category: categoryId, service: serviceSlug } = await params;
  const result = getService(categoryId, serviceSlug);
  if (!result) notFound();
  const { category, name } = result;

  const isGstRegistration = categoryId === "business-registration" && serviceSlug === "gst-registration";
  const isMsmeUdyam = categoryId === "business-registration" && serviceSlug === "msme-udyam-registration";
  const isPfRegistration = categoryId === "business-registration" && serviceSlug === "pf-registration";
  const isEsic = categoryId === "business-registration" && serviceSlug === "esic-registration";
  const isProfTax = categoryId === "business-registration" && serviceSlug === "professional-tax-registration";
  const isFssai = categoryId === "business-registration" && serviceSlug === "fssai-registration";
  const isRera = categoryId === "business-registration" && serviceSlug === "rera-registration-real-estate-agent";
  const isShopAct = categoryId === "business-registration" && serviceSlug === "shop-act-registration";
  const isIec = categoryId === "business-registration" && serviceSlug === "iec-registration";
  const isTrademark = categoryId === "business-registration" && serviceSlug === "trademark-registration";
  const isPvtLtd = categoryId === "company-formation" && serviceSlug === "private-limited-company-registration";
  const isOpc = categoryId === "company-formation" && serviceSlug === "one-person-company-opc";
  const isLlp = categoryId === "company-formation" && serviceSlug === "limited-liability-partnerships-llp";
  const isPartnership = categoryId === "company-formation" && serviceSlug === "partnership-firm-registration";
  const isSection8 = categoryId === "company-formation" && serviceSlug === "section-8-company-ngo";
  const isSoleProp = categoryId === "company-formation" && serviceSlug === "sole-proprietorship-registration";
  const isStatutoryAudit = categoryId === "audit-assurance" && serviceSlug === "statutory-audit";
  const isTaxAudit = categoryId === "audit-assurance" && serviceSlug === "tax-audit";
  const isStockAudit = categoryId === "audit-assurance" && serviceSlug === "stock-audit";
  const isLlpAudit = categoryId === "audit-assurance" && serviceSlug === "llp-audit";
  const isGstAudit = categoryId === "audit-assurance" && serviceSlug === "gst-audit";
  const isItr = categoryId === "direct-tax" && serviceSlug === "itr-filing-income-tax-return";
  const isNoticeReply = categoryId === "direct-tax" && serviceSlug === "income-tax-notice-reply-service";
  const isTdsReturn = categoryId === "direct-tax" && serviceSlug === "tds-return-filing-services";
  const isItConsultancy = categoryId === "direct-tax" && serviceSlug === "income-tax-consultancy";
  const isGstReturn = categoryId === "indirect-tax" && serviceSlug === "gst-return-filing-services";
  const isGstRefund = categoryId === "indirect-tax" && serviceSlug === "gst-refund-services";
  const isGstCancel = categoryId === "indirect-tax" && serviceSlug === "gst-cancellation-services";
  const isGstConsultancy = categoryId === "indirect-tax" && serviceSlug === "gst-consultancy-services";
  const isNriStatus = categoryId === "nri-tax-and-allied-services" && serviceSlug === "residential-status-for-nris";
  const isNriItr = categoryId === "nri-tax-and-allied-services" && serviceSlug === "nri-income-tax-return-filing";
  const isRepatriation = categoryId === "nri-tax-and-allied-services" && serviceSlug === "repatriation-of-fund-15ca-15cb-certificate";
  const isLowerTds = categoryId === "nri-tax-and-allied-services" && serviceSlug === "lower-tds-deduction-certificate";

  const pageTitle = isGstRegistration
    ? "GST Registration Online – Process, Documents, Fees, Process & Penalty in India"
    : isMsmeUdyam
    ? "Udyam Registration (MSME) – Benefits, Documents & Process in India"
    : isPfRegistration
    ? "PF / EPF Registration – A Complete Guide for Employers and Employees"
    : isEsic
    ? "ESIC Registration – Benefits, Eligibility & Contribution Rates"
    : isProfTax
    ? "Professional Tax Registration (PTEC & PTRC) – A Complete Guide"
    : isFssai
    ? "FSSAI Registration & Food Licence – Types, Fees & Process in India"
    : isRera
    ? "RERA Registration for Real Estate Agents – Documents, Fees & Process"
    : isShopAct
    ? "Shop Act Registration / Gumasta Licence – A Complete Guide"
    : isIec
    ? "IEC Registration (Import Export Code) – Benefits, Process & Validity"
    : isTrademark
    ? "Trademark Registration in India – Process, Fees & Validity"
    : isPvtLtd
    ? "Private Limited Company Registration in India – Process, Benefits & Documents"
    : isOpc
    ? "One Person Company (OPC) Registration in India – Benefits & Process"
    : isLlp
    ? "LLP Registration in India – Benefits, Process & Documents"
    : isPartnership
    ? "Partnership Firm Registration in India – A Complete Guide"
    : isSection8
    ? "Section 8 Company Registration (NGO) – Benefits, Eligibility & Process"
    : isSoleProp
    ? "Sole Proprietorship Registration in India – A Complete Guide"
    : isStatutoryAudit
    ? "Statutory Audit in India – Process, Objectives & Expert Services"
    : isTaxAudit
    ? "Tax Audit Under Section 44AB – Applicability, Objectives & Process"
    : isStockAudit
    ? "Stock Audit – Purpose, Benefits & Expert Inventory Verification"
    : isLlpAudit
    ? "LLP Audit – Applicability, Threshold Limits & Compliance Guide"
    : isGstAudit
    ? "GST Audit – GSTR-9, GSTR-9C & Compliance Services in India"
    : isItr
    ? "Income Tax Return (ITR) Filing for FY 2025-26 – Complete Guide"
    : isNoticeReply
    ? "Income Tax Notice Reply Service – Types of Notices & How to Respond"
    : isTdsReturn
    ? "TDS Return Filing Services – Forms, Deadlines & Compliance Guide"
    : isItConsultancy
    ? "Income Tax Consultancy Services – Planning, Filing & Litigation Support"
    : isGstReturn
    ? "GST Return Filing Services – GSTR-1, GSTR-3B, GSTR-9 & Compliance Guide"
    : isGstRefund
    ? "GST Refund Services – Types, Eligibility & Application Process in India"
    : isGstCancel
    ? "GST Cancellation Services – Voluntary, Compulsory & Revocation Guide"
    : isGstConsultancy
    ? "GST Consultancy Services – Registration, Filing, Audit & Advisory in India"
    : isNriStatus
    ? "Residential Status for NRIs – Definitions, Rules & Tax Implications"
    : isNriItr
    ? "NRI Income Tax Return Filing in India – Complete Guide"
    : isRepatriation
    ? "Repatriation of Funds – Form 15CA & 15CB Certificate Services"
    : isLowerTds
    ? "Lower TDS Deduction Certificate (Form 13) for NRI Property Sales"
    : name;

  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 text-muted">
            <li>
              <Link href="/#services" className="hover:text-accent transition-colors">
                Services
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href={`/services/${category.id}`} className="hover:text-accent transition-colors">
                {category.title}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary font-medium" aria-current="page">
              {name}
            </li>
          </ol>
        </nav>

        <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-primary mb-6">
          {pageTitle}
        </h1>

        {isGstRegistration ? (
          <GstRegistrationContent />
        ) : isMsmeUdyam ? (
          <MsmeUdyamContent />
        ) : isPfRegistration ? (
          <PfRegistrationContent />
        ) : isEsic ? (
          <EsicRegistrationContent />
        ) : isProfTax ? (
          <ProfessionalTaxContent />
        ) : isFssai ? (
          <FssaiRegistrationContent />
        ) : isRera ? (
          <ReraRegistrationContent />
        ) : isShopAct ? (
          <ShopActRegistrationContent />
        ) : isIec ? (
          <IecRegistrationContent />
        ) : isTrademark ? (
          <TrademarkRegistrationContent />
        ) : isPvtLtd ? (
          <PrivateLimitedContent />
        ) : isOpc ? (
          <OpcContent />
        ) : isLlp ? (
          <LlpContent />
        ) : isPartnership ? (
          <PartnershipFirmContent />
        ) : isSection8 ? (
          <Section8Content />
        ) : isSoleProp ? (
          <SoleProprietorshipContent />
        ) : isStatutoryAudit ? (
          <StatutoryAuditContent />
        ) : isTaxAudit ? (
          <TaxAuditContent />
        ) : isStockAudit ? (
          <StockAuditContent />
        ) : isLlpAudit ? (
          <LlpAuditContent />
        ) : isGstAudit ? (
          <GstAuditContent />
        ) : isItr ? (
          <ItrFilingContent />
        ) : isNoticeReply ? (
          <IncomeTaxNoticeContent />
        ) : isTdsReturn ? (
          <TdsReturnContent />
        ) : isItConsultancy ? (
          <IncomeTaxConsultancyContent />
        ) : isGstReturn ? (
          <GstReturnFilingContent />
        ) : isGstRefund ? (
          <GstRefundContent />
        ) : isGstCancel ? (
          <GstCancellationContent />
        ) : isGstConsultancy ? (
          <GstConsultancyContent />
        ) : isNriStatus ? (
          <NriResidentialStatusContent />
        ) : isNriItr ? (
          <NriItrContent />
        ) : isRepatriation ? (
          <RepatriationContent />
        ) : isLowerTds ? (
          <LowerTdsContent />
        ) : (
          <>
            <div className="prose prose-lg text-muted max-w-none">
              <p className="leading-relaxed">
                HETAL J SHAH & Co. offers {name} as part of our {category.title} practice. Our team ensures compliance, timely filing, and clear guidance tailored to your situation.
              </p>
              <p className="leading-relaxed mt-4">
                To discuss your requirements or get a quote, please get in touch via the contact form or call us at +91 98983 20491.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                Get in touch
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                View all services
              </Link>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; service: string }>;
}) {
  const { category: categoryId, service: serviceSlug } = await params;
  const result = getService(categoryId, serviceSlug);
  if (!result) return { title: "Service | HETAL J SHAH & Co." };
  const metaMap: Record<string, { title: string; description: string }> = {
    "business-registration/gst-registration": {
      title: "GST Registration Online – Process, Documents, Fees & Penalty | HETAL J SHAH & Co.",
      description: "GST registration in India: process, documents, fees, Rule 10A, common errors, penalty and advantages. Expert assistance in Ahmedabad.",
    },
    "business-registration/msme-udyam-registration": {
      title: "Udyam / MSME Registration – Benefits, Documents & Process | HETAL J SHAH & Co.",
      description: "Udyam Registration (MSME) in India: classification, benefits, documents required, and expert assistance for businesses across India.",
    },
    "business-registration/pf-registration": {
      title: "PF / EPF Registration – Complete Guide for Employers | HETAL J SHAH & Co.",
      description: "EPF registration applicability, contribution structure, compliance calendar, and expert PF consultation for businesses across India.",
    },
    "business-registration/esic-registration": {
      title: "ESIC Registration – Benefits, Eligibility & Contribution Rates | HETAL J SHAH & Co.",
      description: "ESIC registration in India: who must register, key benefits, contribution rates, documents required, and expert assistance for employers.",
    },
    "business-registration/professional-tax-registration": {
      title: "Professional Tax Registration (PTEC & PTRC) – Complete Guide | HETAL J SHAH & Co.",
      description: "Professional Tax registration in India: PTEC vs PTRC, slabs, return filing deadlines, late fees, and expert compliance assistance.",
    },
    "business-registration/fssai-registration": {
      title: "FSSAI Registration & Food Licence – Types, Fees & Process | HETAL J SHAH & Co.",
      description: "FSSAI food licence in India: Basic Registration, State Licence, Central Licence – eligibility, fees, validity, and expert assistance.",
    },
    "business-registration/rera-registration-real-estate-agent": {
      title: "RERA Registration for Real Estate Agents – Documents & Process | HETAL J SHAH & Co.",
      description: "RERA agent registration in India: who must apply, documents required, state-wise fees, validity, renewal, and expert compliance support.",
    },
    "business-registration/shop-act-registration": {
      title: "Shop Act Registration / Gumasta Licence – Complete Guide | HETAL J SHAH & Co.",
      description: "Shop Act registration in India: who must register, documents required, government fees, validity, renewal, and expert assistance.",
    },
    "business-registration/iec-registration": {
      title: "IEC Registration (Import Export Code) – Benefits & Process | HETAL J SHAH & Co.",
      description: "Import Export Code (IEC) registration: benefits, DGFT process, annual update requirements, and expert assistance for importers and exporters.",
    },
    "business-registration/trademark-registration": {
      title: "Trademark Registration in India – Process, Fees & Validity | HETAL J SHAH & Co.",
      description: "Trademark registration in India: types of trademarks, eligibility, government fees, ™ vs ®, validity, and expert trademark filing assistance.",
    },
    "company-formation/private-limited-company-registration": {
      title: "Private Limited Company Registration in India – Process & Documents | HETAL J SHAH & Co.",
      description: "Register a Pvt Ltd company in India: benefits, step-by-step process, documents required, and expert incorporation assistance across India.",
    },
    "company-formation/one-person-company-opc": {
      title: "One Person Company (OPC) Registration in India | HETAL J SHAH & Co.",
      description: "OPC registration in India: benefits, OPC vs sole proprietorship, registration process, documents required, and expert assistance.",
    },
    "company-formation/limited-liability-partnerships-llp": {
      title: "LLP Registration in India – Benefits, Process & Documents | HETAL J SHAH & Co.",
      description: "Limited Liability Partnership registration in India: key features, benefits, step-by-step process, documents, and expert assistance.",
    },
    "company-formation/partnership-firm-registration": {
      title: "Partnership Firm Registration in India – Complete Guide | HETAL J SHAH & Co.",
      description: "Partnership firm registration in India: types of firms, key features, advantages, documents required, and expert assistance.",
    },
    "company-formation/section-8-company-ngo": {
      title: "Section 8 Company Registration (NGO) – Benefits & Process | HETAL J SHAH & Co.",
      description: "Section 8 company (NGO) registration in India: objectives, benefits, tax exemptions, eligibility, funding options, and expert assistance.",
    },
    "company-formation/sole-proprietorship-registration": {
      title: "Sole Proprietorship Registration in India – Complete Guide | HETAL J SHAH & Co.",
      description: "Sole proprietorship registration in India: features, advantages, disadvantages, required licences, step-by-step process, and expert guidance.",
    },
    "audit-assurance/statutory-audit": {
      title: "Statutory Audit in India – Process, Objectives & Expert Services | HETAL J SHAH & Co.",
      description: "Statutory audit in India: legal requirements, audit opinions, step-by-step process, and expert audit services for companies and LLPs.",
    },
    "audit-assurance/tax-audit": {
      title: "Tax Audit Under Section 44AB – Applicability & Process | HETAL J SHAH & Co.",
      description: "Tax audit under Section 44AB: who must get audited, turnover thresholds, objectives, and expert CA assistance across India.",
    },
    "audit-assurance/stock-audit": {
      title: "Stock Audit – Purpose, Benefits & Inventory Verification | HETAL J SHAH & Co.",
      description: "Stock audit services in India: purpose, benefits, inventory verification, fraud prevention, and expert stock audit assistance for businesses.",
    },
    "audit-assurance/llp-audit": {
      title: "LLP Audit – Applicability, Thresholds & Compliance Guide | HETAL J SHAH & Co.",
      description: "LLP audit in India: when it is mandatory, threshold limits, audit process, ROC filing, and expert assistance for Limited Liability Partnerships.",
    },
    "audit-assurance/gst-audit": {
      title: "GST Audit – GSTR-9, GSTR-9C & Compliance Services | HETAL J SHAH & Co.",
      description: "GST audit services in India: GSTR-9 annual return, GSTR-9C reconciliation, applicability thresholds, and expert GST compliance assistance.",
    },
    "direct-tax/itr-filing-income-tax-return": {
      title: "Income Tax Return (ITR) Filing FY 2025-26 – Complete Guide | HETAL J SHAH & Co.",
      description: "ITR filing in India: which form to use, who must file, due dates for FY 2025-26, penalties for non-filing, and expert ITR filing services.",
    },
    "direct-tax/income-tax-notice-reply-service": {
      title: "Income Tax Notice Reply Service – Types & How to Respond | HETAL J SHAH & Co.",
      description: "Income tax notice reply in India: common reasons for notices, Sections 143(2), 148, 139(9), expert response drafting, and representation services.",
    },
    "direct-tax/tds-return-filing-services": {
      title: "TDS Return Filing Services – Forms, Deadlines & Compliance | HETAL J SHAH & Co.",
      description: "TDS return filing in India: Form 24Q, 26Q, 27Q, 26QB, 26QC, deposit deadlines, penalties for non-compliance, and expert TDS assistance.",
    },
    "direct-tax/income-tax-consultancy": {
      title: "Income Tax Consultancy – Planning, Filing & Litigation Support | HETAL J SHAH & Co.",
      description: "Comprehensive income tax consultancy: ITR filing, tax planning, notice handling, corporate taxation, international tax, and strategic advisory.",
    },
    "indirect-tax/gst-return-filing-services": {
      title: "GST Return Filing Services – GSTR-1, GSTR-3B, GSTR-9 | HETAL J SHAH & Co.",
      description: "GST return filing in India: GSTR-1, GSTR-3B, GSTR-9, GSTR-9C — types, due dates, steps to file, and expert GST compliance services.",
    },
    "indirect-tax/gst-refund-services": {
      title: "GST Refund Services – Types, Eligibility & Application Process | HETAL J SHAH & Co.",
      description: "GST refund in India: ITC refunds, export refunds, inverted duty, SEZ supplies, deemed exports — eligibility and expert filing assistance.",
    },
    "indirect-tax/gst-cancellation-services": {
      title: "GST Cancellation Services – Voluntary, Compulsory & Revocation | HETAL J SHAH & Co.",
      description: "GST cancellation and revocation services in India: reasons for cancellation, impact on business, and expert assistance for compliance.",
    },
    "indirect-tax/gst-consultancy-services": {
      title: "GST Consultancy Services – Registration, Filing, Audit & Advisory | HETAL J SHAH & Co.",
      description: "Expert GST consultancy in India: registration, return filing, ITC reconciliation, audit, litigation support, e-way bill, and strategic advisory.",
    },
    "nri-tax-and-allied-services/residential-status-for-nris": {
      title: "Residential Status for NRIs – Rules, Definitions & Tax Implications | HETAL J SHAH & Co.",
      description: "NRI residential status under the Income Tax Act and FEMA: day-count rules, ROR vs RNOR, exceptions, and expert NRI tax advisory.",
    },
    "nri-tax-and-allied-services/nri-income-tax-return-filing": {
      title: "NRI Income Tax Return Filing in India – Complete Guide | HETAL J SHAH & Co.",
      description: "NRI ITR filing: when to file, income sources, DTAA benefits, FEMA compliance, and expert NRI tax return services across India.",
    },
    "nri-tax-and-allied-services/repatriation-of-fund-15ca-15cb-certificate": {
      title: "Repatriation of Funds – Form 15CA & 15CB Certificate | HETAL J SHAH & Co.",
      description: "Form 15CA & 15CB filing for outward remittances: LRS rules, TCS rates, NRO repatriation, and expert CA certification services.",
    },
    "nri-tax-and-allied-services/lower-tds-deduction-certificate": {
      title: "Lower TDS Deduction Certificate (Form 13) for NRIs | HETAL J SHAH & Co.",
      description: "Lower TDS certificate under Section 197 for NRI property sales: eligibility, Form 13 process, documents, and expert CA assistance.",
    },
  };

  const key = `${categoryId}/${serviceSlug}`;
  if (metaMap[key]) return metaMap[key];

  return {
    title: `${result.name} | HETAL J SHAH & Co.`,
    description: `${result.name} – ${result.category.title} services by HETAL J SHAH & Co., chartered accountants in Ahmedabad.`,
  };
}
