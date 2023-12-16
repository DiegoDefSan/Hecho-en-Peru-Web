import { useEffect } from "react";
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { NewProductForm } from "../components/NewProductForm"

export const NewProductPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <Header activeLink="" />
      <NewProductForm />
      <Footer />
    </div>
  )
}