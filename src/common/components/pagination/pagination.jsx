import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSearchParams } from 'react-router';

export function Pagination({ totalProducts }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryPage = searchParams.get('page') || '1';
  const limit = searchParams.get('limit') || '8';

  const page = isNaN(+queryPage) ? 1 : +queryPage;
  const limitNumber = Number(limit);

  const totalPages = Math.ceil(totalProducts / limitNumber);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;

    searchParams.set('page', page.toString());
    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-10 flex-wrap">
      <button
        className="p-2 rounded-full cursor-pointer bg-white/10 hover:bg-white/20 transition disabled:opacity-30 disabled:cursor-not-allowed"
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {Array.from({ length: totalPages }).map((_, index) => {
        const current = index + 1;
        const isActive = current === page;

        return (
          <button
            key={index}
            onClick={() => handlePageChange(current)}
            className={`
              w-9 h-9 cursor-pointer flex items-center justify-center rounded-full text-sm font-semibold
              transition-all duration-200
              ${
                isActive
                  ? 'bg-amber-900/85 text-white shadow-lg scale-110'
                  : ' text-black/40 hover:bg-amber-900/30'
              }
            `}
          >
            {current}
          </button>
        );
      })}

      <button
        className="p-2 rounded-full cursor-pointer hover:bg-amber-900/20 transition disabled:opacity-30 disabled:cursor-not-allowed"
        disabled={page === totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
