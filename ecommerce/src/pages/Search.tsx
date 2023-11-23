import { SkeletonLoadingHome } from "../components/SkeletonLoading/SkeletonLoadingHome";
import { ProductNotFind } from "../components/ProductNotFind";
import { CardProduct } from "../components/CardProduct";
import { FilterPrice } from "../components/Filters/FilterPrice";
import UsePagination from "../components/Pagination/UsePagination";
import { getProductSearch } from "../services/api";
import useGetProducts from "../hooks/useGetProducts";
import LoadMoreButton from "../components/Pagination/LoadMoreButton";



export const Search = () => {

  const isMobile = window.innerWidth > 768 ? false : true;
  const GetProductsSearch = () => useGetProducts(getProductSearch);

  const {
    products,
    pageActive,
    totalPages,
    totalItems,
    handlePageChange,
    isLoading,

  } = GetProductsSearch();

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

        {isMobile && totalPages > 0 &&
          <>
            <LoadMoreButton totalPages={totalPages} onClick={handlePageChange} />
            <p className="text-[#888888] text-lg text-center mt-2 mb-7">Exibindo <strong className="text-[#1D1D1B] text-lg font-bold">{products?.length}</strong> de <strong className="text-[#1D1D1B] text-lg font-bold">{totalItems}</strong>  produtos no total </p>
          </>

        }

        {!isMobile && totalPages > 0 &&
          <UsePagination totalPages={totalPages} activePage={pageActive} onClick={handlePageChange} />
        }

      </div>

    </>

  )
}