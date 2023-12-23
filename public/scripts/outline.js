const kebabCase = string => string
  .replace(/([a-z])([A-Z])/g, '$1-$2')
  .replace(/[\s_]+/g, '-')
  .toLowerCase();

function isVisibleInViewport(element) {
  const rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (
      window.innerHeight || document.documentElement.clientHeight
    ) &&
    rect.right <= (
      window.innerWidth || document.documentElement.clientWidth
    )
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const headerElements = document.querySelectorAll('.docs :is(h2, h3)');

  const headers = [...headerElements].map((header) => ({
    type: Number(header.tagName[1]) - 1,
    content: header.innerText,
  }));

  headerElements.forEach((header) => {
    header.setAttribute('id', kebabCase(header.innerText));

    header.innerHTML = header.innerHTML.replace(
      header.innerText,
      `<a href="#${kebabCase(header.innerText)}">${header.innerText}</a>`,
    );
  });

  const list = document.querySelector('.outline');

  headers.forEach((header) => {
    const link = document.createElement('a');

    link.setAttribute('href', `#${kebabCase(header.content)}`);

    link.innerHTML = header.content;
    link.classList.add('outline__item');
    link.classList.add(`outline__item--level-${header.type}`);

    list.appendChild(link);
  });

  function highlightAsideLinks() {
    for (const header of headerElements) {
      const navLink = document.querySelector(
        `.outline__item[href="#${header.id}"]`,
      );

      navLink.classList.remove('outline__item--active');
    }

    const currentHeader = [...headerElements].find((header) => isVisibleInViewport(header));

    if (!currentHeader) {
      return;
    }

    const navLink = document.querySelector(
      `.outline__item[href="#${currentHeader.id}"]`,
    );

    navLink.classList.add('outline__item--active');
  }

  addEventListener('scroll', highlightAsideLinks);

  highlightAsideLinks();
});
