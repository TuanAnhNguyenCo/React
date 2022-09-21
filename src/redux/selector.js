import { createSelector } from "reselect"

export const jobList = (state) => state.jobs.jobs

export const productList = (state) => state.products.products

export const DeleteStatus  = (state)=>state.products.status

export const productDetail = createSelector(
    [
        productList,
        (state, id) => id
    ], (productList, id) => {
        if (productList.products)
        {
            const product = productList.products.find(pd => id == pd.id)
            if (product)
                return ['true',product]
        }
       
        return ['false', []]


    })


