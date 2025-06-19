// import { IoIosArrowBack } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import FooterSection from "../components/footerSection";

// export const ContactUsPage = () => {
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <>
//       <div className="mt-12 w-[100%] h-[54px] bg-neutralColor text-secondaryColor tablet:px-[6%] xl:px-[4%] px-[4%] lg:px-[2%]  flex items-center justify-between font-bold  font-RobotoCondensed lg:col-span-full lg:row-span-1">
//         <div className="flex gap-[4px] items-center text-[15px]">
//           <IoIosArrowBack />
//           <li onClick={() => navigate("/")} className="hover:underline capitalize">
//             Home
//           </li>
//           <IoIosArrowBack />
//           <li onClick={() => navigate("/shop")} className="hover:underline capitalize">
//             Shop
//           </li>
//           <IoIosArrowBack />
//           <span className=" capitalize">Contact us</span>
//         </div>
//       </div>

//       <section className="w-[100%] mt-20 mb-28 tablet:px-[6%] xl:px-[4%] px-[4%] lg:px-[2%] flex justify-center items-center ">
//         <form action="" className="w-[92%] max-w-[360px] flex flex-col gap-4 " onSubmit={handleSubmit}>
//           <h2 className="text-[36px] text-center mb-8 lg:text-[44px]">Contact Us</h2>
//           <div>
//             <label htmlFor="">
//               Name
//               <input
//                 type="text"
//                 name=""
//                 className="border pl-4 focus:outline-none rounded w-full mt-2 h-[52px]"
//                 id=""
//               />
//             </label>
//           </div>
//           <div>
//             <label htmlFor="">
//               Email
//               <input
//                 type="text"
//                 name=""
//                 className="border pl-4 focus:outline-none rounded w-full mt-2 h-[52px]"
//                 id=""
//               />
//             </label>
//           </div>
//           <div>
//             <label htmlFor="">Message</label>
//             <textarea
//               className="border p-4 focus:outline-none mt-2 border-LightSecondaryColor rounded w-full"
//               name=""
//               id=""
//               cols="30"
//               rows="10"
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="my-4 w-[100%] mx-auto block h-[52px] bg-primaryColor text-white cursor-none font-medium rounded"
//           >
//             Send message
//           </button>
//         </form>
//       </section>
//       <FooterSection />
//     </>
//   );
// };
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import FooterSection from "../components/footerSection";
import { useState } from "react";

export const ContactUsPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Handle form submission (e.g., send data to API)
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <nav className="mt-12 w-full h-[54px] bg-neutralColor text-secondaryColor tablet:px-[6%] xl:px-[4%] px-[4%] lg:px-[2%] flex items-center font-bold font-RobotoCondensed lg:col-span-full lg:row-span-1">
        <div className="flex gap-1 items-center text-[15px] select-none">
          <IoIosArrowBack />
          <li
            onClick={() => navigate("/")}
            className="hover:underline capitalize cursor-pointer"
            role="link"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && navigate("/")}
          >
            Home
          </li>
          <IoIosArrowBack />
          <li
            onClick={() => navigate("/shop")}
            className="hover:underline capitalize cursor-pointer"
            role="link"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && navigate("/shop")}
          >
            Shop
          </li>
          <IoIosArrowBack />
          <span className="capitalize">Contact us</span>
        </div>
      </nav>

      <section className="w-full mt-20 mb-28 tablet:px-[6%] xl:px-[4%] px-[4%] flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 space-y-6"
        >
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6">Contact Us</h2>

          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold mb-2 text-gray-700">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={`border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primaryColor focus:ring-offset-1 transition ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              aria-invalid={!!errors.name}
              aria-describedby="name-error"
            />
            {errors.name && (
              <span id="name-error" className="text-sm text-red-600 mt-1">
                {errors.name}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold mb-2 text-gray-700">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primaryColor focus:ring-offset-1 transition ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              aria-invalid={!!errors.email}
              aria-describedby="email-error"
            />
            {errors.email && (
              <span id="email-error" className="text-sm text-red-600 mt-1">
                {errors.email}
              </span>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="font-semibold mb-2 text-gray-700">
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className={`border rounded-md px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-primaryColor focus:ring-offset-1 transition ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              aria-invalid={!!errors.message}
              aria-describedby="message-error"
            />
            {errors.message && (
              <span id="message-error" className="text-sm text-red-600 mt-1">
                {errors.message}
              </span>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-primaryColor hover:bg-primaryColorDark text-white font-semibold py-4 rounded-md transition-shadow shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-primaryColor/50"
          >
            Send Message
          </button>
        </form>
      </section>

      <FooterSection />
    </>
  );
};
