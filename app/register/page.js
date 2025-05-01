"use client";

import {
  Link,
  Input,
  Button,
  Card,
  Select,
  SelectSection,
  SelectItem,
  Divider,
  Tabs,
  Tab,
  Checkbox,
  DatePicker,
} from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { isBefore, isAfter, parse } from "date-fns";
import { I18nProvider } from "@react-aria/i18n";
import "@/styles/register.css";
import { useSession } from "next-auth/react";
import {uploadImage} from "../firebase/functions"

import Loading from "@/app/loading";
import Navbar from "@/components/navbar";
export default function Register() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [tabIndex, setTabIndex] = useState(useSearchParams().get("tabIndex"));

  useEffect(() => {
    router.push(`?tabIndex=${tabIndex}`, { scroll: false });
  }, [tabIndex, router]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [codeFlowAndDimensionXFormData, setCodeFlowAndDimensionXFormData] =
    useState({
      society: "",
      email: "",
      password: "",
      confirmPassword: "",
      position: "",
      telNo: "",
      checkboxChecked: true,
    });

  const [codeFlowAndDimensionXFormErrors, setCodeFlowAndDimensionXFormErrors] =
    useState({});
    const [file,setFile] = React.useState(null)

  // Email validation
  const validateEmail = (email) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(email);
  // Telno validation
  const validateTelNo = (telNo) => /^[+0-9 ]+$/.test(telNo);

  const validateDate = (value) => {
    const minDate = parse("01/01/2006", "dd/MM/yyyy", new Date());
    const maxDate = parse("01/01/2013", "dd/MM/yyyy", new Date());

    if (!value) {
      return "Birth date is required.";
    }

    const selectedDate = new Date(value);

    // Check for invalid date
    if (isNaN(selectedDate)) {
      return "Invalid date format.";
    }

    // Validate if the selected date is within the range
    if (isBefore(selectedDate, minDate) || isAfter(selectedDate, maxDate)) {
      return "Birth date must be between 01/01/2006 and 01/01/2013.";
    }
  };

  // Handle input changes
  const handleInputChange = (field, value, formName, memberIndex = null) => {
    switch (formName) {
      case "codeFlowAndDimensionX":
        setCodeFlowAndDimensionXFormData({
          ...codeFlowAndDimensionXFormData,
          [field]: value,
        });
        break;
      default:
        break;
    }
  };

  // Validate form data and display errors
  const codeFlowAndDimensionXFormValidation = () => {
    const newErrors = {};

    if (!codeFlowAndDimensionXFormData.society.trim())
      newErrors.name = "Society Name is required";
    if (
      !codeFlowAndDimensionXFormData.email.trim() ||
      !validateEmail(codeFlowAndDimensionXFormData.email)
    )
      newErrors.email = "Please enter a valid email";
    if (!codeFlowAndDimensionXFormData.password.trim())
      newErrors.password = "Password is required";
    if (!codeFlowAndDimensionXFormData.position.trim())
      newErrors.school = "Your position is required";
    if (
      !codeFlowAndDimensionXFormData.telNo.trim() ||
      codeFlowAndDimensionXFormData.telNo.trim().length < 10 ||
      !validateTelNo(codeFlowAndDimensionXFormData.telNo)
    )
      newErrors.telNo = "Please enter a valid WhatsApp number";
    if (codeFlowAndDimensionXFormData.checkboxChecked !== true)
      newErrors.checkboxChecked = "You must accept rules and regulations";

    setCodeFlowAndDimensionXFormErrors(newErrors);
    if (Object.keys(newErrors).length !== 0) {
      setIsSubmitting(false);
    }

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const codeFlowAndDimensionXFormHandleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    if (codeFlowAndDimensionXFormValidation()) {
      await submitForm("codeFlowAndDimensionX", codeFlowAndDimensionXFormData);
    }
  };

  const submitForm = async (formName, formData) => {
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formName: formName,
          data: formData,
        }),
      });

      const data = await res.json();

      setIsSubmitting(false);

      if (!res.ok) {
        setCodeFlowAndDimensionXFormErrors({
          general:
            data.message ||
            "Something went wrong. Please refresh the page and resubmit.",
        });
      } else {
        // Redirect to the specified path
        switch (formName) {
          case "codeFlowAndDimensionX":
            router.push("/login");
            break;

          default:
            router.push("/login");
            break;
        }
      }
    } catch (error) {
      setIsSubmitting(false);
      setCodeFlowAndDimensionXFormErrors({
        general:
          data.message ||
          "Something went wrong. Please refresh the page and resubmit.",
      });
    }
  };

  // Delay the page loading until the session data loads.
  if (status === "loading") {
    return <Loading />;
  }

  return (
    <section id="register">
      <Navbar />
      <h1>Register</h1>
      <p id="registerSubText">
        Already Registered?{" "}
        <Link href="/login" id="registerSubTextLink">
          Login
        </Link>
      </p>
      <Card id="formContainer">
        <Tabs
          aria-label="Options"
          selectedKey={tabIndex}
          onSelectionChange={setTabIndex}
        >
          {!session && (
            <Tab key="codeFlowAndDimensionX" title="Coding & Graphic D.">
              <div id="codeFlowAndDimensionX">
                <div id="codeFlowAndDimensionXForm">
                  <form
                    id="form"
                    onSubmit={codeFlowAndDimensionXFormHandleSubmit}
                  >
                    <Input
                      isRequired
                      description={
                        codeFlowAndDimensionXFormErrors.name ? (
                          <p
                            id="formErrorMessage"
                            style={{ fontSize: "1.1em", margin: 0 }}
                          >
                            {codeFlowAndDimensionXFormErrors.name}
                          </p>
                        ) : undefined
                      }
                      label="Society Name"
                      placeholder="Enter your Society Name"
                      type="text"
                      value={codeFlowAndDimensionXFormData.society}
                      onValueChange={(value) =>
                        handleInputChange(
                          "society",
                          value,
                          "codeFlowAndDimensionX"
                        )
                      }
                    />
  
                    <Input
                      isRequired
                      description={
                        codeFlowAndDimensionXFormErrors.email ? (
                          <p
                            id="formErrorMessage"
                            style={{ fontSize: "1.1em", margin: 0 }}
                          >
                            {codeFlowAndDimensionXFormErrors.email}
                          </p>
                        ) : undefined
                      }
                      label="Email"
                      placeholder="Enter your email"
                      type="text"
                      value={codeFlowAndDimensionXFormData.email}
                      onValueChange={(value) =>
                        handleInputChange(
                          "email",
                          value,
                          "codeFlowAndDimensionX"
                        )
                      }
                    />
  
                    <Input
                      isRequired
                      description={
                        codeFlowAndDimensionXFormErrors.password ? (
                          <p
                            id="formErrorMessage"
                            style={{ fontSize: "1.1em", margin: 0 }}
                          >
                            {codeFlowAndDimensionXFormErrors.password}
                          </p>
                        ) : undefined
                      }
                      label="Password"
                      placeholder="Enter your password"
                      type="password"
                      value={codeFlowAndDimensionXFormData.password}
                      onValueChange={(value) =>
                        handleInputChange(
                          "password",
                          value,
                          "codeFlowAndDimensionX"
                        )
                      }
                    />
  
                    <Input
                      isRequired
                      description={
                        codeFlowAndDimensionXFormErrors.confirmPassword ? (
                          <p
                            id="formErrorMessage"
                            style={{ fontSize: "1.1em", margin: 0 }}
                          >
                            {codeFlowAndDimensionXFormErrors.confirmPassword}
                          </p>
                        ) : undefined
                      }
                      label="Your Position"
                      placeholder="Your Position"
                      type="text"
                      value={codeFlowAndDimensionXFormData.position}
                      onValueChange={(value) =>
                        handleInputChange(
                          "position",
                          value,
                          "codeFlowAndDimensionX"
                        )
                      }
                    />
  
                    <Divider />
  
                    <Input
                      isRequired
                      description={
                        <>
                          <p
                            style={{
                              color: "#ffffffaa",
                              fontSize: "1.1em",
                              paddingTop: "0.5em",
                              lineHeight: "1.3em",
                              margin: 0,
                            }}
                          >
                            Ex: 0712345678 / +94712345678
                          </p>
                          {codeFlowAndDimensionXFormErrors.telNo ? (
                            <p
                              id="formErrorMessage"
                              style={{ fontSize: "1.1em", margin: 0 }}
                            >
                              {codeFlowAndDimensionXFormErrors.telNo}
                            </p>
                          ) : null}
                        </>
                      }
                      label="Whatsapp No"
                      placeholder="Enter your WhatsApp No"
                      type="tel"
                      value={codeFlowAndDimensionXFormData.telNo}
                      onValueChange={(value) =>
                        handleInputChange(
                          "telNo",
                          value,
                          "codeFlowAndDimensionX"
                        )
                      }
                    />
                    <Divider />
  
                    <Checkbox
                      isRequired
                      isSelected={
                        codeFlowAndDimensionXFormData.checkboxChecked
                      }
                      size="sm"
                      onValueChange={(value) =>
                        handleInputChange(
                          "checkboxChecked",
                          value,
                          "codeFlowAndDimensionX"
                        )
                      }
                    >
                      By submitting this form, I agree to all{" "}
                      <Link href="/rnr" size="sm">
                        rules and regulations.
                      </Link>
                      {codeFlowAndDimensionXFormErrors.checkboxChecked ? (
                        <p id="formErrorMessage" style={{ fontSize: "1em" }}>
                          {codeFlowAndDimensionXFormErrors.checkboxChecked}
                        </p>
                      ) : null}
                    </Checkbox>
  
                    {codeFlowAndDimensionXFormErrors.general ? (
                      <p id="formErrorMessage" style={{ fontSize: "0.85em" }}>
                        {codeFlowAndDimensionXFormErrors.general}
                      </p>
                    ) : null}
  
                    <Button
                      id="submitButton"
                      isLoading={isSubmitting}
                      type="submit"
                    >
                      Register
                    </Button>
                  </form>
                </div>
                <div id="codeFlowAndDimensionXGradient">
                  CodeFlow & DimensionX
                </div>
              </div>
            </Tab>
          )}
        </Tabs>
      </Card>
    </section>
  );
  
}
