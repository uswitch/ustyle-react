import React from 'react';
import Button from './index';

export default () => (
  <div>
    <div>
      <Button href='#'>Link Button</Button>
      <Button>Button Element</Button>
    </div>
    <div>
      <Button href='#' variant='primary'>Link Button</Button>
      <Button variant='primary'>Button Element</Button>
    </div>
    <div>
      <Button href='#' variant='action'>Link Button</Button>
      <Button variant='action'>Button Element</Button>
    </div>
    <div>
      <Button href='#' variant='hero'>Link Button</Button>
      <Button variant='hero'>Button Element</Button>
    </div>
    <div style={{background: '#1c1f4e'}}>
      <Button href='#' variant='reversed'>Link Button</Button>
      <Button variant='reversed'>Button Element</Button>
    </div>
    <div>
      <Button href='#' size='large'>Link Button</Button>
      <Button size='large'>Button Element</Button>
    </div>
    <div>
      <Button href='#' size='small'>Link Button</Button>
      <Button size='small'>Button Element</Button>
    </div>
    <div>
      <Button href='#' blocked>Link Button</Button>
      <Button blocked>Button Element</Button>
    </div>
    <div>
      <Button href='#' link>Link Button</Button>
      <Button link>Button Element</Button>
    </div>
    <div>
      <Button href='#' stronger>Link Button</Button>
      <Button stronger>Button Element</Button>
    </div>
    <div>
      <Button href='#' disabled>Link Button</Button>
      <Button disabled>Button Element</Button>
    </div>
  </div>
);
