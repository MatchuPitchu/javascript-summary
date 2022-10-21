import './style.css';

/*** Dragged item was clicked ***/
// [1] set attribute draggable="true" to all items that should be draggable (-> HTML)
// [2] save item that should be dragged
// [3] define data type und attache data that you want to transfer to drag event
// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types
// [4] specify effect that is allowed for a drag operation
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/effectAllowed

/*** Dragged item enters valid drop target ***/
// [5] preventDefault is mandatory, otherwise drag would be cancelled by default,
// if my defined data type is NOT there, drag would be cancelled
// [6] set visual feedback for user

/*** Element is being dragged over a valid drop target ***/
// [7] set also preventDefault()

/*** Dragged element leaves a valid drop target ***/
// [8] remove visual feedback for user

/*** Element is dropped on a valid drop target ***/
// [9] if dragged element is NOT drop target, then switch content between them

/*** Drag operation is being ended ***/
// [10] clear added stylings

const initDragAndDrop = () => {
  const list = document.querySelector<HTMLUListElement>('ul')!;
  const items = document.querySelectorAll<HTMLLIElement>('li')!;

  let dragSourceElement: HTMLElement;

  items.forEach((item) => {
    item.addEventListener('dragstart', (event) => {
      if (!event.dataTransfer) return;
      // [2]
      dragSourceElement = event.target as HTMLLIElement;
      // [3]
      event.dataTransfer.setData('text/plain', dragSourceElement.innerHTML);
      // [4]
      event.dataTransfer.effectAllowed = 'move';
    });

    item.addEventListener('dragenter', (event) => {
      // [5]
      if (event.dataTransfer?.types[0] !== 'text/plain') return;
      event.preventDefault();

      // [6]
      (event.currentTarget as HTMLElement).classList.add('over');
    });

    item.addEventListener('dragover', (event) => {
      // [7]
      if (event.dataTransfer?.types[0] !== 'text/plain') return;
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
    });

    item.addEventListener('dragleave', () => {
      // [8]
      item.classList.remove('over');
    });

    item.addEventListener('drop', (event) => {
      const targetContent = event.currentTarget as HTMLElement;
      // [9]
      if (dragSourceElement !== targetContent) {
        dragSourceElement.innerHTML = targetContent.innerHTML;
        targetContent.innerHTML = event.dataTransfer?.getData('text/plain') ?? '';
      }

      list.classList.remove('over');
    });

    item.addEventListener('dragend', () => {
      // [10]
      const items = document.querySelectorAll<HTMLLIElement>('li')!;
      items.forEach((item) => {
        item.classList.remove('over');
      });
    });
  });
};

initDragAndDrop();

