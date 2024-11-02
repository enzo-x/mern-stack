import Pagination from 'react-bootstrap/Pagination';

function PaginationBox({ nextPage, pageNo, maxPageNo }) {
  const startPage = Math.max(1, pageNo - 2);
  const endPage = Math.min(maxPageNo, pageNo + 2);
  const pages = [];

  for (let i = startPage; i <= endPage; i++) {
    pages.push(
      <Pagination.Item key={i} active={i === pageNo} onClick={() => nextPage(i)}>
        {i}
      </Pagination.Item>
    );
  }

  return (
    <Pagination>
      <Pagination.First onClick={() => nextPage(1)} disabled={pageNo === 1} />
      <Pagination.Prev onClick={() => nextPage(pageNo - 1)} disabled={pageNo === 1} />

      {startPage > 1 && <Pagination.Ellipsis />}
      
      {pages}

      {endPage < maxPageNo && <Pagination.Ellipsis />}

      <Pagination.Next onClick={() => nextPage(pageNo + 1)} disabled={pageNo === maxPageNo} />
      <Pagination.Last onClick={() => nextPage(maxPageNo)} disabled={pageNo === maxPageNo} />
    </Pagination>
  );
}

export default PaginationBox;