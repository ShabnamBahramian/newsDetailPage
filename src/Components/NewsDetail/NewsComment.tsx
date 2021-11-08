import { Form, Formik } from "formik";
import { NewsDetailForm } from "../../core/interfaces/interface";
import Button from "../Common/Formik/Button/Button";
import Email from "../Common/Formik/Email/Email";
import TextArea from "../Common/Formik/TextArea/TextArea";
import UserComment from "./UsersComment";

const NewsComment = () => {
  const initialValues: NewsDetailForm = { email: "", description: "" };
  return (
    <div className="py-2">
      <Formik initialValues={initialValues} onSubmit={(value): void => {}}>
        <Form className="w-700 py-2 pt-4 mx-auto rounded-xl border">
          <Email />
          <TextArea />
          <Button />
        </Form>
      </Formik>
      <section className="w-700 h-400 mx-auto mt-2 rounded-xl border">
        <UserComment />
      </section>
    </div>
  );
};
export default NewsComment;
