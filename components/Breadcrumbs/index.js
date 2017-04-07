import React, {PureComponent, PropTypes} from 'react';

class Breadcrumb extends PureComponent {
  onClickHandler (e) {
    const { item, onClick } = this.props;
    onClick(e, item);
  }
  render () {
    const { item, isLast } = this.props;
    return (
      <li className='us-crumbs__item'>
        { isLast
          ? item.text
          : <a className='us-crumbs__link'
            href={item.href}
            title={item.text}
            children={item.text}
            onClick={this.onClickHandler.bind(this)} /> }
      </li>
    );
  }
}

Breadcrumb.propTypes = {
  item: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string
  }),
  isLast: PropTypes.bool,
  onClick: PropTypes.func
};

Breadcrumb.defaultProps = {
  isLast: false,
  onClick: () => {}
};

export default class Breadcrumbs extends PureComponent {
  render () {
    const { items, onClick } = this.props;
    return (
      <ul className='us-crumbs'>
        {items.map((item, i) => {
          const isLast = (i === (items.length - 1));
          const key = i;
          const props = { key, item, isLast, onClick };
          return <Breadcrumb {...props} />;
        })}
      </ul>
    );
  }
}

Breadcrumbs.PropTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string
  })).isRequired,
  onClick: PropTypes.func
};

Breadcrumbs.defaultProps = {
  onClick: () => {}
};
