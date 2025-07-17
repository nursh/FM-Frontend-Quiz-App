

export function getImageBg(iconText: string) {

  const bgClass = iconText.includes('html')
    ? 'bg-orange'
    : iconText.includes('js')
      ? 'bg-blue'
      : iconText.includes('css')
        ? 'bg-green'
        : 'bg-purple';

  return bgClass;
}