import React from 'react';
import classnames from 'classnames';
import Button from '../Button'

const Sort = ({
  sortKey,
  onSort,
  activeSortKey,
  children
}) => {
  const sortClass = classnames(
    'button-inline',
    { 'button-active': sortKey === activeSortKey }
  );

  return (
    <Button
      onClick={() => onSort(sortKey)}
      className={sortClass}
    >
      {children}
    </Button>
  )
}

export default Sort
