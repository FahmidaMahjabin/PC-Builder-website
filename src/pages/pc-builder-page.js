import { useGetProductByCategoryQuery } from "@/redux/api/apiSlice";
import { Button, Card, Col, Row } from "antd";
import Link from "next/link";
import React from "react";
const categories = [
  "CPU",
  "Motherboard",
  "RAM",
  "Power Supply Unit",
  "Storage Device",
  "Monitor",
];

export default function PCBuilderPage() {
  const handleSelect = (event) => {
    const category = event.target.title;
    // const { data, isLoading } = useGetProductByCategoryQuery(category);
  };
  return (
    <div>
      <h1>PC-Builder</h1>
      <h1>Category</h1>
      <Row gutter={[16, 24]}>
        {categories.map((category) => (
          <Col
            key={categories.indexOf(category)}
            className="gutter-row"
            span={6}
          >
            <Card
              size="small"
              title={category}
              style={{
                width: 300,
              }}
            >
              <Link href={`http://localhost:3000/products/${category}`}>
                Select
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
