import { withRouter } from 'next/router';
import Link from 'next/link';
import React, { Children } from 'react';

const ActiveLink = ({ router, children, ...props }) => {
  const child = Children.only(children);
  console.log(router.pathname);
  console.log(props.href);
  console.log(props.activeClassName);
  let className = child.props.className || null;
  if (router.pathname === props.href && props.activeClassName) {
    className = `${className !== null ? className : ''} ${
      props.activeClassName
    }`.trim();
  }

  delete props.activeClassName;

  return (
    <li className={className}>
      <Link {...props}>{React.cloneElement(child, { className })}</Link>
    </li>
  );
};

export default withRouter(ActiveLink);
