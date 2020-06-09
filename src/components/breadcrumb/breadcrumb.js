import './breadcrumb.scss';
import React from 'react';

const Breadcrumb = (props) => {
  const { categories } = props;
  let breadcrumbList = [];

  if (categories) {
    breadcrumbList = categories.map((category, i) => {
      return <span key={i}>{category}</span>;
    });
  }

  return <div className="Breadcrumb">{breadcrumbList}</div>;
};
export default Breadcrumb;
