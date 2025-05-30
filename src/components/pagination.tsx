import { Button } from "./ui/button";
import { ArrowLeft } from "../assets/icons/arrow-left";
import { ArrowRight } from "../assets/icons/arrow-right";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };


  return (
    <div className="flex justify-center gap-3 mt-auto mb-4">
      <Button
        variant="primary"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ArrowLeft stroke={currentPage === 1 ? "#eae6fdb6" : "#FFF"} />
      </Button>

      {getPageNumbers().map((pageNumber, index) => (
        <Button
          key={index}
          variant="primary"
          size="sm"
          disabled={pageNumber === currentPage}
          onClick={() =>
            typeof pageNumber === "number" ? onPageChange(pageNumber) : null
          }
        >
          {pageNumber}
        </Button>
      ))}

      <Button
        variant="primary"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ArrowRight
          stroke={currentPage === totalPages ? "#eae6fdb6" : "#FFF"}
        />
      </Button>
    </div>
  );
}
