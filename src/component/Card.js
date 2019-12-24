import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import img from "../assets/img_gift.svg";

const Layout = styled.div`
  margin: 2rem 0;
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const ImageSize = styled.img`
  width: 28.4375rem;
  @media (max-width: 768px) {
    width: 15rem;
  }
`;

const ImageSize2 = styled.img`
  width: 19rem;
  object-fit: contain;
  border: 1px solid black;
  @media (max-width: 768px) {
    width: 14rem;
  }
`;

const CardLayout = styled.div`
  background: #ffffff;
  box-shadow: 0 0.125rem 0.5rem 0 rgba(137, 137, 137, 0.3);
  border-radius: 0.375rem;
  border-radius: 0.375rem;
  width: 20rem;
  padding: 2rem;
  @media (max-width: 768px) {
    width: 15rem;
  }
`;

const ImageCard = styled.div`
  display: flex;
  justify-content: center;
`;

const Name = styled.div`
  font-wieght: 500;
  font-size: 2rem;
  color: #000000;
  letter-spacing: 0.035625rem;
  text-align: left;
  margin-top: 1rem;
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-top: 0.5rem;
  }
`;

const DetailLayout = styled.div`
  height: 3.7rem;
`;
const Detail = styled.div`
  opacity: 0.8;
  font-wweight: 300;
  font-size: 1.125rem;
  color: #000000;
  letter-spacing: 0.02rem;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Price = styled.div`
  font-weight: 500;
  font-size: 1.5rem;
  color: #000000;
  letter-spacing: 0.026875rem;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 1.8rem;
    font-size: 1.4rem;
  }
`;

const Button = styled.button`
  border: 0.0625rem solid #e25e59;
  border-radius: 0.375rem;
  border-radius: 0.375rem;
  background-color: #fff;
  width: 100%;
  height: 3.5rem;
  font-family: "Kanit";
  font-size: 1rem;
  color: #e25e59;
  letter-spacing: 0.018125rem;
  text-align: center;
  margin-top: 0.5rem;
`;

export default function Card(props) {
  const { min, max } = props.price;
  return (
    <Layout>
      {min !== undefined && max !== undefined ? (
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} md={12}>
            <CardLayout>
              <Grid container>
                <Grid item xs={12} md={12}>
                  <ImageCard>
                    <ImageSize2 src={img} />
                  </ImageCard>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Name>Adidas</Name>
                </Grid>
                <Grid item xs={12} md={12}>
                  <DetailLayout>
                    <Detail>รองเท้า Runfalcon รุ่น F36202</Detail>
                  </DetailLayout>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Price>65 บาท</Price>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Button>ดูรายละเอียดสินค้า</Button>
                </Grid>
              </Grid>
            </CardLayout>
          </Grid>
        </Grid>
      ) : (
        <ImageSize src={img} alt="img-gift" />
      )}
    </Layout>
  );
}
