import { useParams } from "react-router-dom"
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import useGetProductById from "../hooks/useGetProduct";
import { ProductDetailsContainer } from "../components/ProductDetailsContainer";

export const ProductDetailsPage = () => {

  const { idProduct } = useParams();

  const {
    data: product,
    isLoading: isLoading
  } = useGetProductById(idProduct);

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Header activeLink="" />
      <ProductDetailsContainer product={product!} />
      <Footer />
    </div>
  )
}