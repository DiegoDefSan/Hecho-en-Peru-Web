import Category from "./category";
import Handcraft from "./handcraft";
import Region from "./region";

interface Product {
  idProduct: string;
  name: string;
  price: number;
  stock: number;
  imagePath: string;
  rating: number;
  history: string;
  details: string;
  category: Category;
  region: Region;
  handcraft: Handcraft;
}

export default Product;