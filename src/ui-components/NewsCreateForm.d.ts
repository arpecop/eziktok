/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NewsCreateFormInputValues = {
    title?: string;
    content?: string;
    image?: string;
    link?: string;
    nid?: number;
};
export declare type NewsCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    link?: ValidationFunction<string>;
    nid?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewsCreateFormOverridesProps = {
    NewsCreateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    content?: FormProps<TextAreaFieldProps>;
    image?: FormProps<TextFieldProps>;
    link?: FormProps<TextFieldProps>;
    nid?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewsCreateFormProps = React.PropsWithChildren<{
    overrides?: NewsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NewsCreateFormInputValues) => NewsCreateFormInputValues;
    onSuccess?: (fields: NewsCreateFormInputValues) => void;
    onError?: (fields: NewsCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: NewsCreateFormInputValues) => NewsCreateFormInputValues;
    onValidate?: NewsCreateFormValidationValues;
} & React.CSSProperties>;
export default function NewsCreateForm(props: NewsCreateFormProps): React.ReactElement;
