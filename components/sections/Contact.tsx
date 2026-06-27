"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { reveal } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

type Status = "idle" | "pending" | "success" | "error";

export function Contact({ hideHeader = false }: { hideHeader?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const nextErrors: Record<string, string> = {};

    if (name.length < 2) nextErrors.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email.";
    if (message.length < 12) nextErrors.message = "Share a little more about the project.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("error");
      return;
    }

    setStatus("pending");

    // Web3Forms integration
    data.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "17cec68d-518a-4c84-afb2-23c0a61e83d5");
    
    const object = Object.fromEntries(data.entries());
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();
      
      if (result.success) {
        form.reset();
        setStatus("success");
      } else {
        console.error(result);
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="pt-8 pb-12">
      <div className="container-main">
        {!hideHeader && <SectionHeader eyebrow="Contact" title="Have a project in mind?" />}
        <motion.form
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          onSubmit={onSubmit}
          className={cn("mx-auto max-w-[700px] rounded-[28px] bg-white p-8 md:p-10", hideHeader ? "mt-4" : "mt-16")}
          noValidate
        >
          {[
            ["name", "Name", "Jane Smith", "text"],
            ["email", "Email", "jane@brand.com", "email"]
          ].map(([id, label, placeholder, type]) => (
            <label key={id} className="mb-7 block text-sm font-medium text-zinc-800" htmlFor={id}>
              {label}
              <input
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                className={cn("mt-3 min-h-14 w-full rounded-xl border bg-zinc-50 px-5 text-base text-ink outline-none transition focus:border-accent", errors[id] ? "border-accent" : "border-zinc-200")}
              />
              {errors[id] ? <span className="mt-2 block text-xs font-semibold text-accent">{errors[id]}</span> : null}
            </label>
          ))}
          <label className="block text-sm font-medium text-zinc-800" htmlFor="message">
            Project Information
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your next project"
              className={cn("mt-3 min-h-28 w-full resize-y rounded-xl border bg-zinc-50 px-5 py-5 text-base text-ink outline-none transition focus:border-accent", errors.message ? "border-accent" : "border-zinc-200")}
            />
            {errors.message ? <span className="mt-2 block text-xs font-semibold text-accent">{errors.message}</span> : null}
          </label>
          <button
            type="submit"
            disabled={status === "pending"}
            className="mt-8 min-h-14 w-full rounded-pill bg-accent px-8 text-sm font-bold text-white shadow-primary transition hover:-translate-y-0.5 hover:bg-accent-dark disabled:cursor-wait disabled:opacity-75"
          >
            {status === "pending" ? "Submitting..." : status === "success" ? "Sent" : status === "error" ? "Check details" : "Submit"}
          </button>
          <p className="mt-4 text-center text-sm text-zinc-500">We will reach out to you within 24hrs</p>
        </motion.form>
      </div>
    </section>
  );
}
