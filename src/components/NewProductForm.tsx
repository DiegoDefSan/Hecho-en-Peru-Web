import { FieldValues, useForm } from "react-hook-form";
import useCategories from "../hooks/useCategories";
import useHandcrafts from "../hooks/useHandcrafts";
import usePostProduct from "../hooks/usePostProduct";
import useRegions from "../hooks/useRegions";
import Product from "../interfaces/product";

import { zodResolver } from "@hookform/resolvers/zod";
import productSchema, { formProductValidation } from "../util/formProductValidation";

import '../assets/styles/components/form_container.css'
import { useContext, useState } from "react";
import { ProductModifyingContext } from "../contexts/ProductModifyingContext";
import usePutProduct from "../hooks/usePutProduct";
import { PopUp } from "./PopUp";

export const NewProductForm = () => {


  const [algorithmCompleted, setAlgorithmCompleted] = useState(false);

  const { productModifying }: any = useContext(ProductModifyingContext);

  const isRegisteringProduct = productModifying === undefined;

  const {
    mutate: postNewProduct,
    error: errorPostNewProduct
  } = usePostProduct();

  const {
    mutate: putNewProduct,
    error: errorPutNewProduct
  } = usePutProduct();

  const {
    data: categories,
  } = useCategories();

  const {
    data: regions,
  } = useRegions();

  const {
    data: handcrafts,
  } = useHandcrafts();

  // if (isLoadingCategories || isLoadingRegions || isLoadingHandcrafts) {
  //   return <div>Loading...</div>
  // }

  if (errorPostNewProduct) throw errorPostNewProduct;
  if (errorPutNewProduct) throw errorPutNewProduct;


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formProductValidation>({ resolver: zodResolver(productSchema), mode: "onSubmit" });

  let submitNewProduct;
  let submitModifiedProduct;
  if (isRegisteringProduct) {
    submitNewProduct = ({ name, price, stock, imagePath, rating, history, details, category, region, handcraft }: FieldValues) => {
      const newProduct: Product = {
        name: name,
        price: price,
        stock: stock,
        imagePath: imagePath,
        rating: rating,
        history: history,
        details: details,
        category: {
          idCategory: category,
          name: ""
        },
        region: {
          idRegion: region,
          name: ""
        },
        handcraft: {
          idHandcraft: handcraft,
          name: "",
          history: ""
        }
      }

      postNewProduct(newProduct);
      reset();

      setAlgorithmCompleted(true);
    }
  } else {
    submitModifiedProduct = ({ name, price, stock, imagePath, rating, history, details, category, region, handcraft }: FieldValues) => {
      const modifiedProduct: Product = {
        idProduct: productModifying.idProduct,
        name: name,
        price: price,
        stock: stock,
        imagePath: imagePath,
        rating: rating,
        history: history,
        details: details,
        category: {
          idCategory: category,
          name: ""
        },
        region: {
          idRegion: region,
          name: ""
        },
        handcraft: {
          idHandcraft: handcraft,
          name: "",
          history: ""
        }
      }

      putNewProduct(modifiedProduct);
      reset();

      setAlgorithmCompleted(true);
    }
  }

  return (
    <div className="form-container">
      {algorithmCompleted && <PopUp action={isRegisteringProduct ? 'POST' : 'PUT'} />}
      <form className="form" onSubmit={handleSubmit(isRegisteringProduct ? submitNewProduct! : submitModifiedProduct!)}>
        <div className="form-subcontainer">
          <div className="input-container">
            <div className="row-input-container">
              <label htmlFor="name" className="label-subcontainer fw-bold">
                Name
              </label>
              <div className="input-subcontainer">
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  defaultValue={isRegisteringProduct ? null : productModifying.name}
                  className={
                    errors.name
                      ? "form-control form-control-sm is-invalid"
                      : "form-control form-control-sm"
                  }
                />
                <div className="invalid-feedback">{errors.name?.message}</div>
              </div>
            </div>
          </div>

          <div className="input-container">
            <div className="row-input-container">
              <label htmlFor="price" className="label-subcontainer fw-bold">
                Price
              </label>
              <div className="input-subcontainer">
                <input
                  {...register("price", { valueAsNumber: true })}
                  type="number"
                  step="0.01"
                  min="0"
                  id="price"
                  defaultValue={isRegisteringProduct ? null : productModifying.price}
                  className={
                    errors.price
                      ? "form-control form-control-sm is-invalid"
                      : "form-control form-control-sm"
                  }
                />
                <div className="invalid-feedback">{errors.price?.message}</div>
              </div>
            </div>
          </div>

          <div className="input-container">
            <div className="row-input-container">
              <label htmlFor="stock" className="label-subcontainer fw-bold">
                Stock
              </label>
              <div className="input-subcontainer">
                <input
                  {...register("stock", { valueAsNumber: true })}
                  type="number"
                  step="1"
                  min="0"
                  id="stock"
                  defaultValue={isRegisteringProduct ? null : productModifying.stock}
                  className={
                    errors.stock
                      ? "form-control form-control-sm is-invalid"
                      : "form-control form-control-sm"
                  }
                />
                <div className="invalid-feedback">{errors.stock?.message}</div>
              </div>
            </div>
          </div>

          <div className="input-container">
            <div className="row-input-container">
              <label htmlFor="imagePath" className="label-subcontainer fw-bold">
                Image path
              </label>
              <div className="input-subcontainer">
                <input
                  {...register("imagePath")}
                  type="text"
                  id="imagePath"
                  defaultValue={isRegisteringProduct ? null : productModifying.imagePath}
                  className={
                    errors.imagePath
                      ? "form-control form-control-sm is-invalid"
                      : "form-control form-control-sm"
                  }
                />
                <div className="invalid-feedback">{errors.imagePath?.message}</div>
              </div>
            </div>
          </div>

          <div className="input-container">
            <div className="row-input-container">
              <label htmlFor="rating" className="label-subcontainer fw-bold">
                Rating
              </label>
              <div className="input-subcontainer">
                <input
                  {...register("rating", { valueAsNumber: true })}
                  type="number"
                  step="0.1"
                  min="0.1"
                  id="rating"
                  defaultValue={isRegisteringProduct ? null : productModifying.rating}
                  className={
                    errors.rating
                      ? "form-control form-control-sm is-invalid"
                      : "form-control form-control-sm"
                  }
                />
                <div className="invalid-feedback">{errors.rating?.message}</div>
              </div>
            </div>
          </div>

          <div className="input-container">
            <div className="row-input-container">
              <label htmlFor="history" className="label-subcontainer fw-bold">
                History
              </label>
              <div className="input-subcontainer">
                <input
                  {...register("history")}
                  type="text"
                  id="history"
                  defaultValue={isRegisteringProduct ? null : productModifying.history}
                  className={
                    errors.history
                      ? "form-control form-control-sm is-invalid"
                      : "form-control form-control-sm"
                  }
                />
                <div className="invalid-feedback">{errors.history?.message}</div>
              </div>
            </div>
          </div>

          <div className="input-container">
            <div className="row-input-container">
              <label htmlFor="details" className="label-subcontainer fw-bold">
                Details
              </label>
              <div className="input-subcontainer">
                <input
                  {...register("details")}
                  type="text"
                  id="details"
                  defaultValue={isRegisteringProduct ? null : productModifying.details}
                  className={
                    errors.details
                      ? "form-control form-control-sm is-invalid"
                      : "form-control form-control-sm"
                  }
                />
                <div className="invalid-feedback">{errors.details?.message}</div>
              </div>
            </div>
          </div>

          <div className="input-container">
            <div className="row-input-container">
              <label htmlFor="category" className="label-subcontainer fw-bold">
                Category
              </label>
              <div className="input-subcontainer">
                <select
                  {...register("category")}
                  id="category"
                  className={
                    errors.category
                      ? "form-control form-control-sm is-invalid"
                      : "form-control form-control-sm"
                  }
                >
                  <option value="0">Select a category</option>
                  {categories?.map((category) => (
                    <option key={category.idCategory} value={category.idCategory} selected={isRegisteringProduct ? false : category.idCategory === productModifying.category.idCategory}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <div className="invalid-feedback">{errors.category?.message}</div>
              </div>
            </div>
          </div>

          <div className="input-container">
            <div className="row-input-container">
              <label htmlFor="region" className="label-subcontainer fw-bold">
                Region
              </label>
              <div className="input-subcontainer">
                <select
                  {...register("region")}
                  id="region"
                  className={
                    errors.region
                      ? "form-control form-control-sm is-invalid"
                      : "form-control form-control-sm"
                  }
                >
                  <option value="0">Select a region</option>
                  {regions?.map((region) => (
                    <option key={region.idRegion} value={region.idRegion} selected={isRegisteringProduct ? false : region.name === productModifying.region.name}>
                      {region.name}
                    </option>
                  ))}
                </select>
                <div className="invalid-feedback">{errors.region?.message}</div>
              </div>
            </div>
          </div>

          <div className="input-container">
            <div className="row-input-container">
              <label htmlFor="handcraft" className="label-subcontainer fw-bold">
                Handcraft
              </label>
              <div className="input-subcontainer">
                <select
                  {...register("handcraft")}
                  id="handcraft"
                  className={
                    errors.handcraft
                      ? "form-control form-control-sm is-invalid"
                      : "form-control form-control-sm"
                  }
                >
                  <option value="0">Select a handcraft</option>
                  {handcrafts?.map((handcraft) => (
                    <option key={handcraft.idHandcraft} value={handcraft.idHandcraft} selected={isRegisteringProduct ? false : handcraft.name === productModifying.handcraft.name}>
                      {handcraft.name}
                    </option>
                  ))}
                </select>
                <div className="invalid-feedback">{errors.handcraft?.message}</div>
              </div>
            </div>
          </div>

          <div className="button-container">
            <button id="button" type="submit" className="btn-submit-product">
              Register
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}