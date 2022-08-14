import React from "react";
import Screen from "../components/Screen";
import { StyleSheet } from "react-native";
import {
  AppFormField,
  SubmitButton,
  AppForm,
  AppFormPicker,
} from "../components/Forms";
import * as Yup from "yup";

const validateYupSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  category: Yup.object().required().nullable().label("Category"),
  price: Yup.number().required().min(1).max(100000).label("Price"),
  description: Yup.string().required().label("Description"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

const ListingEditScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ title: "", price: "", category: "", description: "" }}
        validationSchema={validateYupSchema}
        onSubmit={(values) => console.log(values)}
      >
        <AppFormField name="title" placeholder="Title" />
        <AppFormField name="price" placeholder="Price" />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
        />
        <AppFormField name="description" placeholder="Description" />
        <SubmitButton title="post" />
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
