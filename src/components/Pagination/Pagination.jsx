import React from "react";
import PropTypes from "prop-types";
import Container from "components/Container";
import { MyPaginate, Prev, Next } from "./Pagination.styled";
import { useWindowSize } from "hooks/useWindowSize";

const Paginate = ({ total, handlePageClick, page }) => {
  const { isDesktop } = useWindowSize();
  return (
    <Container>
      <MyPaginate
        pageCount={total}
        onPageChange={handlePageClick}
        nextLabel={<Next />}
        previousLabel={<Prev />}
        pageRangeDisplayed={isDesktop ? 7 : 1}
        marginPagesDisplayed={2}
        breakLabel="..."
        renderOnZeroPageCount={null}
        forcePage={page - 1}
      />
    </Container>
  );
};

Paginate.propTypes = {
  total: PropTypes.number.isRequired,
  handlePageClick: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default Paginate;
