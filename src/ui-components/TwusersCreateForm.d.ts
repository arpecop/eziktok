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
export declare type TwusersCreateFormInputValues = {
    user?: string;
    letter?: string;
    nid?: number;
};
export declare type TwusersCreateFormValidationValues = {
    user?: ValidationFunction<string>;
    letter?: ValidationFunction<string>;
    nid?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TwusersCreateFormOverridesProps = {
    TwusersCreateFormGrid?: FormProps<GridProps>;
    user?: FormProps<TextFieldProps>;
    letter?: FormProps<TextFieldProps>;
    nid?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TwusersCreateFormProps = React.PropsWithChildren<{
    overrides?: TwusersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TwusersCreateFormInputValues) => TwusersCreateFormInputValues;
    onSuccess?: (fields: TwusersCreateFormInputValues) => void;
    onError?: (fields: TwusersCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TwusersCreateFormInputValues) => TwusersCreateFormInputValues;
    onValidate?: TwusersCreateFormValidationValues;
} & React.CSSProperties>;
export default function TwusersCreateForm(props: TwusersCreateFormProps): React.ReactElement;
