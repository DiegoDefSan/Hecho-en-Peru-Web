import { FieldValues, useForm } from "react-hook-form";
import useCategories from "../hooks/useCategories";
import useHandcrafts from "../hooks/useHandcrafts";
import usePostProduct from "../hooks/usePostProduct";
import useRegions from "../hooks/useRegions";
import Product from "../interfaces/product";

import { zodResolver } from "@hookform/resolvers/zod";
import productSchema, { formProductValidation } from "../util/formProductValidation";

export const NewProductForm = () => {

  const {
    mutate: postNewProduct,
    error: errorPostNewProduct
  } = usePostProduct();

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


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formProductValidation>({ resolver: zodResolver(productSchema), mode: "onSubmit" });

  const submitNewProduct = ({ name, price, stock, imagePath, rating, history, details, category, region, handcraft }: FieldValues) => {
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
  }


  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit(submitNewProduct)}>
        <div className="col">
          <div className="col-xl-6">
            <div className="row mb-2">
              <label htmlFor="name" className="col-xl-2 fw-bold">
                Name
              </label>
              <div className="col-xl-10">
                <input
                  {...register("name")}
                  type="text"
                  id="name"
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

          <div className="col-xl-6">
            <div className="row mb-2">
              <label htmlFor="price" className="col-xl-2 fw-bold">
                Price
              </label>
              <div className="col-xl-10">
                <input
                  {...register("price", { valueAsNumber: true })}
                  type="number"
                  step="0.01"
                  min="0"
                  id="price"
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

          <div className="col-xl-6">
            <div className="row mb-2">
              <label htmlFor="stock" className="col-xl-2 fw-bold">
                Stock
              </label>
              <div className="col-xl-10">
                <input
                  {...register("stock", { valueAsNumber: true })}
                  type="number"
                  step="1"
                  min="0"
                  id="stock"
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

          <div className="col-xl-6">
            <div className="row mb-2">
              <label htmlFor="imagePath" className="col-xl-2 fw-bold">
                Image path
              </label>
              <div className="col-xl-10">
                <input
                  {...register("imagePath")}
                  type="text"
                  id="imagePath"
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

          <div className="col-xl-6">
            <div className="row mb-2">
              <label htmlFor="rating" className="col-xl-2 fw-bold">
                Rating
              </label>
              <div className="col-xl-10">
                <input
                  {...register("rating", { valueAsNumber: true })}
                  type="number"
                  step="0.1"
                  min="0.1"
                  id="rating"
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

          <div className="col-xl-6">
            <div className="row mb-2">
              <label htmlFor="history" className="col-xl-2 fw-bold">
                History
              </label>
              <div className="col-xl-10">
                <input
                  {...register("history")}
                  type="text"
                  id="history"
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

          <div className="col-xl-6">
            <div className="row mb-2">
              <label htmlFor="details" className="col-xl-2 fw-bold">
                Details
              </label>
              <div className="col-xl-10">
                <input
                  {...register("details")}
                  type="text"
                  id="details"
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

          <div className="col-xl-6">
            <div className="row mb-2">
              <label htmlFor="category" className="col-xl-2 fw-bold">
                Category
              </label>
              <div className="col-xl-10">
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
                    <option key={category.idCategory} value={category.idCategory}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <div className="invalid-feedback">{errors.category?.message}</div>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="row mb-2">
              <label htmlFor="region" className="col-xl-2 fw-bold">
                Region
              </label>
              <div className="col-xl-10">
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
                    <option key={region.idRegion} value={region.idRegion}>
                      {region.name}
                    </option>
                  ))}
                </select>
                <div className="invalid-feedback">{errors.region?.message}</div>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="row mb-2">
              <label htmlFor="handcraft" className="col-xl-2 fw-bold">
                Handcraft
              </label>
              <div className="col-xl-10">
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
                    <option key={handcraft.idHandcraft} value={handcraft.idHandcraft}>
                      {handcraft.name}
                    </option>
                  ))}
                </select>
                <div className="invalid-feedback">{errors.handcraft?.message}</div>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-xl-6">
              <div className="row">
                <div className="col-xl-10 offset-xl-2">
                  <button id="button" type="submit" className="btn btn-primary btn-sm">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </form>
    </div>
  );
}