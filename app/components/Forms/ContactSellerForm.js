import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import * as Yup from "yup";
import SubmitButton from "./SubmitButton";
import AppFormField from "./AppFormField";
import AppForm from "./AppForm";
import messagesApi from "../../api/messages";
import * as Notifications from "expo-notifications";

const ContactSellerForm = ({ listing }) => {
  const validateYupSchema = Yup.object().shape({
    message: Yup.string().required().label("Message"),
  });

  const handleSubmit = async ({ message }, { resetForm }) => {
    const result = await messagesApi.sendMessage(message, listing.id);
    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Could not send the message");
    }
    resetForm();
    Notifications.presentNotificationAsync({
      title: "Awesome!",
      body: "Your message was sent to the seller.",
    });
  };
  return (
    <View style={styles.container}>
      <AppForm
        validationSchema={validateYupSchema}
        initialValues={{ message: "" }}
        onSubmit={handleSubmit}
      >
        <AppFormField
          maxLength={255}
          multiline
          name="message"
          numberOfLines={3}
          placeholder="Message..."
        />
        <SubmitButton title="CONTACT SELLER" />
      </AppForm>
    </View>
  );
};

export default ContactSellerForm;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
