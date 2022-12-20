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
export declare type CompaniesCreateFormInputValues = {
    name?: string;
    location?: string;
    zip?: number;
};
export declare type CompaniesCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    zip?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CompaniesCreateFormOverridesProps = {
    CompaniesCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    location?: FormProps<TextFieldProps>;
    zip?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CompaniesCreateFormProps = React.PropsWithChildren<{
    overrides?: CompaniesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CompaniesCreateFormInputValues) => CompaniesCreateFormInputValues;
    onSuccess?: (fields: CompaniesCreateFormInputValues) => void;
    onError?: (fields: CompaniesCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CompaniesCreateFormInputValues) => CompaniesCreateFormInputValues;
    onValidate?: CompaniesCreateFormValidationValues;
} & React.CSSProperties>;
export default function CompaniesCreateForm(props: CompaniesCreateFormProps): React.ReactElement;
