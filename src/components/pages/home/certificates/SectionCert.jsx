import React from "react";
import CertCards from "./CertCards";

const SectionCert = () => {
  return (
    <div className="cert__cards flex flex-wrap center">
      <CertCards
        cert_img="certs/FreeCodeCamp Responsive Web Design Certification.jpg"
        cert_title="Responsive Web Design"
        cert_org="FreeCodeCamp"
        cert_date="June 14, 2023"
      />
      <CertCards
        cert_img="certs/FreeCodeCamp Responsive Web Design Certification.jpg"
        cert_title="JavaScript Algorithms and Data Structures"
        cert_org="FreeCodeCamp"
        cert_date="May 10, 2023"
      />
      <CertCards
        cert_img="certs/SAP Advance.jpg"
        cert_title="SAP Business One: Advance (Implementation & Support)"
        cert_org="Fit Academy"
        cert_date="December 15, 2022"
      />
      <CertCards
        cert_img="certs/X5rtn.jpg"
        cert_title="Introduction to Angular"
        cert_org="CIB.O Webinar"
        cert_date="November 18, 2022"
      />
      <CertCards
        cert_img="certs/I6QHJ.jpg"
        cert_title="Programming Languages Java: C/C++/C#"
        cert_org="CIB.O Webinar"
        cert_date="October 21, 2022"
      />
      <CertCards
        cert_img="certs/network 1.jpg"
        cert_title="Network Foundations"
        cert_org="Huawei Talent Online"
        cert_date="June 28, 2022"
      />
      <CertCards
        cert_img="certs/db.jpg"
        cert_title="Database Foundations"
        cert_org="Orcale Academy"
        cert_date="June 25, 2022"
      />
      <CertCards
        cert_img="certs/sap basic.jpg"
        cert_title="SAP Business One SAP Basics (Logistics & Financials)"
        cert_org="Fit Academy"
        cert_date="June 6, 2022"
      />
    </div>
  );
};

export default SectionCert;
