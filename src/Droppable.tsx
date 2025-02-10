import { useDroppable } from "@dnd-kit/core";

export function Droppable(props: any) {
  const { setNodeRef } = useDroppable({
    id: props.id,
  });

  return <div ref={setNodeRef}>{props.children}</div>;
}
