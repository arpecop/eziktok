/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Sort } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SortUpdateFormInputValues = {
    type?: string;
    uid?: string;
    title?: string;
    description?: string;
    images?: string;
    oneone?: string;
    sortOneoneId?: string;
};
export declare type SortUpdateFormValidationValues = {
    type?: ValidationFunction<string>;
    uid?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    images?: ValidationFunction<string>;
    oneone?: ValidationFunction<string>;
    sortOneoneId?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SortUpdateFormOverridesProps = {
    SortUpdateFormGrid?: FormProps<GridProps>;
    type?: FormProps<TextFieldProps>;
    uid?: FormProps<TextFieldProps>;
    title?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    images?: FormProps<TextFieldProps>;
    oneone?: FormProps<SelectFieldProps>;
    sortOneoneId?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SortUpdateFormProps = React.PropsWithChildren<{
    overrides?: SortUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sort?: Sort;
    onSubmit?: (fields: SortUpdateFormInputValues) => SortUpdateFormInputValues;
    onSuccess?: (fields: SortUpdateFormInputValues) => void;
    onError?: (fields: SortUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SortUpdateFormInputValues) => SortUpdateFormInputValues;
    onValidate?: SortUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SortUpdateForm(props: SortUpdateFormProps): React.ReactElement;
