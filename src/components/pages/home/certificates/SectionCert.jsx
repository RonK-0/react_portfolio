import React from "react";
import CertCards from "./CertCards";
import SpinnerFetching from "../../../partials/spinners/SpinnerFetching";
import useQueryData from "../../../custom-hook/useQueryData";

const SectionCert = () => {
  const {
    isLoading,
    isFetching,
    error,
    data: certs,
  } = useQueryData(
    "/v1/certs", // endpoint
    "get", // method
    "certs"
  );

  return (
    <div className="cert__cards flex flex-wrap center">
      {isLoading ? (
        <SpinnerFetching />
      ) : (
        (certs?.data.length !== 0 &&
          certs?.data.map(
            (item, key) =>
              item.cert_is_active === 1 && (
                <CertCards cert_info={item} key={key} />
              )
          )) || (
          <h3 className="text-white opacity-80 italic text-center">
            No Certificates Available at the Moment
          </h3>
        )
      )}
    </div>
  );
};

export default SectionCert;
