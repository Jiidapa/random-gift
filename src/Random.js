import React, { useState } from "react";
import axios from "axios";
import { css } from "@emotion/core";
import { PulseLoader } from "react-spinners";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Card from "./component/Card";

const price1 = [
  {
    value: "1",
    label: "ราคาต่ำสุด"
  },
  {
    value: "100",
    label: "100"
  },
  {
    value: "300",
    label: "300"
  },
  {
    value: "500",
    label: "500"
  },
  {
    value: "1000",
    label: "1000"
  },
  {
    value: "3000",
    label: "3000"
  },
  {
    value: "5000",
    label: "5000"
  },
  {
    value: "10000",
    label: "10000"
  },
  {
    value: "30000",
    label: "30000"
  },
  {
    value: "50000",
    label: "50000"
  },
  {
    value: "100000",
    label: "100000"
  }
];

const price2 = [
  {
    value: "100",
    label: "100"
  },
  {
    value: "300",
    label: "300"
  },
  {
    value: "500",
    label: "500"
  },
  {
    value: "1000",
    label: "1000"
  },
  {
    value: "3000",
    label: "3000"
  },
  {
    value: "5000",
    label: "5000"
  },
  {
    value: "10000",
    label: "10000"
  },
  {
    value: "30000",
    label: "30000"
  },
  {
    value: "50000",
    label: "50000"
  },
  {
    value: "100000",
    label: "100000"
  },
  {
    value: "110000",
    label: "ราคาสูงสุด"
  }
];

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text1 = styled.div`
  text-align: center;
  font-size: 3.5rem;
  color: #000000;
  margin-top: 1rem;
  letter-spacing: 0.0625rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Text2 = styled.div`
  font-weight: 300;
  opacity: 0.71;
  font-size: 1.25rem;
  color: #000000;
  letter-spacing: 0.0225rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
const Top1 = styled.div`
  margin-top: 1.5rem;
`;

const SelectMin = styled.div`
  padding-right: 1rem;
  @media (max-width: 768px) {
    padding-right: 0.25rem;
  }
`;

const SelectMax = styled.div`
  padding-left: 1rem;
  @media (max-width: 768px) {
    padding-left: 0.25rem;
  }
`;

const BtnLayout = styled.div`
  padding-left: 2rem;
  @media (max-width: 768px) {
    padding-left: 0;
    margin-top: 1rem;
  }
`;

const RandomButton = styled(Button)`
  box-shadow: none !important;
  background-color: #e25e59 !important;
  border: 0;
  border-radius: 0.375rem;
  border-radius: 0.375rem;
  color: #fff !important;
  font-family: "Kanit" !important;
  font-size: 1rem;
  height: 3.5rem;
  width: 10rem;
  &:hover {
    background-color: #d6534e !important;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImageLayout = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Random() {
  const [minPrice, setMinPrice] = useState("1");
  const [maxPrice, setMaxPrice] = useState("110000");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    let price = {};
    if (minPrice < maxPrice) {
      price = {
        min: parseInt(minPrice),
        max: parseInt(maxPrice)
      }
    } else {
      price = {
        min: parseInt(maxPrice),
        max: parseInt(minPrice)
      }
      setMinPrice(maxPrice)
      setMaxPrice(minPrice)
    }
    setLoading(true);
    const res = await axios.post(
      "https://randomgift-existing.herokuapp.com/randomgift",
      price
    );
    setData(res.data);
    setLoading(false);
  }

  return (
    <div>
      {loading ? (
        <div style={{ marginTop: "2rem" }}>
          <PulseLoader
            css={override}
            size={20}
            color={"#e25e59"}
            loading={loading}
          />
          <div style={{ textAlign: "center" }}>กำลังสุ่มของขวัญ</div>
        </div>
      ) : (
        <Layout>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={11} md={12}>
              <Text1>ปีใหม่นี้ ซื้ออะไรดี</Text1>
            </Grid>
            <Grid item xs={11} md={12} style={{ marginTop: "1rem" }}>
              <Text2>
                เข้าช่วงเทศกาลปีใหม่แล้ว
                แต่ยังไม่รู้จะซื้อของขวัญอะไรไปจับ​สลากดี
              </Text2>
              <Text2>
                ลองเลือกช่วงราคา แล้วกดปุ่มสุ่มของขวัญดูสิ
                บางทีมันอาจจะช่วยคุณได้นะ
              </Text2>
            </Grid>
            <Grid item xs={11} md={12} style={{ marginTop: "1rem" }}>
              <Top1>
                <Grid container justify="center" alignItems="center">
                  <Grid item xs={6} md={2}>
                    <Grid container justify="flex-end">
                      <Grid item xs={12} md={12}>
                        <SelectMin>
                          <TextField
                            id="min-price"
                            select
                            label="Min Price"
                            value={minPrice}
                            onChange={e => setMinPrice(e.target.value)}
                            variant="outlined"
                            fullWidth
                          >
                            {price1.map(option => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </SelectMin>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={12}>
                        <SelectMax>
                          <TextField
                            id="max-price"
                            select
                            label="Max Price"
                            value={maxPrice}
                            onChange={e => setMaxPrice(e.target.value)}
                            variant="outlined"
                            fullWidth
                          >
                            {price2.map(option => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </SelectMax>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={12}>
                        <BtnLayout>
                          <RandomButton
                            onClick={handleSubmit}
                            variant="contained"
                            color="primary"
                          >
                            สุ่มของขวัญ
                          </RandomButton>
                        </BtnLayout>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={11} md={12}>
                    <ImageLayout>
                      <Card price={data} />
                    </ImageLayout>
                  </Grid>
                </Grid>
              </Top1>
            </Grid>
          </Grid>
        </Layout>
      )}
    </div>
  );
}
