import React from 'react';
import { useDroppable } from '@dnd-kit/core';

interface IDroppable {
  id: string;
  key: string;
  children: React.ReactNode;
}

export const Droppable = ({ id, key, children }: IDroppable) => {
  const  { isOver, setNodeRef } = useDroppable({
    id: id,
  });
  const style = {
    backgroundColor: isOver ? '#F1F1F1' : '',
    height: '60vh'
  };
  //console.log('over ', over); 

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};
