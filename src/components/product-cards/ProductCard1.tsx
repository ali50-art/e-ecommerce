import LazyImage from "@component/LazyImage";
import { useAppContext } from "@context/app/AppContext";
import { CartItem } from "@reducer/cartReducer";
import Link from "next/link";
import React, { Fragment, useCallback, useState } from "react";
import { CSSProperties } from "styled-components";
import Box from "../Box";
import Button from "../buttons/Button";
import Card, { CardProps } from "../Card";
import { Chip } from "../Chip";
import FlexBox from "../FlexBox";
import Icon from "../icon/Icon";
import Modal from "../modal/Modal";
import ProductIntro from "../products/ProductIntro";
import Rating from "../rating/Rating";
import { H3, SemiSpan } from "../Typography";
import { StyledProductCard1 } from "./ProductCardStyle";

export interface ProductCard1Props extends CardProps {
  className?: string;
  style?: CSSProperties;
  imgUrl?: string;
  title?: string;
  price?: number;
  off?: number;
  rating?: number;
  id?: string | number;
  // className?: string;
  // style?: CSSProperties;
  // imgUrl: string;
  // title: string;
  // price: number;
  // off: number;
  // rating?: number;
  // subcategories?: Array<{
  //   title: string;
  //   url: string;
  // }>;
}

const ProductCard1: React.FC<ProductCard1Props> = ({
  id,
  imgUrl,
  title,
  price,

  ...props
}) => {
  console.log("--price-- : ", price);

  return (
    <StyledProductCard1 {...props}>
      <div className="image-holder">
        <FlexBox className="extra-icons">
          <Icon className="favorite-icon outlined-icon" variant="small">
            heart
          </Icon>
          {/* <Icon className="favorite-icon" color="primary" variant="small">
              heart-filled
            </Icon> */}
        </FlexBox>

        <Link href={`/product/${id}`}>
          <a>
            <LazyImage
              src={`http://localhost:5001/${imgUrl}`}
              width="100%"
              height="auto"
              layout="responsive"
              alt={title}
            />
          </a>
        </Link>
      </div>
      <div className="details">
        <FlexBox>
          <Box flex="1 1 0" minWidth="0px" mr="0.5rem">
            <Link href={`/product/${id}`}>
              <a>
                <H3
                  className="title"
                  fontSize="14px"
                  textAlign="left"
                  fontWeight="600"
                  color="text.secondary"
                  mb="10px"
                  title={title}
                >
                  {title}
                </H3>
              </a>
            </Link>

            <FlexBox alignItems="center" mt="10px">
              <SemiSpan pr="0.5rem" fontWeight="600" color="primary.main">
                ${Number(price).toFixed(2)}
              </SemiSpan>
            </FlexBox>
          </Box>

          <FlexBox
            flexDirection="column-reverse"
            alignItems="center"
            justifyContent={"space-between"}
            width="30px"
          >
            {/* <div className="add-cart"> */}
            <Button
              variant="outlined"
              color="primary"
              padding="3px"
              size="none"
              borderColor="primary.light"
              // onClick={handleCartAmountChange((cartItem?.qty || 0) + 1)}
            >
              <Icon variant="small">plus</Icon>
            </Button>

            {/* {!!cartItem?.qty && (
              
            )} */}
            <Fragment>
              <SemiSpan color="text.primary" fontWeight="600">
                0
              </SemiSpan>
              <Button
                variant="outlined"
                color="primary"
                padding="3px"
                size="none"
                borderColor="primary.light"
                // onClick={handleCartAmountChange(cartItem?.qty - 1)}
              >
                <Icon variant="small">minus</Icon>
              </Button>
            </Fragment>
          </FlexBox>
        </FlexBox>
      </div>
    </StyledProductCard1>
  );
};

ProductCard1.defaultProps = {
  id: "324321",
  title: "KSUS ROG Strix G15",
  imgUrl: "/assets/images/products/macbook.png",
  off: 50,
  price: 450,
  rating: 0,
};

export default ProductCard1;
