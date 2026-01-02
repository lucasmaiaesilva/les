"use server";

import { Resend } from "resend";
import { getLocale, getTranslations } from "next-intl/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(
  _prevState: { success: boolean; error?: string } | null,
  formData: FormData
) {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "contact.errors" });
  const getFormValue = (key: string): string => {
    const value = formData.get(key);
    if (value) return value.toString();

    for (let i = 0; i < 10; i++) {
      const prefixedKey = `${i}_${key}`;
      const prefixedValue = formData.get(prefixedKey);
      if (prefixedValue) return prefixedValue.toString();
    }
    return "";
  };

  const rawFormData = {
    name: getFormValue("name"),
    email: getFormValue("email"),
    company: getFormValue("company"),
    message: getFormValue("message"),
  };

  if (!rawFormData.name || !rawFormData.name.trim()) {
    return { success: false, error: t("nameRequired") };
  }

  if (!rawFormData.email || !rawFormData.email.trim()) {
    return { success: false, error: t("emailRequired") };
  }

  if (!rawFormData.email.includes("@")) {
    return { success: false, error: t("emailInvalid") };
  }

  if (!rawFormData.message || !rawFormData.message.trim()) {
    return { success: false, error: t("messageRequired") };
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      success: false,
      error: t("serverError"),
    };
  }

  const recipientEmail =
    process.env.RESEND_TO_EMAIL || "les.maiaxavier@gmail.com";
  const fromEmail =
    process.env.RESEND_FROM_EMAIL || "L&S Tech <onboarding@resend.dev>";

  const tEmail = await getTranslations({ locale, namespace: "contact.email" });

  try {
    const result = await resend.emails.send({
      from: fromEmail,
      to: [recipientEmail],
      subject: tEmail("subject", { name: rawFormData.name }),
      replyTo: rawFormData.email,
      html: `
        <h2>${tEmail("title")}</h2>
        <p><strong>${tEmail("fields.name")}:</strong> ${rawFormData.name}</p>
        <p><strong>${tEmail("fields.email")}:</strong> ${rawFormData.email}</p>
        <p><strong>${tEmail("fields.company")}:</strong> ${rawFormData.company || tEmail("fields.companyNotProvided")}</p>
        <p><strong>${tEmail("fields.message")}:</strong></p>
        <p>${rawFormData.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (result.error) {
      return {
        success: false,
        error: result.error.message || t("sendError"),
      };
    }

    return { success: true };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : t("unknownError");
    return {
      success: false,
      error: t("sendErrorWithDetails", { error: errorMessage }),
    };
  }
}
