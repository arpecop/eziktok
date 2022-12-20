/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Sort } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function SortCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    type: undefined,
    uid: undefined,
    title: undefined,
    description: undefined,
    images: undefined,
    oneone: {},
    sortOneoneId: undefined,
  };
  const [type, setType] = React.useState(initialValues.type);
  const [uid, setUid] = React.useState(initialValues.uid);
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [images, setImages] = React.useState(initialValues.images);
  const [oneone, setOneone] = React.useState(initialValues.oneone);
  const [sortOneoneId, setSortOneoneId] = React.useState(
    initialValues.sortOneoneId
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setType(initialValues.type);
    setUid(initialValues.uid);
    setTitle(initialValues.title);
    setDescription(initialValues.description);
    setImages(initialValues.images);
    setOneone(initialValues.oneone);
    setSortOneoneId(initialValues.sortOneoneId);
    setErrors({});
  };
  const validations = {
    type: [{ type: "Required" }],
    uid: [],
    title: [],
    description: [],
    images: [{ type: "Required" }],
    oneone: [],
    sortOneoneId: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          type,
          uid,
          title,
          description,
          images,
          oneone,
          sortOneoneId,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new Sort(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "SortCreateForm")}
    >
      <TextField
        label="Type"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type: value,
              uid,
              title,
              description,
              images,
              oneone,
              sortOneoneId,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      />
      <TextField
        label="Uid"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              uid: value,
              title,
              description,
              images,
              oneone,
              sortOneoneId,
            };
            const result = onChange(modelFields);
            value = result?.uid ?? value;
          }
          if (errors.uid?.hasError) {
            runValidationTasks("uid", value);
          }
          setUid(value);
        }}
        onBlur={() => runValidationTasks("uid", uid)}
        errorMessage={errors.uid?.errorMessage}
        hasError={errors.uid?.hasError}
        {...getOverrideProps(overrides, "uid")}
      />
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              uid,
              title: value,
              description,
              images,
              oneone,
              sortOneoneId,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      />
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              uid,
              title,
              description: value,
              images,
              oneone,
              sortOneoneId,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      />
      <TextField
        label="Images"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              uid,
              title,
              description,
              images: value,
              oneone,
              sortOneoneId,
            };
            const result = onChange(modelFields);
            value = result?.images ?? value;
          }
          if (errors.images?.hasError) {
            runValidationTasks("images", value);
          }
          setImages(value);
        }}
        onBlur={() => runValidationTasks("images", images)}
        errorMessage={errors.images?.errorMessage}
        hasError={errors.images?.hasError}
        {...getOverrideProps(overrides, "images")}
      />
      <SelectField
        label="Oneone"
        placeholder="Please select an option"
        isDisabled={false}
        value={oneone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              uid,
              title,
              description,
              images,
              oneone: value,
              sortOneoneId,
            };
            const result = onChange(modelFields);
            value = result?.oneone ?? value;
          }
          if (errors.oneone?.hasError) {
            runValidationTasks("oneone", value);
          }
          setOneone(value);
        }}
        onBlur={() => runValidationTasks("oneone", oneone)}
        errorMessage={errors.oneone?.errorMessage}
        hasError={errors.oneone?.hasError}
        {...getOverrideProps(overrides, "oneone")}
      />
      <TextField
        label="Sort oneone id"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              uid,
              title,
              description,
              images,
              oneone,
              sortOneoneId: value,
            };
            const result = onChange(modelFields);
            value = result?.sortOneoneId ?? value;
          }
          if (errors.sortOneoneId?.hasError) {
            runValidationTasks("sortOneoneId", value);
          }
          setSortOneoneId(value);
        }}
        onBlur={() => runValidationTasks("sortOneoneId", sortOneoneId)}
        errorMessage={errors.sortOneoneId?.errorMessage}
        hasError={errors.sortOneoneId?.hasError}
        {...getOverrideProps(overrides, "sortOneoneId")}
      />
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        />
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel?.();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          />
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          />
        </Flex>
      </Flex>
    </Grid>
  );
}
