export function generateID(): string {
  return Math.random().toString(36).substring(2 , 9) + '' + new Date() .getTime();
}

//

// export const Breadcrumb = ({
//   items = [
//     dummy.parent,
//     { name: dummy.name, id: dummy.id, parentId: dummy.parentId },
//     ...dummy.subCategories,
//   ],
// }: {
//   items?: { id: number; name: string; parentId: number }[];
// }) => {
//   return (
//     <div className="flex gap-1 text-sm font-medium text-primary">
//       {items?.map((item, idx) => (
//         <>
//           <span>{item.name}</span>
//           {items.length !== idx + 1 ? <span>/</span> : null}
//         </>
//       ))}
//     </div>
//   );
// };

// export interface CategoryBreadCrumbModel {
//   id: number;
//   name: string;
//   parentId: number;
//   parent: {
//     id: number;
//     name: string;
//     parentId: number;
//   };
//   subCategories: {
//     id: number;
//     name: string;
//     parentId: number;
//   }[];
// }

// const dummy: CategoryBreadCrumbModel = {
//   id: 1,
//   name: "گوشی موبایل",
//   parent: {
//     id: 2,
//     name: "موبایل و کالای دیجیتال",
//     parentId: 3,
//   },
//   parentId: 0,
//   subCategories: [
//     {
//       id: 5,
//       name: "اپل Apple",
//       parentId: 9,
//     },
//   ],
// };


// ایجاد فرم جستجو

// import { useState } from 'react';

// function SearchForm({ onSearch }) {
//   const [query, setQuery] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSearch(query);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="search-form">
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="محصول مورد نظر را جستجو کنید"
//         className="search-input"
//       />
//       <button type="submit" className="search-button">جستجو</button>
//     </form>
//   );
// }

// export default SearchForm;



//  منطق جستجو در کامپوننت والد

// import { useState } from 'react';
// import SearchForm from './SearchForm';
// import ProductList from './ProductList';

// const mockProducts = [
//   { id: 1, name: "تلفن همراه ۱" },
//   { id: 2, name: "تلفن همراه ۲" },
//   { id: 3, name: "لپتاپ ۱" },
//   // محصولات بیشتر...
// ];

// function SearchPage() {
//   const [results, setResults] = useState([]);
//   const [query, setQuery] = useState('');
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async (searchQuery) => {
//     setQuery(searchQuery);
//     setError(null);
//     setLoading(true);

//     try {
//       if (searchQuery.trim() === '') {
//         setResults([]);
//         return;
//       }

//       const searchResults = mockProducts.filter(product => 
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );

//       setResults(searchResults);
//     } catch (e) {
//       setError('خطایی در فرآیند جستجو رخ داده است.');
//       console.error(e);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <SearchForm onSearch={handleSearch} />
//       {loading && <div>لطفاً صبر کنید...</div>}
//       {error && <div className="error-message">{error}</div>}
//       <ProductList products={results} query={query} />
//     </div>
//   );
// }

// export default SearchPage;


// . نمایش نتایج و هایلایت کلمه جستجو

// import React from 'react';

// function highlightQuery(text, query) {
//   if (!query) return text;
//   const parts = text.split(new RegExp(`(${query})`, 'gi'));
//   return parts.map((part, index) => 
//     part.toLowerCase() === query.toLowerCase() ? <span key={index} className="highlight">{part}</span> : part
//   );
// }

// function ProductList({ products, query }) {
//   if (products.length === 0) {
//     return <div className="no-results">هیچ محصولی یافت نشد</div>;
//   }

//   return (
//     <div className="product-list">
//       {products.map(product => (
//         <div key={product.id} className="product-item">
//           {highlightQuery(product.name, query)}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductList;
