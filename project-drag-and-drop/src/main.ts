import './style.css';

const list = document.querySelector<HTMLUListElement>('ul')!;
const items = document.querySelectorAll<HTMLLIElement>('li')!;

/*** TO BE FINISHED: https://webdevtrick.com/html-drag-and-drop-list/ ****/

const initDraggable = () => {
  items.forEach((item) => {
    item.addEventListener('dragstart', (event) => {
      if (!event.dataTransfer) return;

      const id = (event.target as HTMLLIElement).id;
      // [1] define data type und attached data to drag event
      // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types
      event.dataTransfer.setData('text/plain', id);

      // [2] specifies the effect that is allowed for a drag operation
      // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/effectAllowed
      event.dataTransfer.effectAllowed = 'move';
    });

    item.addEventListener('dragend', (event) => {
      console.log(event);
    });
  });
};

const initDroppable = () => {
  list.addEventListener('dragenter', (event) => {
    // [3] preventDefault is mandatory, otherwise drag would be cancelled by default
    // so if my defined data type is NOT there, drag would be cancelled
    if (event.dataTransfer?.types[0] !== 'text/plain') return;

    event.preventDefault();
    // [4] set visual feedback for user
    list.classList.add('droppable');
  });

  list.addEventListener('dragover', (event) => {
    if (event.dataTransfer?.types[0] !== 'text/plain') return;
    event.preventDefault();
  });

  list.addEventListener('dragleave', (event) => {
    // [4] remove visual feedback for user
    // check if relatedTarget (area over which you move an dragged item) has an ancestor of your <ul>
    // so class is only removed if you leave your wished droppable area
    if ((event.relatedTarget as HTMLElement).closest('ul') !== list) {
      list.classList.remove('droppable');
    }
  });

  list.addEventListener('drop', (event) => {
    const id = event.dataTransfer?.getData('text/plain');

    list.classList.remove('droppable');
  });
};

initDraggable();
initDroppable();
