import HTMLIcon from '@app/assets/images/icon-html.svg';
import CSSIcon from '@app/assets/images/icon-css.svg';
import JSIcon from '@app/assets/images/icon-js.svg';
import AllyIcon from '@app/assets/images/icon-accessibility.svg';


export function getImageUrl(iconPath: string) {

  if (iconPath.includes('html')) {
    return HTMLIcon;
  } else if (iconPath.includes('js')) {
    return JSIcon;
  } else if (iconPath.includes('css')) {
    return CSSIcon;
  } else {
    return AllyIcon;
  }
}