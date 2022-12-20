/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Companies } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CompaniesUpdateFormInputValues = {
    name?: string;
    location?: string;
    zip?: number;
};
export declare type CompaniesUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    zip?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CompaniesUpdateFormOverridesProps = {
    CompaniesUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    location?: FormProps<TextFieldProps>;
    zip?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CompaniesUpdateFormProps = React.PropsWithChildren<{
    overrides?: CompaniesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    companies?: Companies;
    onSubmit?: (fields: CompaniesUpdateFormInputValues) => CompaniesUpdateFormInputValues;
    onSuccess?: (fields: CompaniesUpdateFormInputValues) => void;
    onError?: (fields: CompaniesUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CompaniesUpdateFormInputValues) => CompaniesUpdateFormInputValues;
    onValidate?: CompaniesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CompaniesUpdateForm(props: CompaniesUpdateFormProps): React.ReactElement;
