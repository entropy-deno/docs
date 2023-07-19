import { Controller, Route } from '@entropy';

export class BadgeController implements Controller {
  @Route.Get('/badges/:name')
  public index(name: string) {
    return new Response(`
      <svg viewBox="0 0 240 32" width="240" height="32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" aria-label="Made with Entropy">
        <title>${name}</title>

        <clipPath id="r">
          <rect width="240" height="32" rx="6" fill="#fff"/>
        </clipPath>

        <g clip-path="url(#r)">
          <rect width="94" height="32" fill="#8255e2"/>
          <rect x="94" width="146" height="32" fill="#9868ff"/>
        </g>

        <g fill="#fff" text-anchor="start" font-family="Arial, sans-serif" font-size="15" font-weight="600" text-rendering="geometricPrecision">
          <text x="26" y="20">${name}</text>
          <text x="100" y="20">Made with Entropy</text>
        </g>
      </svg>
    `, {
      headers: {
        'content-type': 'image/svg+xml; charset=utf-8',
      },
    });
  }
}
