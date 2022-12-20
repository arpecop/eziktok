/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Ad } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  SwitchField,
  Text,
  TextAreaField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
}) {
  const { tokens } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      (currentFieldValue !== undefined ||
        currentFieldValue !== null ||
        currentFieldValue !== "") &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  return (
    <React.Fragment>
      {isEditing && children}
      {!isEditing ? (
        <>
          <Text>{label}</Text>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            />
          )}
          <Button
            size="small"
            variation="link"
            color={tokens.colors.brand.primary[80]}
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
}
export default function AdUpdateForm(props) {
  const {
    id,
    ad,
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
    title: undefined,
    type: undefined,
    cat: undefined,
    condition: undefined,
    currency: undefined,
    data: undefined,
    date: undefined,
    location: undefined,
    description: undefined,
    images: [],
    parrent: [],
    phone: undefined,
    physical: false,
    price: undefined,
    query: undefined,
    slug: undefined,
    source: undefined,
    createdAt: undefined,
    uid: undefined,
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [type, setType] = React.useState(initialValues.type);
  const [cat, setCat] = React.useState(initialValues.cat);
  const [condition, setCondition] = React.useState(initialValues.condition);
  const [currency, setCurrency] = React.useState(initialValues.currency);
  const [data, setData] = React.useState(
    initialValues.data ? JSON.stringify(initialValues.data) : undefined
  );
  const [date, setDate] = React.useState(initialValues.date);
  const [location, setLocation] = React.useState(initialValues.location);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [images, setImages] = React.useState(initialValues.images);
  const [parrent, setParrent] = React.useState(initialValues.parrent);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [physical, setPhysical] = React.useState(initialValues.physical);
  const [price, setPrice] = React.useState(initialValues.price);
  const [query, setQuery] = React.useState(initialValues.query);
  const [slug, setSlug] = React.useState(initialValues.slug);
  const [source, setSource] = React.useState(initialValues.source);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [uid, setUid] = React.useState(initialValues.uid);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...adRecord };
    setTitle(cleanValues.title);
    setType(cleanValues.type);
    setCat(cleanValues.cat);
    setCondition(cleanValues.condition);
    setCurrency(cleanValues.currency);
    setData(
      typeof cleanValues.data === "string"
        ? cleanValues.data
        : JSON.stringify(cleanValues.data)
    );
    setDate(cleanValues.date);
    setLocation(cleanValues.location);
    setDescription(cleanValues.description);
    setImages(cleanValues.images ?? []);
    setCurrentImagesValue(undefined);
    setParrent(cleanValues.parrent ?? []);
    setCurrentParrentValue(undefined);
    setPhone(cleanValues.phone);
    setPhysical(cleanValues.physical);
    setPrice(cleanValues.price);
    setQuery(cleanValues.query);
    setSlug(cleanValues.slug);
    setSource(cleanValues.source);
    setCreatedAt(cleanValues.createdAt);
    setUid(cleanValues.uid);
    setErrors({});
  };
  const [adRecord, setAdRecord] = React.useState(ad);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Ad, id) : ad;
      setAdRecord(record);
    };
    queryData();
  }, [id, ad]);
  React.useEffect(resetStateValues, [adRecord]);
  const [currentImagesValue, setCurrentImagesValue] = React.useState(undefined);
  const imagesRef = React.createRef();
  const [currentParrentValue, setCurrentParrentValue] =
    React.useState(undefined);
  const parrentRef = React.createRef();
  const validations = {
    title: [{ type: "Required" }],
    type: [{ type: "Required" }],
    cat: [{ type: "Required" }],
    condition: [],
    currency: [],
    data: [{ type: "JSON" }],
    date: [],
    location: [],
    description: [],
    images: [],
    parrent: [],
    phone: [],
    physical: [],
    price: [],
    query: [],
    slug: [],
    source: [],
    createdAt: [],
    uid: [],
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
          title,
          type,
          cat,
          condition,
          currency,
          data,
          date,
          location,
          description,
          images,
          parrent,
          phone,
          physical,
          price,
          query,
          slug,
          source,
          createdAt,
          uid,
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
            Ad.copyOf(adRecord, (updated) => {
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
      {...getOverrideProps(overrides, "AdUpdateForm")}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        defaultValue={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              type,
              cat,
              condition,
              currency,
              data,
              date,
              location,
              description,
              images,
              parrent,
              phone,
              physical,
              price,
              query,
              slug,
              source,
              createdAt,
              uid,
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
        label="Type"
        isRequired={true}
        isReadOnly={false}
        defaultValue={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              type: value,
              cat,
              condition,
              currency,
              data,
              date,
              location,
              description,
              images,
              parrent,
              phone,
              physical,
              price,
              query,
              slug,
              source,
              createdAt,
              uid,
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
        label="Cat"
        isRequired={true}
        isReadOnly={false}
        defaultValue={cat}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              type,
              cat: value,
              condition,
              currency,
              data,
              date,
              location,
              description,
              images,
              parrent,
              phone,
              physical,
              price,
              query,
              slug,
              source,
              createdAt,
              uid,
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
      <SelectField
        label="Condition"
        placeholder="Please select an option"
        isDisabled={false}
        value={condition}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              type,
              cat,
              condition: value,
              currency,
              data,
              date,
              location,
              description,
              images,
              parrent,
              phone,
              physical,
              price,
              query,
              slug,
              source,
              createdAt,
              uid,
            };
            const result = onChange(modelFields);
            value = result?.condition ?? value;
          }
          if (errors.condition?.hasError) {
            runValidationTasks("condition", value);
          }
          setCondition(value);
        }}
        onBlur={() => runValidationTasks("condition", condition)}
        errorMessage={errors.condition?.errorMessage}
        hasError={errors.condition?.hasError}
        {...getOverrideProps(overrides, "condition")}
      >
        <option
          children="New"
          value="NEW"
          {...getOverrideProps(overrides, "conditionoption0")}
        />
        <option
          children="Parts"
          value="PARTS"
          {...getOverrideProps(overrides, "conditionoption1")}
        />
        <option
          children="Used"
          value="USED"
          {...getOverrideProps(overrides, "conditionoption2")}
        />
      </SelectField>
      <SelectField
        label="Currency"
        placeholder="Please select an option"
        isDisabled={false}
        value={currency}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              type,
              cat,
              condition,
              currency: value,
              data,
              date,
              location,
              description,
              images,
              parrent,
              phone,
              physical,
              price,
              query,
              slug,
              source,
              createdAt,
              uid,
            };
            const result = onChange(modelFields);
            value = result?.currency ?? value;
          }
          if (errors.currency?.hasError) {
            runValidationTasks("currency", value);
          }
          setCurrency(value);
        }}
        onBlur={() => runValidationTasks("currency", currency)}
        errorMessage={errors.currency?.errorMessage}
        hasError={errors.currency?.hasError}
        {...getOverrideProps(overrides, "currency")}
      >
        <option
          children="Eur"
          value="EUR"
          {...getOverrideProps(overrides, "currencyoption0")}
        />
        <option
          children="Lv"
          value="LV"
          {...getOverrideProps(overrides, "currencyoption1")}
        />
      </SelectField>
      <TextAreaField
        label="Data"
        isRequired={false}
        isReadOnly={false}
        defaultValue={data}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              type,
              cat,
              condition,
              currency,
              data: value,
              date,
              location,
              description,
              images,
              parrent,
              phone,
              physical,
              price,
              query,
              slug,
              source,
              createdAt,
              uid,
            };
            const result = onChange(modelFields);
            value = result?.data ?? value;
          }
          if (errors.data?.hasError) {
            runValidationTasks("data", value);
          }
          setData(value);
        }}
        onBlur={() => runValidationTasks("data", data)}
        errorMessage={errors.data?.errorMessage}
        hasError={errors.data?.hasError}
        {...getOverrideProps(overrides, "data")}
      />
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        defaultValue={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              type,
              cat,
              condition,
              currency,
              data,
              date: value,
              location,
              description,
              images,
              parrent,
              phone,
              physical,
              price,
              query,
              slug,
              source,
              createdAt,
              uid,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      />
      <TextField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        defaultValue={location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              type,
              cat,
              condition,
              currency,
              data,
              date,
              location: value,
              description,
              images,
              parrent,
              phone,
              physical,
              price,
              query,
              slug,
              source,
              createdAt,
              uid,
            };
            const result = onChange(modelFields);
            value = result?.location ?? value;
          }
          if (errors.location?.hasError) {
            runValidationTasks("location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("location", location)}
        errorMessage={errors.location?.errorMessage}
        hasError={errors.location?.hasError}
        {...getOverrideProps(overrides, "location")}
      />
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        defaultValue={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              type,
              cat,
              condition,
              currency,
              data,
              date,
              location,
              description: value,
              images,
              parrent,
              phone,
              physical,
              price,
              query,
              slug,
              source,
              createdAt,
              uid,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              type,
              cat,
              condition,
              currency,
              data,
              date,
              location,
              description,
              images: values,
              parrent,
              phone,
              physical,
              price,
              query,
              slug,
              source,
              createdAt,
              uid,
            };
            const result = onChange(modelFields);
            values = result?.images ?? values;
          }
          setImages(values);
          setCurrentImagesValue(undefined);
        }}
        currentFieldValue={currentImagesValue}
        label={"Images"}
        items={images}
        hasError={errors.images?.hasError}
        setFieldValue={setCurrentImagesValue}
        inputFieldRef={imagesRef}
        defaultFieldValue={undefined}
      >
        <TextField
          label="Images"
          isRequired={false}
          isReadOnly={false}
          value={currentImagesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.images?.hasError) {
              runValidationTasks("images", value);
            }
            setCurrentImagesValue(value);
          }}
          onBlur={() => runValidationTasks("images", currentImagesValue)}
          errorMessage={errors.images?.errorMessage}
          hasError={errors.images?.hasError}
          ref={imagesRef}
          {...getOverrideProps(overrides, "images")}
        />
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              type,
              cat,
              condition,
              currency,
              data,
              date,
              location,
              description,
              images,
              parrent: values,
              phone,
              physical,
              price,
              query,
              slug,
              source,
              createdAt,
              uid,
            };
            const result = onChange(modelFields);
            values = result?.parrent ?? values;
          }
          setParrent(values);
          setCurrentParrentValue(undefined);
        }}
        currentFieldValue={currentParrentValue}
        label={"Parrent"}
        items={parrent}
        hasError={errors.parrent?.hasError}
        setFieldValue={setCurrentParrentValue}
        inputFieldRef={parrentRef}
        defaultFieldValue={undefined}
      >
        <TextField
          label="Parrent"
          isRequired={false}
          isReadOnly={false}
          value={currentParrentValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.parrent?.hasError) {
              runValidationTasks("parrent", value);
            }
            setCurrentParrentValue(value);
          }}
          onBlur={() => runValidationTasks("parrent", currentParrentValue)}
          errorMessage={errors.parrent?.errorMessage}
          hasError={errors.parrent?.hasError}
          ref={parrentRef}
          {...getOverrideProps(overrides, "parrent")}
        />
      </ArrayField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={phone}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              phone: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              title,
              type,
              cat,
              condition,
              currency,
              data,
              date,
              location,
              description,
              images,
              parrent,
              phone: value,
              physical,
              price,
              query,
              slug,
              source,
              createdAt,
              uid,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      />
      <SwitchField
        label="Physical"
        defaultChecked={false}
        isDisabled={false}
        isChecked={physical}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              type,
              cat,
              condition,
              currency,
              data,
              date,
              location,
              description,
              images,
              parrent,
              phone,
              physical: value,
              price,
              query,
              slug,
              source,
              createdAt,
              uid,
            };
            const result = onChange(modelFields);
            value = result?.physical ?? value;
          }
          if (errors.physical?.hasError) {
            runValidationTasks("physical", value);
          }
          setPhysical(value);
        }}
        onBlur={() => runValidationTasks("physical", physical)}
        errorMessage={errors.physical?.errorMessage}
        hasError={errors.physical?.hasError}
        {...getOverrideProps(overrides, "physical")}
      />
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={price}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              price: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              title,
              type,
              cat,
              condition,
              currency,
              data,
              date,
              location,
              description,
              images,
              parrent,
              phone,
              physical,
              price: value,
              query,
              slug,
              source,
              createdAt,
              uid,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      />
      <TextField
        label="Query"
        isRequired={false}
        isReadOnly={false}
        defaultValue={query}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              type,
              cat,
              condition,
              currency,
              data,
              date,
              location,
              description,
              images,
              parrent,
              phone,
              physical,
              price,
              query: value,
              slug,
              source,
              createdAt,
              uid,
            };
            const result = onChange(modelFields);
            value = result?.query ?? value;
          }
          if (errors.query?.hasError) {
            runValidationTasks("query", value);
          }
          setQuery(value);
        }}
        onBlur={() => runValidationTasks("query", query)}
        errorMessage={errors.query?.errorMessage}
        hasError={errors.query?.hasError}
        {...getOverrideProps(overrides, "query")}
      />
      <TextField
        label="Slug"
        isRequired={false}
        isReadOnly={false}
        defaultValue={slug}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              type,
              cat,
              condition,
              currency,
              data,
              date,
              location,
              description,
              images,
              parrent,
              phone,
              physical,
              price,
              query,
              slug: value,
              source,
              createdAt,
              uid,
            };
            const result = onChange(modelFields);
            value = result?.slug ?? value;
          }
          if (errors.slug?.hasError) {
            runValidationTasks("slug", value);
          }
          setSlug(value);
        }}
        onBlur={() => runValidationTasks("slug", slug)}
        errorMessage={errors.slug?.errorMessage}
        hasError={errors.slug?.hasError}
        {...getOverrideProps(overrides, "slug")}
      />
      <TextField
        label="Source"
        isRequired={false}
        isReadOnly={false}
        defaultValue={source}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              type,
              cat,
              condition,
              currency,
              data,
              date,
              location,
              description,
              images,
              parrent,
              phone,
              physical,
              price,
              query,
              slug,
              source: value,
              createdAt,
              uid,
            };
            const result = onChange(modelFields);
            value = result?.source ?? value;
          }
          if (errors.source?.hasError) {
            runValidationTasks("source", value);
          }
          setSource(value);
        }}
        onBlur={() => runValidationTasks("source", source)}
        errorMessage={errors.source?.errorMessage}
        hasError={errors.source?.hasError}
        {...getOverrideProps(overrides, "source")}
      />
      <TextField
        label="Created at"
        isRequired={false}
        isReadOnly={false}
        defaultValue={createdAt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              type,
              cat,
              condition,
              currency,
              data,
              date,
              location,
              description,
              images,
              parrent,
              phone,
              physical,
              price,
              query,
              slug,
              source,
              createdAt: value,
              uid,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      />
      <TextField
        label="Uid"
        isRequired={false}
        isReadOnly={false}
        defaultValue={uid}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              type,
              cat,
              condition,
              currency,
              data,
              date,
              location,
              description,
              images,
              parrent,
              phone,
              physical,
              price,
              query,
              slug,
              source,
              createdAt,
              uid: value,
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
