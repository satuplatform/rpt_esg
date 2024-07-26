import { useDraggable } from '@dnd-kit/core';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css }) => ({
  // Supports the writing style of css object
  button: {
    padding: '5px',
    border: '1px solid gray',
    backgroundColor: 'white'
  },
}));

interface IDraggable {
  id: string;
  children: React.ReactNode;
}
export const Draggable = ({ id, children }: IDraggable) => {
  const { styles, cx, theme } = useStyles();
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div>
      <div
        className={styles.button}
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
      >
        {children}
      </div>
    </div>
  );
};
