import { memo } from "react";
import { useField, ErrorMessage } from "formik";
import "./style.css";

const SignUpInput = ({ placeholder, bottom, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className="login-input-wrap register-input-wrap">
            {meta.touched && meta.error && !bottom && (
                <div
                    className="error-message-container error-top"
                    style={{ marginBottom: "10px" }}
                >
                    <ErrorMessage name={field.name} />
                </div>
            )}
            <input
                type={field.type}
                name={field.name}
                placeholder={placeholder}
                className={`login-text-input ${
                    meta.touched && meta.error ? "input-error" : ""
                }`}
                {...field}
                {...props}
            />
            {meta.touched && meta.error && bottom && (
                <div
                    className="error-message-container error-bottom"
                    style={{ marginBlock: "10px" }}
                >
                    <ErrorMessage name={field.name} />
                </div>
            )}
            {meta.touched && meta.error && (
                <i
                    className="error_icon"
                    style={{ top: bottom ? "15%" : "" }}
                ></i>
            )}
        </div>
    );
};

export default memo(SignUpInput);
