import { Info } from '../../../types';
import './sources.css';

class Sources {
  public draw(data: Info[]) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    data.forEach((item) => {
      const sourceClone = <DocumentFragment>sourceItemTemp.content.cloneNode(true);

            sourceClone.querySelector('.source__item-name')!.textContent = item.name;
            sourceClone.querySelector('.source__item')!.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
    });

        document.querySelector('.sources')!.append(fragment);
  }
}

export default Sources;
