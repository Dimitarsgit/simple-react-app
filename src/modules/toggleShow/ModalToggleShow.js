import { useState } from 'react';

const useToggleShow = (initialShow) => {
  const [isOpen, setIsOpen] = useState(initialShow);

  function toggleShow() {
    setIsOpen(!isOpen);
  }

  return [isOpen, setIsOpen, { toggleShow }];
};

export default useToggleShow;
