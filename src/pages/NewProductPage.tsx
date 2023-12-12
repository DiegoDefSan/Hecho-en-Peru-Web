import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { NewProductForm } from "../components/NewProductForm"

export const NewProductPage = () => {
  return (
    <div>
      <Header activeLink="" />
      <NewProductForm />
      <Footer />
    </div>
  )
}