import * as React from 'react';

interface Props {
  message: string,
}

export const GrandsonComponent: React.FC<Props> = (props) => {
  return (
    <div>{props.message}</div>
  )
}
