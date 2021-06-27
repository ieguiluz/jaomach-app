import React from 'react';
import Header from './components/Header';

import './JaomachTemplate.scss';

type JaomachTemplateProps = {
  children: any,
}

const JaomachTemplate = (props: JaomachTemplateProps) => {
  return (
    <div className="jaomach">
      <Header />
      { props.children }
    </div>
  )
};

export default JaomachTemplate;