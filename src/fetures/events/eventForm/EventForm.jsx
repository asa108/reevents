import cuid from "cuid";
import React, { useState } from "react";
import { createEvent, updateEvent } from "../eventAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import { Segment, Header, Button, FormField, Label } from "semantic-ui-react";
import { Formik, Form, Field, Error, ErrorMessage } from "formik";
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { categoryData } from "../../../app/api/categoryOptions";

export default function EventForm({ match, history }) {
  const dispatch = useDispatch();

  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );

  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("You must provode a title"),
    category: Yup.string().required("You must provode a category"),
    description: Yup.string().required("You must provode a description"),
    city: Yup.string().required("You must provode a city"),
    venue: Yup.string().required("You must provode a venue"),
    date: Yup.string().required("You must provode a date"),
  });

  return (
    <Segment clearing>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          selectedEvent
            ? dispatch(updateEvent({ ...selectedEvent, ...values }))
            : dispatch(
                createEvent({
                  ...values,
                  id: cuid(),
                  hostedBy: "Bob",
                  attendees: [],
                  hostPhotoURL: "/assets/user.png",
                })
              );
          history.push("/events");
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form className="ui form">
            <Header color="teal" content="Event Details" />
            <MyTextInput name="title" placeholder="Event title" />
            <MySelectInput
              name="category"
              placeholder="Category"
              options={categoryData}
            />
            <MyTextArea name="description" placeholder="Description" />
            <Header
              sub
              color="teal"
              content="Event Location details"
              rows={3}
            />
            <MyTextInput name="city" placeholder="City" />
            <MyTextInput name="venue" placeholder="Venue" />
            <MyTextInput type="date" name="date" placeholder="Date" />

            <Button type="submit" floated="right" positive content="Submit" />
            <Button
              as={Link}
              to="/events"
              type="submit"
              floated="right"
              content="Cancel"
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
}
