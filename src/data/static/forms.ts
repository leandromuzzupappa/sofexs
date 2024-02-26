import * as Yup from "yup";
import { InputTypes } from "@data/types/InputTypes";

export const contactForm = {
  title: "Contact Form",
  fields: [
    {
      name: "nameInput",
      label: "Nombre",
      type: "text" as InputTypes,
      placeholder: "Ingrese su nombre",
      required: true,
      validation: Yup.string().required("El nombre es requerido"),
    },
    {
      name: "emailInput",
      label: "Email",
      type: "email" as InputTypes,
      placeholder: "Ingrese su email",
      required: true,
      validation: Yup.string()
        .email("Formato de email inválido")
        .required("El email es requerido"),
    },
    {
      name: "cellphoneNumber",
      label: "Teléfono",
      type: "text" as InputTypes,
      placeholder: "Ingrese su teléfono",
      required: false,
      validation: Yup.string().matches(
        /^\d+$/,
        "El teléfono debe contener solo números",
      ), // Ejemplo de validación: solo números permitidos
    },
    {
      name: "businessInput",
      label: "Empresa",
      type: "text" as InputTypes,
      placeholder: "Ingrese el nombre de su empresa",
      required: false,
      validation: Yup.string(), // Puedes agregar la validación necesaria para la empresa
    },
    {
      name: "messageInput",
      label: "Mensaje",
      type: "textarea" as InputTypes,
      placeholder: "Escriba su mensaje aquí",
      required: true,
      validation: Yup.string().required("El mensaje es requerido"),
    },
  ],
};
