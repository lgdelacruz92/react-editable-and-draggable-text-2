export const handleMouseDown = (s, e) => {
  return {
    ...s,
    event: {
      x: e.clientX,
      y: e.clientY,
      originalX: s.x,
      originalY: s.y,
      status: "mouse-down"
    }
  };
};

export const handleMouseMove = (s, e) => {
  if (s.event.status === "mouse-down") {
    return {
      ...s,
      x: e.clientX - s.event.x + s.event.originalX,
      y: e.clientY - s.event.y + s.event.originalY
    };
  } else {
    return { ...s };
  }
};

export const handleMouseUp = (s, e) => {
  return { ...s, event: { x: 0, y: 0, status: "mouse-up" } };
};
