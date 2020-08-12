import * as React from 'react';

interface Props {
  message: string,
}

export const ChildComponent: React.FC<Props> = (props) => {
  return (
    <div>
      <p>{props.message}</p>
      {props.children}
    </div>
  )
}
