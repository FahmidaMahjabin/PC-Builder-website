import { Card, Col } from "antd";
import Image from "next/image";
import React from "react";

export default function SelectedComponent({ product }) {
  return (
    <Col span={6}>
      <Card
        hoverable
        style={{ width: 300 }}
        cover={
          <Image
            src={product.image_url}
            width={100}
            height={100}
            alt="product image"
          ></Image>
        }
      >
        <p>Title: {product.name}</p>
        <p>Category: {product.category}</p>
        <p>Rating: {product.rating}</p>
        <p>Price: {product.price}</p>
        <p>Status: {product.status}</p>
      </Card>
    </Col>
  );
}
