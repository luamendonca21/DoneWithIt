import React from "react";
import Screen from "../components/Screen";
import { StyleSheet } from "react-native";
import {
  AppFormField,
  SubmitButton,
  AppForm,
  AppFormPicker,
} from "../components/Forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import defaultStyles from "../config/styles";
import * as Yup from "yup";
import PickerItem from "./../components/PickerItem";

const validateYupSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  category: Yup.object().required().nullable().label("Category"),
  price: Yup.number().required().min(1).max(100000).label("Price"),
  description: Yup.string().required().label("Description"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    icon: {
      name: "floor-lamp",
      iconColor: defaultStyles.colors.white,
      backgroundColor: "#fc5c65",
    },
  },
  {
    label: "Cars",
    value: 2,
    icon: { name: "car", backgroundColor: "#fd9644" },
  },
  {
    label: "Cameras",
    value: 3,
    icon: {
      name: "camera",
      iconColor: defaultStyles.colors.white,
      backgroundColor: "#fed330",
    },
  },
  {
    label: "Games",
    value: 4,
    icon: {
      name: "cards",
      iconColor: defaultStyles.colors.white,
      backgroundColor: "#26de81",
    },
  },
  {
    label: "Clothing",
    value: 5,
    icon: {
      name: "shoe-heel",
      iconColor: defaultStyles.colors.white,
      backgroundColor: "#2bcbba",
    },
  },
  {
    label: "Sports",
    value: 6,
    icon: {
      name: "basketball",
      iconColor: defaultStyles.colors.white,
      backgroundColor: "#45aaf2",
    },
  },
  {
    label: "Movies & Music",
    value: 7,
    icon: {
      name: "headphones",
      iconColor: defaultStyles.colors.white,
      backgroundColor: "#4b7bec",
    },
  },
  {
    label: "Books",
    value: 8,
    icon: {
      name: "bookshelf",
      iconColor: defaultStyles.colors.white,
      backgroundColor: "#9e4bec",
    },
  },
];

const ListingEditScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        validationSchema={validateYupSchema}
        onSubmit={(values) => console.log(values)}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          maxLength={8}
          keyboardType="numeric"
          name="price"
          placeholder="Price"
        />
        <AppFormPicker
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          items={categories}
          name="category"
          placeholder="Category"
        />
        <AppFormField
          maxLength={255}
          multiline
          numberOfLines={3}
          name="description"
          placeholder="Description"
        />
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
