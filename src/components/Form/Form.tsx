import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@components/Button/Button";
import { IconNames } from "@data/interfaces/Icons";
import styles from "./Form.module.css";
import Input from "@components/Input/Input";
import { contactForm } from "@data/static/forms";
import useApi from "@utils/useApi";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

// Definir un tipo para las validaciones de formulario
type FormValidationSchema = {
  [key: string]: Yup.StringSchema;
};
interface FormProps {
  onToastShow: (message: string, error: boolean) => void;
}
export const Form = ({ onToastShow }: FormProps) => {
  const { error, loading, sendEmail } = useApi(); // Usar el hook useApi
  const [isVerified, setIsVerified] = useState(false);
  const recaptchaKey = process.env.REACT_APP_RECAPTCHA_KEY || ""; // Valor predeterminado si la clave no está definida
  const handleRecaptchaChange = (value: string | null) => {
    setIsVerified(!!value);
  };

  // Construir el esquema de validación del formulario
  const validationSchema: FormValidationSchema = contactForm.fields.reduce(
    (acc, field) => {
      acc[field.name] = field.validation;
      return acc;
    },
    {} as FormValidationSchema,
  );

  const formik = useFormik({
    initialValues: Object.fromEntries(
      contactForm.fields.map((field) => [field.name, ""]),
    ),
    validationSchema: Yup.object().shape(validationSchema),
    onSubmit: async (values) => {
      try {
        if (!isVerified) {
          console.error("Por favor, verifica el reCAPTCHA.");
          onToastShow("Por favor, verifica el reCAPTCHA.", true);

          return;
        }
        await sendEmail({
          userEmail: values.emailInput,
          userName: values.nameInput,
          userMessage: values.messageInput,
          userBusiness: values.businessInput,
          userPhone: values.cellphoneNumber,
        });
        if (error) {
          throw new Error(error);
        }
        onToastShow("Correo electrónico enviado exitosamente.", false);
      } catch (error) {
        console.error("Error al enviar el correo electrónico:", error);
        onToastShow("Error al enviar el correo electrónico.", true);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.formWrapper}>
      <div className={styles.inputs}>
        {contactForm.fields.map((field, index) => (
          <Input
            key={index}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            label={field.label}
            required={field.required}
            hidden={field.hidden}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[field.name]}
            error={
              formik.touched[field.name] &&
              (formik.errors[field.name] as string)
            }
          />
        ))}
      </div>
      <div className={styles.recaptcha}>
        <ReCAPTCHA sitekey={recaptchaKey} onChange={handleRecaptchaChange} />
      </div>
      <div className="actionButtons">
        <Button
          type="submit"
          text={`${loading ? "Enviando consulta" : "Enviar consulta"}`}
          theme="primary"
          variant="filled"
          shape="rounded"
          loading={loading}
          icon={IconNames.RIGHTARROW}
          iconPosition="right"
          classList={styles.formButton}
          disabled={!formik.isValid && isVerified}
        />
      </div>
      <p className={styles.disclaimer}>* Campos Obligatorios</p>
    </form>
  );
};

export default Form;
