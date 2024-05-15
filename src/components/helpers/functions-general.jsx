export const baseImgUrl = "../../img";
// export const baseImgUrl = "http://localhost:5173/img";

export const PageTitle = (newTitle) => {
    return (document.title = newTitle);
}

export const urlPathPortfolio = "http://localhost/react_portfolio";
export const devApiUrl = `${urlPathPortfolio}/rest`;
export const devKey = "$2a$12$47wDvbLInZif/PVS8B6P3.7WxyJvUpBzZAWCsnWJUKq3nrn4qgmeO";

// export const devBaseImgUrl = "https://localhost/react_demo/public/img";
export const devBaseImgUrl = `${urlPathPortfolio}/public/img`;

// fetch for uploading photo or file
export const fetchFormData = (url, fd = {}) => {
  const data = fetch(url, {
    method: "post",
    body: fd,
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error(error + " api endpoint error");
    });

  return data;
};
