/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Twusers } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TwusersUpdateFormInputValues = {
    user?: string;
    letter?: string;
    nid?: number;
};
export declare type TwusersUpdateFormValidationValues = {
    user?: ValidationFunction<string>;
    letter?: ValidationFunction<string>;
    nid?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TwusersUpdateFormOverridesProps = {
    TwusersUpdateFormGrid?: FormProps<GridProps>;
    user?: FormProps<TextFieldProps>;
    letter?: FormProps<TextFieldProps>;
    nid?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TwusersUpdateFormProps = React.PropsWithChildren<{
    overrides?: TwusersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    twusers?: Twusers;
    onSubmit?: (fields: TwusersUpdateFormInputValues) => TwusersUpdateFormInputValues;
    onSuccess?: (fields: TwusersUpdateFormInputValues) => void;
    onError?: (fields: TwusersUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TwusersUpdateFormInputValues) => TwusersUpdateFormInputValues;
    onValidate?: TwusersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TwusersUpdateForm(props: TwusersUpdateFormProps): React.ReactElement;
