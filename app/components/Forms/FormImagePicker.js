import React from "react";
import { useFormikContext } from "formik";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";
const FormImagePicker = ({ name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      values[name].filter((u) => u !== uri)
    );
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
