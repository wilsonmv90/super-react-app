function Article({ products }) {
  return (
    <>
      <article className="article__item">
        {products.map((product) => (
          <div key={product.id}>
            <h2 className="article__title">{product.name}</h2>
            <img
              className="article__img"
              src={product.image}
              alt={product.name}
            />
            <p className="article__paragrah">{product.texto}</p>
          </div>
        ))}
      </article>
    </>
  );
}

export default Article; 




