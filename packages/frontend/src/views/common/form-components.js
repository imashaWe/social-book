import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import {useSelector} from "react-redux";
import {Alert} from "@mui/material";

export function FormSubmitButton(props) {
    const {isSubmitting} = useSelector((state) => state.formState)
    return (
        <LoadingButton
            type="submit"
            loading={isSubmitting}
            {...props}
        >
            {props.children}
        </LoadingButton>
    );
}

export function FormMessageLabel() {
    const {isFailure, isSuccess, message} = useSelector(state => state.formState);
    if (isFailure) {
        return <Alert severity="error" sx={{marginY: 1}}>{message}</Alert>
    }
    if (isSuccess) {
        return <Alert severity="success" sx={{marginY: 1}}>{message}</Alert>
    }
    return <></>
}
