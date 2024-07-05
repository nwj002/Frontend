import { render, waitFor } from "@testing-library/react";
import React from "react";
import productMockData from "../../__mock__/productMockData";
import { getAllProducts } from "../../apis/api";
import Homepage from "./Homepage";


//mock the api.js
jest.mock('../../apis/api');

//test case
describe('Homepage', () => {

    //clear all mocks
    afterEach(() => {
        jest.clearAllMocks();
    });

    //test 1
    it('should display all product in homepage', async () => {



        //mock response
        // const mock_data = {
        //     data: {
        //         'success': true,
        //         'message': 'Product Fetched Successfully',
        //         'products': [{ product1 }, { product2 }]
        //     }
        // }

        const mock_data = productMockData;
        getAllProducts.mockResolvedValue({
            data: {
                products: mock_data
            }
        });
        //config all 
        render(<Homepage />);
        //configured

        waitFor(() => {
            mock_data.forEach(product => {
                expect(screen.getByText(product.productName)).toBeInTheDocument();
            })
        })

    });
});