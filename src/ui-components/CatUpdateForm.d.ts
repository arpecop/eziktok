/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Cat } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CatUpdateFormInputValues = {
    title?: string;
    description?: string;
    createdAt?: string;
};
export declare type CatUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CatUpdateFormOverridesProps = {
    CatUpdateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    createdAt?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CatUpdateFormProps = React.PropsWithChildren<{
    overrides?: CatUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cat?: Cat;
    onSubmit?: (fields: CatUpdateFormInputValues) => CatUpdateFormInputValues;
    onSuccess?: (fields: CatUpdateFormInputValues) => void;
    onError?: (fields: CatUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CatUpdateFormInputValues) => CatUpdateFormInputValues;
    onValidate?: CatUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CatUpdateForm(props: CatUpdateFormProps): React.ReactElement;
