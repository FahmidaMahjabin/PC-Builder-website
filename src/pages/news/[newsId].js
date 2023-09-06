import RootLayout from "@/components/Layouts/RootLayout";
import Singleproduct from "@/components/UI/Singleproduct";
import { useRouter } from "next/router";
import React from "react";

export default function productDetailPage({ product }) {
  return (
    <div className="center">
      <Singleproduct product={product}></Singleproduct>
    </div>
  );
}
productDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
// export const getStaticPaths = async () => {
//   const res = await fetch("http://localhost:5000/product");
//   const allproduct = await res.json();
//   //   console.log("allproduct:", allproduct);
//   const paths = allproduct?.map((product) => ({ params: { productId: product.id } }));
//   console.log("paths:", paths);
//   return {
//     paths,
//     fallback: false,
//   };
// };
export const getServerSideProps = async (context) => {
  //   console.log("context:", context);
  const { productId } = context.params;
  console.log("productId:", productId);
  const res = await fetch(`http://localhost:5000/product/${productId}`);
  const product = await res.json();
  //   console.log("product:", product);
  return {
    props: {
      product: product,
    },
  };
};
