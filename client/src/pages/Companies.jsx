import { useState, useEffect } from "react";
import { Form, useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/AddCompany";
import { mainFetch } from "../utils/customFetch";
import { toast } from "react-toastify";

export const companiesLoader = async () => {
  try {
    const response = await mainFetch.get("/companies");
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    console.log(error);
    return error;
  }
};

export const companiesAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  try {
    await mainFetch.post("/companies", data);
    toast.success("companie creată");
    window.location.reload();
    return null;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    console.log(error);
    return error;
  }
};

const Companies = () => {
  const companies = useLoaderData();
  console.log(companies);

  const [tab, setTab] = useState("#lista");

  window.addEventListener("hashchange", function (e) {
    setTab(window.location.hash);
  });

  return (
    <Wrapper>
      <div className="companies-container">
        <div className="content">
          {tab === "#lista" && (
            <div className="list">
              <div className="title">
                <h3>Adaugă companie nouă</h3>
                <a
                  className="add-btn"
                  href="#adauga-companie"
                  type="button"
                  onClick={() => {
                    setTab("#adauga-companie");
                  }}
                >
                  + adaugă companie
                </a>
              </div>
            </div>
          )}
          {tab === "#adauga-companie" && (
            <div className="add-company">
              <div className="title">
                <h3>Adaugă companie nouă</h3>
                <a
                  className="add-btn"
                  href="#lista"
                  type="button"
                  onClick={() => {
                    setTab("#lista");
                  }}
                >
                  înapoi la listă
                </a>
              </div>
              <Form method="post">
                <div className="form-row">
                  {" "}
                  <label htmlFor="name">denumire</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="form-row">
                  {" "}
                  <label htmlFor="cui">CUI</label>
                  <input type="text" name="cui" id="cui" />
                </div>
                <div className="form-row">
                  {" "}
                  <label htmlFor="registrationNumber">numar inregistrare</label>
                  <input
                    type="text"
                    name="registrationNumber"
                    id="registrationNumber"
                  />{" "}
                </div>
                <div className="form-row">
                  {" "}
                  <label htmlFor="address">adresa</label>
                  <input type="text" name="address" id="address" />{" "}
                </div>
                <div className="form-row">
                  {" "}
                  <label htmlFor="country">tara</label>
                  <input
                    type="text"
                    name="country"
                    value="Romania"
                    id="country"
                  />{" "}
                </div>
                <div className="form-row">
                  {" "}
                  <label htmlFor="city">oras</label>
                  <input type="text" name="city" id="city" />{" "}
                </div>{" "}
                <div className="form-row">
                  {" "}
                  <label htmlFor="bankAccount">cont bancar</label>
                  <input type="text" name="bankAccount" id="bankAccount" />
                </div>
                <button type="submit" className="btn submit-btn">
                  creează compania
                </button>
              </Form>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};
export default Companies;
