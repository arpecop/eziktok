/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SortCreateFormInputValues = {
    type?: string;
    uid?: string;
    title?: string;
    description?: string;
    images?: string;
    oneone?: string;
    sortOneoneId?: string;
};
export declare type SortCreateFormValidationValues = {
    type?: ValidationFunction<string>;
    uid?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    images?: ValidationFunction<string>;
    oneone?: ValidationFunction<string>;
    sortOneoneId?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SortCreateFormOverridesProps = {
    SortCreateFormGrid?: FormProps<GridProps>;
    type?: FormProps<TextFieldProps>;
    uid?: FormProps<TextFieldProps>;
    title?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    images?: FormProps<TextFieldProps>;
    oneone?: FormProps<SelectFieldProps>;
    sortOneoneId?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SortCreateFormProps = React.PropsWithChildren<{
    overrides?: SortCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SortCreateFormInputValues) => SortCreateFormInputValues;
    onSuccess?: (fields: SortCreateFormInputValues) => void;
    onError?: (fields: SortCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SortCreateFormInputValues) => SortCreateFormInputValues;
    onValidate?: SortCreateFormValidationValues;
} & React.CSSProperties>;
export default function SortCreateForm(props: SortCreateFormProps): React.ReactElement;
