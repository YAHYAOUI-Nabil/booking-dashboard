import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsXCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
// import { useCreateAdMutation } from "../../app/api/private/ad";
import toast, { Toaster } from "react-hot-toast";

const AddProduct = () => {
  // const [createAd, { isLoading, isError }] = useCreateAdMutation();
  const [apiUrl, setApiUrl] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = async (values: any) => {
    try {
      const formData = { ...values, onSale: values.onSale === "true" };
      // await createAd(formData as unknown as Ad).unwrap();
      console.log(formData);
      reset({
        title: "",
        price: "",
        description: "",
        discount: "",
        onSale: "",
        priceAfterDiscount: "",
        amazonUrl: "",
        imageUrl: "",
        category: "",
      });
      toast.success("Annonce ajoutée avec succée", {
        position: "top-center",
        duration: 2000,
        style: {
          border: "4px solid #00D26A",
          borderRadius: "0px",
          zIndex: 9999,
        },
      });
    } catch (error) {
      toast.error("Essayer encore, une erreur s'est produite", {
        position: "top-center",
        duration: 2000,
        style: { border: "4px solid #F92F60", borderRadius: "0px" },
      });
    }
  };

  const fetchProductData = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch product data");
      }

      const productData = await response.json();

      reset({
        title: productData[0].title,
        price: productData[0].price,
        description: productData[0].description,
        discount: productData[0].discount,
        onSale: productData[0].onSale === true ? "true" : "false",
        priceAfterDiscount: productData[0].priceAfterDiscount,
        amazonUrl: productData[0].amazonUrl,
        imageUrl: productData[0].imageUrl,
        category: productData[0].category,
      });
    } catch (error) {
      console.error("Error fetching product data:", error);
      alert("Failed to fetch product data. Please check the API URL.");
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div>
      <Toaster />
      <form
        onSubmit={handleSubmit(submit)}
        className="w-[1000px] grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-0 md:rounded-none md:border-none md:shadow-none rounded-md border border-gray-100 shadow-md"
      >
        <div className="flex flex-col gap-4 px-4 md:py-4 py-2 md:col-span-2 col-span-1 md:rounded-md md:border md:border-gray-100 md:shadow-md">
          <p className="text-lg font-medium">Product Details</p>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="title">
              Title<span className="text-second">*</span>
            </label>
            <input
              className={`focus:outline-none h-10 p-3 text-main bg-gray-100 rounded-md border ${
                errors.title ? "border-red-500" : "border-gray-200"
              }`}
              id="title"
              type="text"
              {...register("title", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="category">
              Category<span className="text-second">*</span>
            </label>
            <select
              className={`focus:outline-none h-10 px-2 text-main bg-gray-100 rounded-md border ${
                errors.category ? "border-red-500" : "border-gray-200"
              }`}
              {...register("category", { required: true })}
            >
              <option value="">Select category</option>
              <option value="technology">Technology</option>
              <option value="health">Health</option>
              <option value="sports">Sports</option>
              <option value="outdoors">Outdoors</option>
              <option value="pets">Pets</option>
              <option value="miscellaneous">Miscellaneous</option>
              <option value="Personal Care & Beauty">
                Personal Care & Beauty
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="description">
              Description<span className="text-second">*</span>
            </label>
            <textarea
              className={`focus:outline-none h-40 p-3 text-main bg-gray-100 rounded-md border ${
                errors.description ? "border-red-500" : "border-gray-200"
              }`}
              id="description"
              {...register("description", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="imageUrl">
              Image URL<span className="text-second">*</span>
            </label>
            <input
              className={`focus:outline-none h-10 p-3 text-main bg-gray-100 rounded-md border ${
                errors.description ? "border-red-500" : "border-gray-200"
              }`}
              type="text"
              id="imageUrl"
              {...register("imageUrl", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="amazonUrl">
              Amazon URL<span className="text-second">*</span>
            </label>
            <input
              className={`focus:outline-none h-10 p-3 text-main bg-gray-100 rounded-md border ${
                errors.amazonUrl ? "border-red-500" : "border-gray-200"
              }`}
              type="text"
              id="amazonUrl"
              {...register("amazonUrl", { required: true })}
            />
          </div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 xl:gap-2 gap-4 justify-between w-full">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="price">
                Price<span className="text-second">*</span>
              </label>
              <input
                className={`focus:outline-none h-10 p-3 text-main bg-gray-100 rounded-md border ${
                  errors.price ? "border-red-500" : "border-gray-200"
                }`}
                type="number"
                id="price"
                {...register("price", { required: true })}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="discount">
                Discount<span className="text-second">*</span>
              </label>
              <input
                className={`focus:outline-none h-10 p-3 text-main bg-gray-100 rounded-md border ${
                  errors.discount ? "border-red-500" : "border-gray-200"
                }`}
                type="text"
                id="discount"
                {...register("discount", { required: true })}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="priceAfterDiscount">
                Price after discount<span className="text-second">*</span>
              </label>
              <input
                className={`focus:outline-none h-10 p-3 text-main bg-gray-100 rounded-md border ${
                  errors.price ? "border-red-500" : "border-gray-200"
                }`}
                type="number"
                id="priceAfterDiscount"
                {...register("priceAfterDiscount", { required: true })}
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label className={`""`}>
              On sale<span className="text-second">*</span>
            </label>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 h-10">
                <input
                  type="radio"
                  value="true"
                  id="onSale"
                  {...register("onSale", { required: true })}
                />
                <label htmlFor="onSale">Yes</label>
              </div>
              <div className="flex items-center gap-2 h-10">
                <input
                  type="radio"
                  value="false"
                  id="notOnSale"
                  {...register("onSale", { required: true })}
                />
                <label htmlFor="onSale">No</label>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-4">
            <input
              className={`rounded-md w-fit px-6 py-2 font-bold text-main border border-main hover:opacity-75 hover:border-main/75 ${"cursor-pointer"} `}
              onClick={handleCancel}
              type="button"
              value="Cancel"
            />
            <div className="bg-main rounded-md">
              <input
                className={`rounded-md w-fit px-6 py-2 font-bold text-white bg-[#0033FF] hover:bg-main/75 ${"cursor-pointer"} `}
                type="submit"
                value="Submit"
              />
            </div>
          </div>
        </div>
        <div className="px-4 md:py-4 py-2 col-span-1 flex flex-col gap-4 h-fit md:rounded-md md:border md:border-gray-100 md:shadow-md">
          <p className="text-lg font-medium">Search details from AMAZON</p>
          <input
            type="url"
            placeholder="set the api product link"
            className="border-2 border-gray-300 focus:outline-[#0033FF] rounded-md px-4 py-2"
            value={apiUrl}
            onChange={(e) => setApiUrl(e.target.value)}
          />
          <button
            onClick={fetchProductData}
            className="w-full bg-[#0033FF] text-white text-lg font-medium px-4 py-2 rounded-md"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
