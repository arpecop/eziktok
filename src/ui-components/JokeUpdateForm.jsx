/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Joke } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function JokeUpdateForm(props) {
  const {
    id,
    joke,
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
    nid: undefined,
    cat: undefined,
    joke: undefined,
  };
  const [nid, setNid] = React.useState(initialValues.nid);
  const [cat, setCat] = React.useState(initialValues.cat);
  const [joke, setJoke] = React.useState(initialValues.joke);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...jokeRecord };
    setNid(cleanValues.nid);
    setCat(cleanValues.cat);
    setJoke(cleanValues.joke);
    setErrors({});
  };
  const [jokeRecord, setJokeRecord] = React.useState(joke);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Joke, id) : joke;
      setJokeRecord(record);
    };
    queryData();
  }, [id, joke]);
  React.useEffect(resetStateValues, [jokeRecord]);
  const validations = {
    nid: [],
    cat: [],
    joke: [],
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
          nid,
          cat,
          joke,
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
          await DataStore.save(
            Joke.copyOf(jokeRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "JokeUpdateForm")}
    >
      <TextField
        label="Nid"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={nid}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              nid: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              nid: value,
              cat,
              joke,
            };
            const result = onChange(modelFields);
            value = result?.nid ?? value;
          }
          if (errors.nid?.hasError) {
            runValidationTasks("nid", value);
          }
          setNid(value);
        }}
        onBlur={() => runValidationTasks("nid", nid)}
        errorMessage={errors.nid?.errorMessage}
        hasError={errors.nid?.hasError}
        {...getOverrideProps(overrides, "nid")}
      />
      <TextField
        label="Cat"
        isRequired={false}
        isReadOnly={false}
        defaultValue={cat}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nid,
              cat: value,
              joke,
            };
            const result = onChange(modelFields);
            value = result?.cat ?? value;
          }
          if (errors.cat?.hasError) {
            runValidationTasks("cat", value);
          }
          setCat(value);
        }}
        onBlur={() => runValidationTasks("cat", cat)}
        errorMessage={errors.cat?.errorMessage}
        hasError={errors.cat?.hasError}
        {...getOverrideProps(overrides, "cat")}
      />
      <TextField
        label="Joke"
        isRequired={false}
        isReadOnly={false}
        defaultValue={joke}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nid,
              cat,
              joke: value,
            };
            const result = onChange(modelFields);
            value = result?.joke ?? value;
          }
          if (errors.joke?.hasError) {
            runValidationTasks("joke", value);
          }
          setJoke(value);
        }}
        onBlur={() => runValidationTasks("joke", joke)}
        errorMessage={errors.joke?.errorMessage}
        hasError={errors.joke?.hasError}
        {...getOverrideProps(overrides, "joke")}
      />
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
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
