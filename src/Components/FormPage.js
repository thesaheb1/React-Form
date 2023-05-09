import "./FormPage.css";
import { useState } from "react";

const FormPage = () => {
  const [FormData, SetFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "india",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification: "",
  });
  function submitHandler(event) {
    event.preventDefault();
    console.log("Your Data has been submitted")
    console.log(FormData);
  }

  function changeHandler(event) {
    SetFormData((prevFormData) => {
      const {name,value,type,checked} = event.target;
      return {
        ...prevFormData,
        [name]:
          type === "checkbox"
            ? checked
            : value,
      };
    });
  }
  return (
    <form>
      <div className="w-[90vw] md:w-[600px] drop-shadow-2xl flex flex-col gap-4 justify-center items-center bg-[#27E1C1] text-[#2F0F5D] p-4 rounded-xl mx-auto my-8">
        <div className="w-full flex flex-col justify-center items-start gap-2">
          <label htmlFor="firstname" className="text-xl font-bold">
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            value={FormData.firstname}
            id="firstname"
            onChange={changeHandler}
            placeholder="Saheb"
            className="rounded-md p-2 self-stretch bg-[rgba(0,0,0,0.1)] placeholder:text-[rgba(0,0,0,0.6)]"
          />
        </div>

        <div className="w-full flex flex-col justify-center items-start gap-2">
          <label htmlFor="lastname" className="text-xl font-bold">
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            value={FormData.lastname}
            id="lastname"
            onChange={changeHandler}
            placeholder="Hasmi"
            className="rounded-md p-2 self-stretch bg-[rgba(0,0,0,0.1)] placeholder:text-[rgba(0,0,0,0.6)]"
          />
        </div>

        <div className="w-full flex flex-col justify-center items-start gap-2">
          <label htmlFor="email" className="text-xl font-bold">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={FormData.email}
            id="email"
            onChange={changeHandler}
            placeholder="sahebbca2020@gmail.com"
            className="rounded-md p-2 self-stretch bg-[rgba(0,0,0,0.1)] placeholder:text-[rgba(0,0,0,0.6)]"
          />
        </div>

        <div className="w-full flex flex-col justify-center items-start gap-2">
          <label htmlFor="country" className="text-xl font-bold">
            Country
          </label>
          <select
            name="country"
            id="country"
            value={FormData.country}
            onChange={changeHandler}
            className="rounded-md p-2 self-stretch bg-[rgba(0,0,0,0.1)]"
          >
            <option value="India">India</option>
            <option value="Usa">USA</option>
            <option value="England">England</option>
            <option value="Turkey">Turkey</option>
          </select>
        </div>

        <div className="w-full flex flex-col justify-center items-start gap-2">
          <label htmlFor="street" className="text-xl font-bold">
            Street Address :{" "}
          </label>
          <input
            type="text"
            name="street"
            value={FormData.street}
            id="street"
            onChange={changeHandler}
            placeholder="E-308 Street No 10"
            className="rounded-md p-2 self-stretch bg-[rgba(0,0,0,0.1)] placeholder:text-[rgba(0,0,0,0.6)]"
          />
        </div>

        <div className="w-full flex flex-col justify-center items-start gap-2">
          <label htmlFor="city" className="text-xl font-bold">
            City :{" "}
          </label>
          <input
            type="text"
            name="city"
            value={FormData.city}
            id="city"
            onChange={changeHandler}
            placeholder="Shastri Park"
            className="rounded-md p-2 self-stretch bg-[rgba(0,0,0,0.1)] placeholder:text-[rgba(0,0,0,0.6)]"
          />
        </div>

        <div className="w-full flex flex-col justify-center items-start gap-2">
          <label htmlFor="state" className="text-xl font-bold">
            State/Province :{" "}
          </label>
          <input
            type="text"
            name="state"
            value={FormData.state}
            id="state"
            onChange={changeHandler}
            placeholder="Delhi"
            className="rounded-md p-2 self-stretch bg-[rgba(0,0,0,0.1)] placeholder:text-[rgba(0,0,0,0.6)]"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-2">
          <label htmlFor="zipcode" className="text-xl font-bold">
            ZIP / Postal code :{" "}
          </label>
          <input
            type="number"
            name="zipcode"
            value={FormData.zipcode}
            id="zipcode"
            onChange={changeHandler}
            placeholder="110053"
            className="rounded-md p-2 self-stretch bg-[rgba(0,0,0,0.1)] placeholder:text-[rgba(0,0,0,0.6)]"
          />
        </div>

        <div className="w-full flex flex-col justify-center items-start gap-2">
          <h2 className="text-xl font-bold">By Email</h2>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name="comments"
              checked={FormData.comments}
              id="comments"
              onChange={changeHandler}
              className="cursor-pointer"
            />
            <label htmlFor="comments" className="text-xl cursor-pointer">
              Comments
            </label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name="candidates"
              checked={FormData.candidates}
              id="candidates"
              onChange={changeHandler}
              className="cursor-pointer"
            />
            <label htmlFor="candidates" className="text-xl cursor-pointer">
              Candidates
            </label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name="offers"
              checked={FormData.offers}
              id="offers"
              onChange={changeHandler}
              className="cursor-pointer"
            />
            <label htmlFor="offers" className="text-xl cursor-pointer">
              Offers
            </label>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-start gap-2">
          <h2 className="text-xl font-bold">Push Notification</h2>
          <p className="text-md -mt-2">
            These are delivered via SMS to your mobile phone.
          </p>
          <div className="flex gap-2">
            <input
              type="radio"
              name="pushNotification"
              value="Everything"
              id="Everything"
              checked={FormData.pushNotification === "Everything"}
              onChange={changeHandler}
              className="cursor-pointer"
            />
            <label htmlFor="Everything" className="cursor-pointer">
              Everything
            </label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="pushNotification"
              value="Same as email"
              id="Same as email"
              checked={FormData.pushNotification === "Same as email"}
              onChange={changeHandler}
              className="cursor-pointer"
            />
            <label htmlFor="Same as email" className="cursor-pointer">
              Same as email
            </label>
          </div>

          <div className="flex gap-2">
            <input
              type="radio"
              name="pushNotification"
              value="No-push-notifications"
              id="No-push-notifications"
              checked={FormData.pushNotification === "No-push-notifications"}
              onChange={changeHandler}
              className="cursor-pointer"
            />
            <label htmlFor="No-push-notifications" className="cursor-pointer">
              No push notifications
            </label>
          </div>
        </div>

        <button
          onClick={submitHandler}
          className="bg-red-500 py-3 px-8 text-xl font-bold text-white rounded-xl hover:bg-red-700 transition-all duration-200 ease-linear"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default FormPage;
