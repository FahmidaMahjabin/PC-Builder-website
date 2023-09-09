import React from "react";
import { Card, Col } from "antd";
import Image from "next/image";
import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToBuilder } from "@/redux/product";
const { Meta } = Card;
export default function Singleproduct({ product }) {
  const dispatch = useDispatch();
  const productsInBuild = useSelector((state) => state.product);
  console.log("productInBuild:", productsInBuild);
  return (
    <>
      <Col className="gutter-row" span={6} p={8}>
        <Card
          hoverable
          cover={
            <Image
              src={product.image_url}
              width={100}
              height={100}
              alt="product image"
            ></Image>
          }
        >
          <p
            style={{
              // display: "flex",
              // justifyContent: "space-between",
              // width: "90%",
              color: "gray",
              margin: "10px 0px",
            }}
          >
            <p>Title: {product.name}</p>
            <p>Category: {product.category}</p>
            <p>Rating: {product.rating}</p>
            <p>Price: {product.price}</p>
            <p>Status: {product.status}</p>
          </p>
          <Link href={`http://localhost:3000/products/product/${product.id}`}>
            <button
              style={{
                // fontSize: "20px",
                margin: "20px 0px",
                backgroundColor: "black",
                color: "white",
                // width: "168px",
                padding: "2px 5px ",
                fontWeight: "300",
                letterSpacing: "3px",
              }}
            >
              See Detail <ArrowRightOutlined />
            </button>
          </Link>
          <br></br>
          <Link href={`http://localhost:3000/pc-builder-page`}>
            <button
              onClick={() => {
                console.log("clicked");
                dispatch(addToBuilder(product));
              }}
              style={{
                // fontSize: "20px",
                margin: "20px 0px",
                backgroundColor: "black",
                color: "white",
                // width: "168px",
                padding: "2px 5px ",
                fontWeight: "300",
                letterSpacing: "3px",
              }}
            >
              Add to Builder <ArrowRightOutlined />
            </button>
          </Link>
        </Card>
      </Col>
    </>
  );
}
