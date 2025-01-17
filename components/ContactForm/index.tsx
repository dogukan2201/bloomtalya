"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslations } from "next-intl";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Mesajınız başarıyla gönderildi!");
      } else {
        alert("Mesaj gönderilirken bir hata oluştu.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Mesaj gönderilemedi.");
    }
  };
  const t = useTranslations("Contact");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 font-secondary">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg border border-gray-200"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-434343">
          {t("header")}
        </h2>

        <div className="mb-4" style={{ color: "#434343" }}>
          <label className="block text-sm font-bold">{t("nameLabel")}</label>
          <input
            type="text"
            {...register("name", { required: t("nameRequired") })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-434343 focus:ring focus:ring-434343/50 placeholder-434343 text-434343"
            placeholder={t("namePlaceholder")}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4" style={{ color: "#434343" }}>
          <label className="block text-sm text-434343 font-bold">E-posta</label>
          <input
            type="email"
            {...register("email", {
              required: t("emailRequired"),
              pattern: /^\S+@\S+$/i,
            })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-434343 focus:ring focus:ring-434343/50 placeholder-434343 text-434343"
            placeholder={t("emailPlaceholder")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4" style={{ color: "#434343" }}>
          <label className="block text-sm text-434343 font-bold">Konu</label>
          <input
            type="text"
            {...register("subject", { required: t("subjectRequired") })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-434343 focus:ring focus:ring-434343/50 placeholder-434343 text-434343"
            placeholder={t("subjectPlaceholder")}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div className="mb-6" style={{ color: "#434343" }}>
          <label className="block text-sm text-434343 font-bold">
            {t("messageLabel")}
          </label>
          <textarea
            {...register("message", { required: t("messageRequired") })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-434343 focus:ring focus:ring-434343/50 placeholder-434343 text-434343"
            rows={4}
            placeholder={t("messagePlaceholder")}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          style={{ backgroundColor: "#F9D89D", color: "#434343" }}
          className="w-full py-2 px-4 rounded hover:opacity-80 transition-colors font-semibold block"
        >
          {t("submitButton")}
        </button>

        <div className="mt-8 text-center" style={{ color: "#434343" }}>
          <h3 className="text-lg font-bold">{t("suggestionHeader")}</h3>
          <p className="text-sm mt-2">{t("suggestionText")}</p>
        </div>
      </form>
    </div>
  );
}
