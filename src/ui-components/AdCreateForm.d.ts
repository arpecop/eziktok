/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AdCreateFormInputValues = {
    title?: string;
    type?: string;
    cat?: string;
    condition?: string;
    currency?: string;
    data?: string;
    date?: string;
    location?: string;
    description?: string;
    images?: string[];
    parrent?: string[];
    phone?: number;
    physical?: boolean;
    price?: number;
    query?: string;
    slug?: string;
    source?: string;
    createdAt?: string;
    uid?: string;
};
export declare type AdCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    cat?: ValidationFunction<string>;
    condition?: ValidationFunction<string>;
    currency?: ValidationFunction<string>;
    data?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    images?: ValidationFunction<string>;
    parrent?: ValidationFunction<string>;
    phone?: ValidationFunction<number>;
    physical?: ValidationFunction<boolean>;
    price?: ValidationFunction<number>;
    query?: ValidationFunction<string>;
    slug?: ValidationFunction<string>;
    source?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    uid?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AdCreateFormOverridesProps = {
    AdCreateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    type?: FormProps<TextFieldProps>;
    cat?: FormProps<TextFieldProps>;
    condition?: FormProps<SelectFieldProps>;
    currency?: FormProps<SelectFieldProps>;
    data?: FormProps<TextAreaFieldProps>;
    date?: FormProps<TextFieldProps>;
    location?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    images?: FormProps<TextFieldProps>;
    parrent?: FormProps<TextFieldProps>;
    phone?: FormProps<TextFieldProps>;
    physical?: FormProps<SwitchFieldProps>;
    price?: FormProps<TextFieldProps>;
    query?: FormProps<TextFieldProps>;
    slug?: FormProps<TextFieldProps>;
    source?: FormProps<TextFieldProps>;
    createdAt?: FormProps<TextFieldProps>;
    uid?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AdCreateFormProps = React.PropsWithChildren<{
    overrides?: AdCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AdCreateFormInputValues) => AdCreateFormInputValues;
    onSuccess?: (fields: AdCreateFormInputValues) => void;
    onError?: (fields: AdCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: AdCreateFormInputValues) => AdCreateFormInputValues;
    onValidate?: AdCreateFormValidationValues;
} & React.CSSProperties>;
export default function AdCreateForm(props: AdCreateFormProps): React.ReactElement;
