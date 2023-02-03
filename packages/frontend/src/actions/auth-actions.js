import {setFormSubmitting, setFormSuccess} from "./form-actions";

export const login = (data, signIn) => {
    return (dispatch) => {
        dispatch(setFormSubmitting());
        setTimeout(() => {
            signIn(
                {
                    user: data,
                    token: '888888',
                    expiresIn:'4000',
                    tokenType: "Bearer", // Only if you are using refreshToken feature
                });
            dispatch(setFormSuccess())
        }, 3000)

    };
}
