/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CatCreateFormInputValues = {
    title?: string;
    description?: string;
    createdAt?: string;
};
export declare type CatCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CatCreateFormOverridesProps = {
    CatCreateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    createdAt?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CatCreateFormProps = React.PropsWithChildren<{
    overrides?: CatCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CatCreateFormInputValues) => CatCreateFormInputValues;
    onSuccess?: (fields: CatCreateFormInputValues) => void;
    onError?: (fields: CatCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CatCreateFormInputValues) => CatCreateFormInputValues;
    onValidate?: CatCreateFormValidationValues;
} & React.CSSProperties>;
export default function CatCreateForm(props: CatCreateFormProps): React.ReactElement;
