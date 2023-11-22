import { SkeletonLoadingHome } from "../components/SkeletonLoading/SkeletonLoadingHome";
import { ProductNotFind } from "../components/ProductNotFind";
import { CardProduct } from "../components/CardProduct";
import { FilterPrice } from "../components/Filters/FilterPrice";

import useGetProductsSearch from "../hooks/useGetProductsSearch";
import UsePagination from "../components/Pagination/UsePagination";



export const Search = () => {

  const {
    products,
    isLoading,
    handlePageChange,
    pageActive,
    totalPages,
    totalItems

  } = useGetProductsSearch()



  return (

    <>

      <aside className="hidden md:block md:w-screen lg:w-60 mr-5">
        <p className="font-bold text-xl">Refine sua busca</p>
        <FilterPrice />
      </aside>

      <div className="flex-1 w-full">
        {isLoading && <SkeletonLoadingHome />}

        {products?.length === 0 && <ProductNotFind />}

        {totalItems > 0 &&
          <div className="w-full mb-5 text-lg border-b border-[rgba(213, 213, 213, 1)] md:border-none">
            <span className=" text-[#262626]  "><strong>{totalItems}</strong> produtos encontrados</span>
          </div>

        }

        <div className="w-full grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-8 mt-8">

          {products && products.map((product, index) => (
            <CardProduct
              key={index}
              id={product.id}
              title={product.name}
              image={product.image}
              flag={product.flag}
              price={product.price}
              discount={product.discount}
              priceMember={product.priceMember}
              priceNonMember={product.priceNonMember}
            />
          ))}



        </div>

        {totalPages > 0 &&

          <UsePagination totalPages={totalPages} activePage={pageActive} onClick={handlePageChange} />

        }

      </div>

    </>

  )
}