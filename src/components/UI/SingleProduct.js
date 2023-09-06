import React from "react";
import { Card, Col } from "antd";
import Image from "next/image";
import {
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";
const { Meta } = Card;
export default function Singleproduct({ product }) {
  return (
    <>
      <Col p={8}>
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
          <Link href={`product/${product.id}`}>
            <p
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
            </p>
          </Link>
        </Card>
      </Col>
    </>
  );
}
