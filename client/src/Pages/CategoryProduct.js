import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import '../styles/Categoryproduct.css'

const CategoryProduct = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        if (params?.slug) getPrductsByCat();
    }, [params?.slug]);
    const getPrductsByCat = async () => {
        try {
            const { data } = await axios.get(
                `http://localhost:8080/api/v1/product/product-category/${params.slug}`
            );
            setProducts(data?.products);
            setCategory(data?.category);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Layout>
            <div className="container mt-3 category">
                <h4 className="text-center">Category - {category?.name}</h4>
                <h6 className="text-center">{products?.length} result found </h6>
                <div className="row">
                    <div className="col-md-9 offset-1">
                        <div className="d-flex flex-wrap">
                            {products?.map((p) => (
                                <div className="card m-2" key={p._id}>
                                    <img
                                        src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                                        className="card-img-top"
                                        alt={p.name}
                                    />
                                    <div className="card-body">
                                        <div className="card-name-price">
                                            <h5 className="card-title">{p.name}</h5>
                                            <h5 className="card-title card-price">
                                                {p.price.toLocaleString("en-US", {
                                                    style: "currency",
                                                    currency: "USD",
                                                })}
                                            </h5>
                                        </div>
                                        <p className="card-text ">
                                            {p.description.substring(0, 60)}...
                                        </p>
                                        <div className="card-name-price">
                                            <button
                                                className="btn btn-info ms-1"
                                                onClick={() => navigate(`/products/${p.slug}`)}
                                            >
                                                More Details
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default CategoryProduct
