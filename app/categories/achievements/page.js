"use client";

import { useState, useEffect } from "react";
import { Button, Input, Textarea } from "@heroui/react";
import { useSession } from "next-auth/react";

import "@/styles/subCategories.css";
import {
  Link,
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

export default function Submission({
  event,
  githubLink,
  driveLink,
  hackerrankId,
}) {
  // Submissions Closed

  const { data: session, status } = useSession();

  const [isSubmittedBefore, setIsSubmittedBefore] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [success,setSuccess] = useState(false);

  useEffect(() => {
    if (status === "loading" || !session) {
      setErrorMessage(
        "Hurry Up! Register and submit your work before timer run out",
      );

      return;
    }
  }, [session, status, event]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    githubLink: "",
    driveLink: "",
    description: "",
    hackerrankId: "",
  });

  const [formErrors, setFormErrors] = useState({});

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const formDataValidation = () => {
    const newErrors = {};

    if (githubLink) {
      if (!formData.githubLink.trim()) {
        newErrors.githubLink = "GitHub link is required";
      } else {
        const githubUrlPattern =
          /^(https?:\/\/)?github\.com\/[A-Za-z0-9_-]+\/[A-Za-z0-9._-]+(\/.*)?$/;

        if (!githubUrlPattern.test(formData.githubLink.trim())) {
          newErrors.githubLink =
            "Invalid GitHub link format. Expected format: github.com/{username}/{repository}";
        }
      }
    }

    if (driveLink) {
      if (!formData.driveLink.trim()) {
        newErrors.driveLink = "Drive link is required";
      } else {
        const driveUrlPattern = /^(https?:\/\/)?drive\.google\.com\/.*$/;

        if (!driveUrlPattern.test(formData.driveLink.trim())) {
          newErrors.driveLink =
            "Invalid Drive link format. Expected format: drive.google.com/...";
        }
      }
    }

    if (hackerrankId) {
      if (!formData.hackerrankId.trim()) {
        newErrors.hackerrankId = "Hackerrank ID is required";
      }
    }

    setFormErrors(newErrors);
    if (Object.keys(newErrors).length !== 0) {
      setIsSubmitting(false);
    }

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    console.log(formData.eventName)
    if (!formDataValidation()) {
      setIsSubmitting(false);

      return;
    }

    function removeEmptyFields(obj) {
      return Object.fromEntries(
        Object.entries(obj).filter(([_, value]) => {
          return (
            value !== null &&
            value !== undefined &&
            value !== "" &&
            (!Array.isArray(value) || value.length > 0) &&
            (typeof value !== "object" || Object.keys(value).length > 0)
          );
        }),
      );
    }

    const cleanedFormData = removeEmptyFields(formData);
    const sanitizedFormData = cleanedFormData;

    try {
      const res = await fetch("/api/achievements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: sanitizedFormData,
          email: session.user.email,
          event,
        }),
      });

      const formResponseData = await res.json();

      setIsSubmitting(false);

      if (!res.ok) {
        setFormErrors({
          general:
            formResponseData.message ||
            "Something went wrong. Please refresh the page and resubmit.",
        });
      } else {
        alert("Success")
        setIsSubmittedBefore(true);
        setErrorMessage("Your work has been submitted successfully!");
      }
    } catch (error) {
      setIsSubmitting(false);
    }
  };

  
  return (
    <>
      {!session ? (
        <p className="mx-10">{errorMessage}</p>
      ) : (
        // {success ? 
        //   <><p></p></>:
        //   <></>}
        <div id="subCategoriesSubmission">
          <Card id="formContainer">
            <form id="form" onSubmit={handleSubmit}>
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
                        Name of the competition
                      </p>
                      {formErrors.eventName ? (
                        <p
                          id="formErrorMessage"
                          style={{ fontSize: "1.1em", margin: 0 }}
                        >
                          {formErrors.eventName}
                        </p>
                      ) : undefined}
                    </>
                  }
                  label="competition"
                  type="text"
                  value={formData.eventName}
                  onValueChange={(value) =>
                    handleInputChange("eventName", value)
                  }/>
            
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
                        Who organized the competiton
                      </p>
                      {formErrors.school ? (
                        <p
                          id="formErrorMessage"
                          style={{ fontSize: "1.1em", margin: 0 }}
                        >
                          {formErrors.school}
                        </p>
                      ) : undefined}
                    </>
                  }
                  label="Organizer"
                  type="text"
                  value={formData.school}
                  onValueChange={(value) =>
                    handleInputChange("school", value)
                  }/>

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
                        Date
                      </p>
                      {formErrors.date ? (
                        <p
                          id="formErrorMessage"
                          style={{ fontSize: "1.1em", margin: 0 }}
                        >
                          {formErrors.date}
                        </p>
                      ) : undefined}
                    </>
                  }
                 
                  type="Date"
                  value={formData.date}
                  onValueChange={(value) =>
                    handleInputChange("date", value)
                  }/>

              <Textarea
                label="Places"
                type="text"
                value={formData.places}
                onValueChange={(value) =>
                  handleInputChange("places", value)
                }
              />
              <Button id="submitButton" isLoading={isSubmitting} type="submit">
                Submit
              </Button>
            </form>
          </Card>
        </div>
      )}
    </>
  );
}