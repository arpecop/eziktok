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
export declare type MoviesCreateFormInputValues = {
    title?: string;
    slug?: string;
    year?: number;
    description?: string;
    image?: string;
};
export declare type MoviesCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    slug?: ValidationFunction<string>;
    year?: ValidationFunction<number>;
    description?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MoviesCreateFormOverridesProps = {
    MoviesCreateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    slug?: FormProps<TextFieldProps>;
    year?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    image?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MoviesCreateFormProps = React.PropsWithChildren<{
    overrides?: MoviesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MoviesCreateFormInputValues) => MoviesCreateFormInputValues;
    onSuccess?: (fields: MoviesCreateFormInputValues) => void;
    onError?: (fields: MoviesCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: MoviesCreateFormInputValues) => MoviesCreateFormInputValues;
    onValidate?: MoviesCreateFormValidationValues;
} & React.CSSProperties>;
export default function MoviesCreateForm(props: MoviesCreateFormProps): React.ReactElement;
