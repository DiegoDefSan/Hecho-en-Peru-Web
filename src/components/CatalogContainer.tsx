import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Category from "../interfaces/category";
import Region from "../interfaces/region";
import Product from "../interfaces/product";
import { FiltersContainer } from "./FiltersContainer";
import { ProductsContainer } from "./ProductsContainer";

import '../assets/styles/components/catalog_container.css';
import { ProductModifyingContext } from "../contexts/ProductModifyingContext";

interface ApiProps {
  categories: Category[];
  regions: Region[];
  products: Product[];
}

export const CatalogContainer = (props: ApiProps) => {

  const [products, setProducts] = useState<Product[]>(props.products);

  const currentPage = 1;
  const maxNumberItemsInPage = 6;
  const lastNumberPage = Math.ceil(props.products.length / maxNumberItemsInPage);

  const [page, setPage] = useState(currentPage);
  const [lastPage, setLastPage] = useState(lastNumberPage);

  function nextPage() {
    setPage(prevPage => prevPage + 1);
  }
  function prevPage() {
    setPage(prevPage => prevPage - 1);
  }

  const { assignModifyingProduct }: any = useContext(ProductModifyingContext);

  const [filterData, setFilterData] = useState({
    sortBy: "rating-desc",
    priceRange: "all",
    categories: props.categories
      .map((category) => (
        { key: category.idCategory, name: category.name, checked: true }
      )),
    regions: props.regions
      .map((region) => (
        { key: region.idRegion, name: region.name, checked: true }
      )),
  });

  const filterProducts = (startIndexProduct: number, lastIndexProduct: number) => {
    const priceRangeSelected = filterData.priceRange;
    const minPriceSelected = priceRangeSelected === "all" ? 0 : Number(filterData.priceRange.split("-")[0]);
    const maxPriceSelected = priceRangeSelected === "all" ? 1000 : Number(filterData.priceRange.split("-")[1]);
    const categoriesSelected = filterData.categories;
    const regionsSelected = filterData.regions;

    const filteredProducts = props.products
      .filter((product) => {
        const productPrice = product.price;
        return productPrice >= minPriceSelected && productPrice <= maxPriceSelected;
      })
      .filter((product) => {
        const productIdCategory = product.category.idCategory;
        return categoriesSelected.find((category) => category.key === productIdCategory)?.checked;
      })
      .filter((product) => {
        const productIdRegion = product.region.idRegion;
        return regionsSelected.find((region) => region.key === productIdRegion)?.checked;
      })
      .sort((productA, productB) => {
        switch (filterData.sortBy) {
          case "price-asc":
            return productA.price - productB.price;
          case "price-desc":
            return productB.price - productA.price;
          case "rating-asc":
            return productA.rating - productB.rating;
          case "rating-desc":
            return productB.rating - productA.rating;
          default:
            return 0;
        }
      });

    const pagingFilteredProducts = filteredProducts.slice(startIndexProduct, lastIndexProduct);

    setLastPage(Math.ceil(filteredProducts.length / maxNumberItemsInPage));
    setProducts(pagingFilteredProducts);
  }

  // Use effect by apply filter
  useEffect(() => {
    filterProducts(0, maxNumberItemsInPage);

    setPage(1);
  }, [filterData]);

  // Use effect by changing page
  useEffect(() => {
    const startIndexProduct = (page - 1) * maxNumberItemsInPage;
    const lastIndexProduct = page * maxNumberItemsInPage;

    filterProducts(startIndexProduct, lastIndexProduct);
  }, [page]);


  return (
    <div className="catalog-container row">
      <FiltersContainer
        filterData={filterData}
        setFilterData={setFilterData}
      />
      <div className="col-md-9 col-sm-12 row">
        <ProductsContainer
          products={products}
        />
        <div className="pagination">
          {page !== 1 && <button className="arrow-paging" onClick={prevPage}> {'<'} </button>}
          {lastPage !== 1 && <div className="page-number">{page}</div>}
          {page !== lastPage && <button className="arrow-paging" onClick={nextPage}>{'>'}</button>}
        </div>
      </div>
      <div className="btn-add-product">
        <Link to="/new-product"><button id="new-product-button" onClick={() => { assignModifyingProduct(undefined) }}>Add new product</button></Link>
      </div>
    </div>
  )
}