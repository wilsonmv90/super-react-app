import Article from "../components/Article";
import products from "../api/products.json";

export default function Section() {
  return (
    <>
      <section>
        <h1>nuestros productos</h1>

        <Article products={products} />
      </section>
    </>
  );
}
