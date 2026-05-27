"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("sending");
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        service: formData.get("service"),
        message: formData.get("message")
      })
    });

    const result = (await response.json()) as { error?: string };

    if (!response.ok) {
      setSubmitState("error");
      setFeedback(result.error || "Unable to send your enquiry right now.");
      return;
    }

    form.reset();
    setSubmitState("success");
    setFeedback("Your enquiry has been sent. Our team will contact you shortly.");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Full name
          <input name="name" placeholder="Your name" required type="text" />
        </label>
        <label>
          Work email
          <input name="email" placeholder="you@company.com" required type="email" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Phone
          <input name="phone" placeholder="+91" type="tel" />
        </label>
        <label>
          Interested in
          <select name="service" defaultValue="">
            <option value="" disabled>
              Select service
            </option>
            <option>VPS</option>
            <option>Dedicated Server</option>
            <option>Co-location</option>
            <option>Web Hosting</option>
          </select>
        </label>
      </div>
      <label>
        Project details
        <textarea
          name="message"
          placeholder="Share traffic, current hosting, migration needs, or server requirements."
          required
          rows={6}
        />
      </label>
      {feedback && (
        <p className={`form-feedback form-feedback-${submitState}`}>{feedback}</p>
      )}
      <button
        className="primary-button"
        disabled={submitState === "sending"}
        type="submit"
      >
        {submitState === "sending" ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
