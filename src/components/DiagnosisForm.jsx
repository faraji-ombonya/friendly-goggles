import React, { useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Answer from "../utils/Answer";

export default function DiagnosisForm({ setResult, setOpen }) {
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const answer = new Answer();
    const data = await answer.post(formData);
    console.log("request payload", formData);
    console.log("response payload", data);
    setResult(data);
    setOpen(true);
  };

  return (
    <form className="py-10 " onSubmit={(e) => handleSubmit(e)}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Assessment Form
          </h2>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-12 gap-x-6 gap-y-8">
            <div className="sm:col-span-3">
              <label
                htmlFor="smoking"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Do you smoke?
              </label>
              <div className="mt-2">
                <select
                  id="smoking"
                  name="smoking"
                  onChange={(e) => handleInputChange(e)}
                  autoComplete="smoking"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>--SELECT--</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="alcohol_drinking"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Do you drink alcohol?
              </label>
              <div className="mt-2">
                <select
                  id="alcohol_drinking"
                  name="alcohol_drinking"
                  onChange={(e) => handleInputChange(e)}
                  autoComplete="alcohol_drinking"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>--SELECT--</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="stroke"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Do you have stroke?
              </label>
              <div className="mt-2">
                <select
                  id="stroke"
                  name="stroke"
                  onChange={(e) => handleInputChange(e)}
                  autoComplete="stroke"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>--SELECT--</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="diff_walking"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Diff walking
              </label>
              <div className="mt-2">
                <select
                  id="diff_walking"
                  name="diff_walking"
                  onChange={(e) => handleInputChange(e)}
                  autoComplete="diff_walking"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>--SELECT--</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="sex"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                What gender are you?
              </label>
              <div className="mt-2">
                <select
                  id="sex"
                  name="sex"
                  onChange={(e) => handleInputChange(e)}
                  autoComplete="sex"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>--SELECT--</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="age_category"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                What age category are you?
              </label>
              <div className="mt-2">
                <select
                  id="age_category"
                  name="age_category"
                  onChange={(e) => handleInputChange(e)}
                  autoComplete="age_category"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>--SELECT--</option>
                  <option>18-24</option>
                  <option>25-29</option>
                  <option>30-34</option>
                  <option>35-39</option>
                  <option>40-44</option>
                  <option>45-49</option>
                  <option>50-54</option>
                  <option>55-59</option>
                  <option>60-64</option>
                  <option>65-69</option>
                  <option>70-74</option>
                  <option>75-79</option>
                  <option>80 or older</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="race"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                What race are you?
              </label>
              <div className="mt-2">
                <select
                  id="race"
                  name="race"
                  autoComplete="race"
                  onChange={(e) => handleInputChange(e)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>--SELECT--</option>
                  <option>Hispanic</option>
                  <option>Black</option>
                  <option>White</option>
                  <option>Asian</option>
                  <option>Other</option>
                  <option>American Indian/Alaskan Native</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="diabetic"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Are you diabetic?
              </label>
              <div className="mt-2">
                <select
                  id="diabetic"
                  name="diabetic"
                  onChange={(e) => handleInputChange(e)}
                  autoComplete="diabetic"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>--SELECT--</option>
                  <option>Yes</option>
                  <option>No</option>
                  <option>Yes (during pregnancy)</option>
                  <option>No, borderline diabetes</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="physical_activity"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Do you do regular exercise?
              </label>
              <div className="mt-2">
                <select
                  id="physical_activity"
                  name="physical_activity"
                  onChange={(e) => handleInputChange(e)}
                  autoComplete="physical_activity"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>--SELECT--</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="gen_health"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Describe your general health condition.
              </label>
              <div className="mt-2">
                <select
                  id="gen_health"
                  name="gen_health"
                  onChange={(e) => handleInputChange(e)}
                  autoComplete="gen_health"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>--SELECT--</option>
                  <option>Excellent</option>
                  <option>Very good</option>
                  <option>Good</option>
                  <option>Fair</option>
                  <option>Poor</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="sleep_time"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                How many hours of sleep do you get?
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="sleep_time"
                  onChange={(e) => handleInputChange(e)}
                  autoComplete="sleep_time"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>--SELECT--</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="asthma"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Are you asthmatic?
              </label>
              <div className="mt-2">
                <select
                  id="asthma"
                  name="asthma"
                  onChange={(e) => handleInputChange(e)}
                  autoComplete="asthma"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>--SELECT--</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="kidney_disease"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Do you have kidney disease?
              </label>
              <div className="mt-2">
                <select
                  id="kidney_disease"
                  name="kidney_disease"
                  onChange={(e) => handleInputChange(e)}
                  autoComplete="kidney_disease"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>--SELECT--</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="skin_cancer"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Do you have skin cancer?
              </label>
              <div className="mt-2">
                <select
                  id="skin_cancer"
                  name="skin_cancer"
                  onChange={(e) => handleInputChange(e)}
                  autoComplete="skin_cancer"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>--SELECT--</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="bmi"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                What is you BMI?
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="bmi"
                  onChange={(e) => handleInputChange(e)}
                  id="bmi"
                  autoComplete="bmi"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="physical_health"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                How many of the past 30 days did you experience poor physical health?
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="physical_health"
                  onChange={(e) => handleInputChange(e)}
                  id="physical_health"
                  autoComplete="physical_health"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="mental_health"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                How many of the past 30 days did you experience poor mental health?
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="mental_health"
                  onChange={(e) => handleInputChange(e)}
                  id="mental_health"
                  autoComplete="mental_health"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Query
        </button>
      </div>
    </form>
  );
}
