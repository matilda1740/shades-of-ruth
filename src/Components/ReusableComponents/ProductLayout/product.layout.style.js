import styled from "styled-components";

export const ProductsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    .innerProducts {
        width: 100%;
        height: 100%;
        display: flex;
    }

    .products_container {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }
    @media screen and (min-width: 1200px) {
        .products_container {
            width: 70% !important;
        }
    }
`;

export const ProductLayoutStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 320px;
    width: 31%;
    background-color: #f0f0f0;
    margin: 1.25rem 0.65rem;
    border-radius: 8px;
    padding: 1rem;
    transition: all 0.3s ease-in-out;
    * {
    padding: 0.35rem;
    }
    img {
        object-fit: contain;
        width: 80%;
        height: 65%;
        transition: all 0.3s ease-in-out;
    }
    :hover {
        transform: scale(1.02);
        cursor: pointer;
    }
    .product_description {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 38.5%;
        .product_purchase {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 !important;
        }

    }
    p { 
        padding: 0.5rem 0 0.25rem 0;
        text-align: center; 
        font-size: 0.9rem;
        width: 100%;
        height: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box !important;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        white-space: normal;

    }
.product_info_icons,
.faved_product {
  font-size: 28px !important;
}
.faved_product {
    color: #d00000;
}

    @media screen and (max-width: 812px) {
        width: 100%;
        p { padding-top: 0.5rem;font-size: 0.85rem;}
        height: fit-content;
    }
    @media screen and (min-width: 1200px) {
    }
`;