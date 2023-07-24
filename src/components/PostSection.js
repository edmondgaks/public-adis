import react, { useState } from "react"; 

const PostSection = () => {
const [products, setProducts] = useState([
  {
    id: 1,
    img: "img/sport-3365503_640.jpg",
    name: "Iphone 64GB 6s Plus",
    category: "Phones",
    location: "London",
    price: "1600"
  }, {
    id: 2,
    img: "img/books-1617327_640.jpg",
    name: "Books for rent",
    category: "Books",
    location: "Berlin",
    price: "5000"
  }, {
    id: 3,
    img: "img/football-3471371_640.jpg",
    name: "Football New fifa",
    category: "Games",
    location: "Lahore",
    price: "10.0 M"
  }, {
    id: 4,
    img: "img/bicycle-1209682_640.jpg",
    name: "Bicycle",
    category: "vehicle",
    location: "New York",
    price: "500.0 k"
  }, {
    id: 5,
    img: "img/vegetables-1584999_640.jpg",
    name: "Fresh Food And ....",
    category: "Food",
    location: "Norway",
    price: "150.0 k"
  }, {
    id: 6,
    img: "img/bmw-1313343_640.jpg",
    name: "New BMW For...",
    category: "Car",
    location: "Australia",
    price: "10.0 m",
  }, {
    id: 7,
    img: "img/job-2860035_640.jpg",
    name: "We are hiring",
    category: "Jobs",
    location: "Pakistan",
    price: "...",
  }, {
    id: 8,
    img: "img/home-office-336374_640.jpg",
    name: "Apple Mac 16gb",
    category: "Laptop",
    location: "Auckland",
    price: "500.0 k",
  }, {
    id: 9,
    name: "32' Lcd Tv",
    category: "LCD",
    location: "Paris",
    price: "2800"
  }, {
    id: 10,
    name: "Dog for adoption",
    category: "Animal",
    location: "Japan",
    price: "Free",
  }, {
    id: 11, 
    name: "2 Pupies Inocent",
    category: "Dogs",
    location: "Turkey",
    price: "5.0 M"
  }, {
    id: 12,
    name: "Child Care Center",
    category: "Child Care",
    location: "Atlanta",
    price: "50.0 k"
  }


])

    return (
        <div className="post-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="styleh2 karma text-center">Últimos Anuncios</h2>
            </div>
            {products.map((product) => {
              return (
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 margin_10px" key={product.id}>
                  <div className="post-box">
                    <div className="thumbnail-holder">
                      <a href="/product">
                        <img src={product.img} alt="iphone" />
                      </a>
                    </div>
                    <div className="post-box-content">
                      <h3><a href="/product">{product.name}</a></h3>

                      <div className="post-category">
                        <a href="/product"> <i className="fa fa-list-alt"></i> {product.category}</a>
                      </div>
                      <div className="post-location">
                        <a href="/product"> <i className="fa fa-location-arrow"></i> {product.location}</a>
                      </div>
                      <div className="post-meta"><i className="fa fa-dollar"></i>{product.price}</div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
}

export default PostSection