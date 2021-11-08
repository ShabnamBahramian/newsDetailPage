import { Field, ErrorMessage } from "formik";
const TextArea = () => {
  return (
    <section className="pt-2">
       <label htmlFor="textarea" className="px-7 text-gray-700">متن نظرات</label> 
      <Field
        className="block w-650 max-w-650 min-w-650 h-64 min-h-64 mx-auto mt-1 px-2 outline-none text-xs border"
        as="textarea"
        name="textarea"
        type="text"
        placeholder="نظرات خود را وارد کنید..."
      />
       <span className="block w-650 h-6 mx-auto">
           <ErrorMessage name="email" />
      </span>
    </section>
  );
};
export default TextArea;
