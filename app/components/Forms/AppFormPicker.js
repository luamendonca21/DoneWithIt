import React from "react";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";
const AppFormPicker = ({ name, placeholder, items }) => {
  const { errors, touched, values, setFieldValue } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
        placeholder={placeholder}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
