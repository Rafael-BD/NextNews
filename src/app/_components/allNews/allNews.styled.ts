import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { styled } from "styled-components";

const GridContainer = styled(Grid)`
    && {
        margin-bottom: 2rem;     
    }
  `;

  const CardContainer = styled(Card)`
    && {
      height: 100%;
      max-width: 20rem;
      background-color: transparent;
      box-shadow: 0 0rem 0.2rem ${props => props.theme.Transparency};
    }
  `;

  const CardMediaContainer = styled(CardMedia)`
    && {
      height: 100%;
      max-width: 20rem;
    }
  `;

  const Title = styled.h1`
    && {
      font-size: 1.2rem;
      margin-top: 1rem;
      padding: 0 0.8rem;

      @media (max-width: 768px) {
        font-size: 0.8rem;
      }
    }
  `;

  const Text = styled.h2`
    && {
      font-size: 0.9rem;
      margin-top: 0.5rem;
      padding: 0 0.8rem;

        @media (max-width: 768px) {
            font-size: 0.6rem;
        }
    }
  `;

export { GridContainer, CardContainer, CardMediaContainer, Title, Text };