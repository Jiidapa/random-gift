import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import medium from "../assets/ic_medium.svg";
import facebook from "../assets/ic_facebook.svg";
import instagram from "../assets/ic_instagram.svg";

const FooterLayout = styled.div`
  clear: both;
  left: 0;
  bottom: 0;
  height: 56px;
  width: 100%;
  background-color: #e25e59;
  display: flex;
  align-items: center;
  justyfy-content: center;
`;

const Text = styled.div`
  opacity: 0.82;
  font-family: "Kanit";
  font-size: 0.75rem;
  color: #ffffff;
  letter-spacing: 0.025rem;
  text-align: center;
  line-height: 1rem;
  font-weight: 300;
  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

const ContactLayout = styled.span`
  padding: 0.5rem;
`;

const Grid2 = styled(Grid)`
  @media (max-width: 1024px) {
    display: ${props => (props.show ? "none" : "")};
  }
`;


export default function Footer() {
  return (
    <FooterLayout>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={6} md={4}>
          <Text>© 2019 The Existing company. All Rights Reserved</Text>
        </Grid>
        <Grid2 show="true" item xs={4} md={4}>
          <Text>
            The Existing Co., Ltd. Asoke tower, 219/23 Sukhumvit 21 Rd., Khlong
            Toei Nuea, Watthana, Bangkok 10110 Thailand
          </Text>
        </Grid2>
        <Grid
          item
          xs={6}
          md={4}
          style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center !important"
          }}
        >
          <ContactLayout>
            <a
              href="https://medium.com/@anongnat.rat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={medium} alt="khaimook-medium" />
            </a>
          </ContactLayout>
          <ContactLayout display="true">
            <a
              href="https://www.facebook.com/TheExistingCompany"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="khaimook-facebook" />
            </a>
          </ContactLayout>
          <ContactLayout>
            <a
              href="https://www.instagram.com/existing.tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="khaimook-ig" />
            </a>
          </ContactLayout>
        </Grid>
      </Grid>
    </FooterLayout>
  );
}
