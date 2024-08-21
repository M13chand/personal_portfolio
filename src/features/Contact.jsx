import { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import useTitle from "../hooks/useTitle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

const Contact = () => {
  useTitle("Contact");
  const form = useRef();

  // Formik setup
  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      user_name: Yup.string().required("Name is required"),
      user_email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      subject: Yup.string(),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs
        .sendForm("service_el608sc", "template_k6ypxag", form.current, {
          publicKey: "3lI7SRYi9KKJxBJMw",
        })
        .then(
          () => {
            toast.success("Your message has been sent successfully!", {
              position: "top-right",
              autoClose: 1000,
            });
            resetForm();
          },
          (error) => {
            console.error("Failed to send email: ", error);
          }
        );
    },
  });

  return (
    <div id="contact" className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center text-blue-500 ">Contact</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="py-12 px-4">
          <h1 className="text-2xl font-bold">Get In Touch</h1>
          <p className="py-3 text-xl">
            I'm here to help you with your projects. Feel free to reach out and
            schedule a meeting.
          </p>
          <div>
            <h1 className="text-2xl">Address</h1>
            <p className="text-xl">
              Budhanilkantha Municipality, Ward-8, Bhangal, Kathmandu, Nepal
            </p>
          </div>
          <div className="py-5">
            <h1 className="text-2xl">Phone No</h1>
            <p className="text-xl">(+977)-9848756513</p>
          </div>
          <div className="flex items-center gap-2">
            <CgMail className="text-xl text-orange-400" />
            <a
              href="mailto:manojchand082@gmail.com"
              className="text-xl flex items-center gap-2 text-orange-400">
              manojchand082@gmail.com
              <span>
                <FaArrowRightToBracket />
              </span>
            </a>
          </div>
        </div>
        <div className="pb-12 md:py-12">
          <form
            ref={form}
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold">Send Message</h1>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className={`border-2 p-2 w-full rounded-lg ${
                formik.touched.user_name && formik.errors.user_name
                  ? "border-red-500"
                  : "border-gray-400"
              }`}
              value={formik.values.user_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.user_name && formik.errors.user_name ? (
              <div className="text-red-500">{formik.errors.user_name}</div>
            ) : null}

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className={`border-2 p-2 w-full rounded-lg ${
                formik.touched.user_email && formik.errors.user_email
                  ? "border-red-500"
                  : "border-gray-400"
              }`}
              value={formik.values.user_email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.user_email && formik.errors.user_email ? (
              <div className="text-red-500">{formik.errors.user_email}</div>
            ) : null}

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="border-2 border-gray-400 p-2 w-full rounded-lg"
              value={formik.values.subject}
              onChange={formik.handleChange}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              className={`border-2 p-2 w-full h-40 rounded-lg ${
                formik.touched.message && formik.errors.message
                  ? "border-red-500"
                  : "border-gray-400"
              }`}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-500">{formik.errors.message}</div>
            ) : null}

            {/* Helper message to inform user why button is disabled */}
            {!formik.isValid && formik.dirty && (
              <div className="text-red-500 mb-2">
                Please fill out all required fields to enable the "Send" button.
              </div>
            )}

            <button
              type="submit"
              className={`w-full p-2 rounded-lg ${
                !formik.isValid || !formik.dirty
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-orange-500 text-white"
              }`}
              disabled={!formik.isValid || !formik.dirty}>
              Send
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
