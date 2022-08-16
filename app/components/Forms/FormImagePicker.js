import React from "react";
import { useFormikContext } from "formik";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";
const FormImagePicker = ({ name }) => {
  const { values, errors, touched, setFieldValue } = useFormikContext();

  const handleRemove = (uri) => {
    const arrayUris = values[name].filter((u) => u !== uri);
    setFieldValue(name, arrayUris);
  };

  const handleAdd = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };

  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onRemoveImage={handleRemove}
        onAddImage={handleAdd}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormImagePicker;
