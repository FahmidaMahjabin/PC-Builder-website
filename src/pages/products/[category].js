import RootLayout from "@/components/Layouts/RootLayout";
import Singleproduct from "@/components/UI/SingleProduct";
import { useGetProductByCategoryQuery } from "@/redux/api/apiSlice";
import { Row } from "antd";
import { useRouter } from "next/router";
import React from "react";

export default function SameCategoryProduct({ products }) {
  // const { data, isLoading } = useGetProductByCategoryQuery(category);
  // console.log("data:", data);
  // console.log("products from sameCategoryProduct:", products);
  return (
    <Row gutter={16} justify="center">
      {products?.map((product) => (
        <Singleproduct key={product.id} product={product}></Singleproduct>
      ))}
    </Row>
  );
}
SameCategoryProduct.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticPaths = async () => {
  const res = await fetch(
    "https://book-library-server-green.vercel.app/product/all-products"
  );
  const data = await res.json();
  //   console.log("allproduct:", allproduct);
  const paths = data?.data?.map((product) => ({
    params: { category: product.category },
  }));
  // console.log("paths:", paths);
  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps = async (context) => {
  //   console.log("context:", context);
  const { category } = context.params;
  console.log("category:", category);
  const res = await fetch(
    `https://book-library-server-green.vercel.app/product/${category}`
  );
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
};
