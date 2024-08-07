import React from "react";
import * as Yup from "yup";
import * as Formik from "formik";
import List from "../list";
import Button, { IButtonProps } from "../button";
import ErrorBoundary from "../error-boundary";
import Label from "./label";

export interface IFieldProps {
  onChange?: (values: any) => void;
  type: keyof typeof formItems;
  onBlur?: (e: any) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  errClass?: any;
  name: string;
  value?: any;
}

interface IFormProps {
  onSubmit: (values: any) => void;
  buttonOptions?: IButtonProps;
  containerClass?: string;
  validationSchema?: any;
  fields: IFieldProps[];
  initialValues?: any;
  formRef?: any;
}

const Form = ({
  containerClass = "flex flex-col gap-6 w-full my-2",
  validationSchema = undefined,
  buttonOptions,
  initialValues = {},
  onSubmit,
  formRef,
  fields,
}: IFormProps) => {
  type FieldTypeKeys = keyof typeof formItems;

  return (
    <Formik.Formik
      innerRef={formRef}
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={Yup.object().shape(validationSchema)}
    >
      {({
        handleChange,
        handleSubmit,
        isSubmitting,
        submitCount,
        handleBlur,
        errors,
        values,
      }) => (
        <Formik.Form className={containerClass}>
          <List
            items={fields || []}
            render={(field, k) => {
              const { name, label, type } = field;

              const Field = formItems?.[type as FieldTypeKeys];
              if (!Field) return null;

              const hasErr = errors?.[name] && submitCount > 0;

              return (
                <ErrorBoundary>
                  <div
                    key={`${name}-${k}`}
                    className={"w-full flex flex-col gap-3 relative"}
                  >
                    <Label
                      name={name}
                      label={label || ""}
                      required={field?.required || false}
                    />

                    <Field
                      {...field}
                      key={name}
                      onBlur={handleBlur}
                      value={values[name]}
                      onChange={handleChange}
                      errClass={hasErr && `border border-red-500`}
                    />
                  </div>
                </ErrorBoundary>
              );
            }}
          />

          <Button
            shape="round"
            type="primary"
            onClick={handleSubmit}
            text={buttonOptions?.text || ""}
            loading={buttonOptions?.loading}
            containerClass={buttonOptions?.containerClass}
          />
        </Formik.Form>
      )}
    </Formik.Formik>
  );
};

const formItems = {
  input: (props: IFieldProps) => (
    <input
      type="text"
      id={props?.name}
      value={props?.value}
      name={props?.name}
      onBlur={props?.onBlur}
      onChange={props?.onChange}
      placeholder={props?.placeholder}
      disabled={props?.disabled || false}
      className={`block w-full px-4 py-3 text-sm font-normal shadow-xs text-gray-100 bg-transparent border rounded-[10px] placeholder-gray-400 focus:outline-none leading-relaxed ${props?.errClass}`}
    />
  ),
  "color-picker": (props: IFieldProps) => (
    <input
      type="color"
      id={props?.name}
      name={props?.name}
      color={props?.value}
      onBlur={props?.onBlur}
      onChange={props?.onChange}
      disabled={props?.disabled || false}
      className={`w-full outline-0 ${props?.errClass}`}
    />
  ),
};

export default Form;
