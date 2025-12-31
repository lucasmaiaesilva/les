"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(
  _prevState: { success: boolean; error?: string } | null,
  formData: FormData
) {
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
    return { success: false, error: "O campo nome é obrigatório" };
  }

  if (!rawFormData.email || !rawFormData.email.trim()) {
    return { success: false, error: "O campo email é obrigatório" };
  }

  if (!rawFormData.email.includes("@")) {
    return { success: false, error: "Formato de email inválido" };
  }

  if (!rawFormData.message || !rawFormData.message.trim()) {
    return { success: false, error: "O campo mensagem é obrigatório" };
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      success: false,
      error:
        "Erro de configuração do servidor. Por favor, tente novamente mais tarde.",
    };
  }

  const recipientEmail =
    process.env.RESEND_TO_EMAIL || "les.maiaxavier@gmail.com";
  const fromEmail =
    process.env.RESEND_FROM_EMAIL || "L&S Tech <onboarding@resend.dev>";

  try {
    const result = await resend.emails.send({
      from: fromEmail,
      to: [recipientEmail],
      subject: `Nova mensagem de contato de ${rawFormData.name}`,
      replyTo: rawFormData.email,
      html: `
        <h2>Nova mensagem de contato</h2>
        <p><strong>Nome:</strong> ${rawFormData.name}</p>
        <p><strong>Email:</strong> ${rawFormData.email}</p>
        <p><strong>Empresa:</strong> ${rawFormData.company || "Não informado"}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${rawFormData.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (result.error) {
      return {
        success: false,
        error: result.error.message || "Erro ao enviar email. Tente novamente.",
      };
    }

    return { success: true };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Erro desconhecido";
    return {
      success: false,
      error: `Erro ao enviar email: ${errorMessage}. Tente novamente.`,
    };
  }
}
